"use client";
import { registerSchema } from "@/schemas";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormLabel,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
const RegisterForm = () => {
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: "",
			password: "",
			confrimPassword: "",
		},
	});
	const onsubmit = (values: z.infer<typeof registerSchema>) => {
		console.log(values);
	};
	return (
		<Form {...form}>
			<form className="space-y-6" onSubmit={form.handleSubmit(onsubmit)}>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="ansar@example.com"
									type="email"
									{...field}
								></Input>
							</FormControl>
							<FormMessage></FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder="********"
									type="password"
									{...field}
								></Input>
							</FormControl>
							<FormMessage></FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confrimPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confrim Password</FormLabel>
							<FormControl>
								<Input
									placeholder="********"
									type="password"
									{...field}
								></Input>
							</FormControl>
							<FormMessage></FormMessage>
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default RegisterForm;
