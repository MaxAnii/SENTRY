"use clinet";
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
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { userDataSchema } from "@/schemas";
import { Button } from "@/components/ui/button";

import { useState, useTransition } from "react";
import { useCurrentUser } from "@/lib/current-user-session";
import { updateProfile } from "@/actions/updateProfile";
import { useSession } from "next-auth/react";

type returnData = { error: string };
const UserProfileForm = () => {
	const [messsage, setMessage] = useState<String | undefined>("");
	const user = useCurrentUser();
	const { update } = useSession();
	const [isPending, startTransition] = useTransition();
	if (!user) return;
	const form = useForm<z.infer<typeof userDataSchema>>({
		resolver: zodResolver(userDataSchema),
		defaultValues: {
			id: user.id,
			name: user.name || "",
			email: user.email || "",
			phoneNumber: user.phoneNumber || "",
			image: user.image || "",
		},
	});
	const onSubmit = (values: z.infer<typeof userDataSchema>) => {
		setMessage("");

		startTransition(() => {
			updateProfile(values).then((data) => {
				update();
				setMessage(data?.message);
				setTimeout(() => {
					setMessage("");
				}, 5000);
			});
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Ex: Ansar"
									{...field}
									disabled={isPending}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="ansar@example.com"
									{...field}
									disabled={isPending}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phoneNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone Number</FormLabel>
							<FormControl>
								<Input type="number" placeholder="xxxxxxxxxx" {...field} />
							</FormControl>
							<FormMessage></FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="image"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image</FormLabel>
							<FormControl>
								<Input
									{...field}
									type="text"
									placeholder="https://github.com/shadcn.png"
									disabled={isPending}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="text-red-700">{messsage}</div>
				{!isPending ? (
					<Button type="submit" className="w-full">
						Update
					</Button>
				) : (
					<Button disabled={isPending} className="w-full">
						Updating...
					</Button>
				)}
			</form>
		</Form>
	);
};

export default UserProfileForm;
