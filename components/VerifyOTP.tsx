import {
	Form,
	FormControl,
	FormField,
	FormLabel,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { otpDataSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { useState, useTransition } from "react";
import { useSession } from "next-auth/react";
import { verifyOTP } from "@/actions/phone-number-verification";
const VerifyOTP = () => {
	const [messsage, setMessage] = useState<String | undefined>("");
	const [showOtpBtn, setShowOtpBtn] = useState<boolean>(true);
	const { update } = useSession();
	const [isPending, startTransition] = useTransition();
	const form = useForm<z.infer<typeof otpDataSchema>>({
		resolver: zodResolver(otpDataSchema),
		defaultValues: {
			otp: "",
		},
	});
	const confrimOTP = (values: z.infer<typeof otpDataSchema>) => {
		setMessage("");

		startTransition(() => {
			verifyOTP(values).then((data) => {
				update();
				setMessage(data?.message);
				if (data?.message === "Phone number updated") setShowOtpBtn(false);
				setTimeout(() => {
					setMessage("");
				}, 5000);
			});
		});
	};
	return (
		<div>
			<Form {...form}>
				<p className="text-red-500">{messsage}</p>
				<form className="space-y-6" onSubmit={form.handleSubmit(confrimOTP)}>
					<FormField
						control={form.control}
						name="otp"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="xxxxxx" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					{showOtpBtn && (
						<Button
							type="submit"
							className="w-full dark:text-white text-black"
							disabled={isPending}
						>
							{!isPending ? "Confrim OTP" : "confriming OTP ..."}
						</Button>
					)}
				</form>
			</Form>
		</div>
	);
};

export default VerifyOTP;
