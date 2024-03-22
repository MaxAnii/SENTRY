"use client";
import { useState, useTransition } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { userPhoneNumberSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	Form,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { createOTP } from "@/actions/phone-number-verification";
import FormSubmissionSpinner from "../FormSubmissionSpinner";
import VerifyOTP from "../VerifyOTP";
const WhatAppVerificationForm = () => {
	const [message, setMessage] = useState<string>("");
	const form = useForm<z.infer<typeof userPhoneNumberSchema>>({
		resolver: zodResolver(userPhoneNumberSchema),
		defaultValues: {
			phoneNumber: "",
		},
	});
	const [showConfrimOTP, setShowConfrimOTP] = useState<Boolean>(false);
	const [showSendAgainOTP, setShowSendAgainOTP] = useState<Boolean>(false);
	const [timer, setTimer] = useState<number>(20);
	const [isPending, startTransition] = useTransition();
	const sendOTP = async (values: z.infer<typeof userPhoneNumberSchema>) => {
		setMessage("");
		if (!values.phoneNumber) return;
		startTransition(async () => {
			const data = await createOTP(values);
			if (data?.message === "OTP sent successfully") {
				setTimer(20);
				setShowSendAgainOTP(false);
				setShowConfrimOTP(true);
				const id = setInterval(() => {
					setTimer((prev) => {
						const newTimer = prev - 1;
						if (newTimer === 0) {
							setShowSendAgainOTP(true);
							clearInterval(id);
						}
						return newTimer;
					});
				}, 1000);
			} else setMessage(data?.message || "");
		});
	};

	return (
		<div className="flex justify-center mt-[20vh]">
			<Card className="w-[400px]">
				<CardHeader>
					{/* <CardTitle>Verify Your WhatsApp number</CardTitle> */}
				</CardHeader>
				<CardContent>
					{!showConfrimOTP ? (
						<Form {...form}>
							<p className="text-red-500">{message}</p>
							<form className="space-y-6" onSubmit={form.handleSubmit(sendOTP)}>
								<FormField
									control={form.control}
									name="phoneNumber"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Enter Your WhatsApp Number</FormLabel>
											<FormControl>
												<Input placeholder="xxxxxxxxxx" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								{!isPending ? (
									<Button
										type="submit"
										className="w-full dark:text-white text-black"
										disabled={isPending}
									>
										Get OTP
									</Button>
								) : (
									<FormSubmissionSpinner></FormSubmissionSpinner>
								)}
							</form>
						</Form>
					) : (
						<div>
							<VerifyOTP></VerifyOTP>
							<div className="pt-3 ">
								{showSendAgainOTP ? (
									<button
										className="text-blue-500 "
										onClick={() => {
											setShowConfrimOTP(false);
											setTimer(60);
										}}
									>
										Reverify phoneNumber
									</button>
								) : (
									<p>Reverify phoneNumber in {timer}</p>
								)}
							</div>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
};

export default WhatAppVerificationForm;
