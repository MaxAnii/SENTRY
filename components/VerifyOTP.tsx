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
const VerifyOTP = () => {
	const form = useForm<z.infer<typeof otpDataSchema>>({
		resolver: zodResolver(otpDataSchema),
		defaultValues: {
			otp: "",
		},
	});
	const confrimOTP = () => {};
	return (
		<div>
			<Form {...form}>
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
					<Button type="submit" className="w-full dark:text-white text-black">
						Confrim OTP
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default VerifyOTP;
