"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { whatsVerificationSchema } from "@/schemas";
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
const WhatAppVerificationForm = () => {
	const form = useForm<z.infer<typeof whatsVerificationSchema>>({
		resolver: zodResolver(whatsVerificationSchema),
		defaultValues: {
			phoneNumber: undefined,
		},
	});
	const onSubmit = async (
		values: z.infer<typeof whatsVerificationSchema>
	) => {};
	return (
		<div className="flex justify-center items-center h-screen">
			<Card className="w-[400px]">
				<CardHeader>
					<CardTitle>Verify Your WhatsApp number</CardTitle>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name="phoneNumber"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Enter your whatsApp number</FormLabel>
										<FormControl>
											<Input
												placeholder="xxxxxxxxxx"
												{...field}
												type="number"
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit">Get OTP</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default WhatAppVerificationForm;
