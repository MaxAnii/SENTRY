import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
	Form,
	FormControl,
	FormField,
	FormLabel,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { otpDataSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
type propsType = {
	values: {
		id: string;
		name: string;
		email: string;
		phoneNumber: string;
		image: string;
	};
};
const ConfrimOTP = ({ ...props }: propsType) => {
	const form = useForm<z.infer<typeof otpDataSchema>>({
		resolver: zodResolver(otpDataSchema),
		defaultValues: {
			otp: "",
		},
	});
	const onSubmit = async (values: z.infer<typeof otpDataSchema>) => {};
	useEffect(() => {
		//  send otp to whatsApp number and store in db
	}, []);

	return (
		<div className=" ">
			<div>
				<AlertDialog>
					<AlertDialogTrigger className="mt-3">
						<div className="bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-md p-2 w-[450px]">
							Update
						</div>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Confrim the OTP</AlertDialogTitle>
							<AlertDialogDescription>
								<Form {...form}>
									<form
										className="space-y-6"
										onSubmit={form.handleSubmit(onSubmit)}
									>
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
										<Button type="submit" className="w-full">
											Confrim OTP
										</Button>
									</form>
								</Form>
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</div>
	);
};

export default ConfrimOTP;
