"use client";
import {
	Form,
	FormControl,
	FormField,
	FormLabel,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { groupDataSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useTransition } from "react";
import { useCurrentUser } from "@/hook/current-user-session";
import { addNewGroup } from "@/actions/groups";
import { useState } from "react";
import { GroupListContext } from "@/hook/GroupListContext";
const NewGroupForm = () => {
	const groupList = useContext(GroupListContext);
	const user = useCurrentUser();
	if (!user) return;
	const [isPending, startTransition] = useTransition();
	const [message, setMessage] = useState<String>("");
	const form = useForm<z.infer<typeof groupDataSchema>>({
		resolver: zodResolver(groupDataSchema),
		defaultValues: {
			userId: user?.id,
			groupName: "",
			toleranceLevel: "0",
			warningPerUser: "3",
			removeUser: "0",
		},
	});
	const onSubmit = (values: z.infer<typeof groupDataSchema>) => {
		startTransition(async () => {
			await addNewGroup(values).then((data) => {
				if (data?.message) {
					groupList.setCallFunction((prev) => !prev);
					setMessage(data.message);
					form.reset();
					setTimeout(() => {
						setMessage("");
					}, 5000);
				}
			});
		});
	};
	return (
		<div className=" ">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="groupName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Group Name</FormLabel>
								<FormControl>
									<Input
										type="text"
										placeholder="XYZ"
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
						name="toleranceLevel"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Tolerance Level</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="range"
										max="5"
										disabled={isPending}
									></Input>
								</FormControl>
								{field.value}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="warningPerUser"
						render={({ field }) => (
							<FormItem>
								<FormLabel>No. of warning (per user)</FormLabel>
								<FormControl>
									<Input {...field} type="range" max="5" disabled={isPending} />
								</FormControl>
								{field.value}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="removeUser"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Remove user after the warning (0 no & 1 yes)
								</FormLabel>
								<FormControl>
									<Input {...field} type="range" max="1" disabled={isPending} />
								</FormControl>
								{field.value}
								<FormMessage />
							</FormItem>
						)}
					/>
					<p className="text-red-500 text-xl">{message}</p>
					<Button
						type="submit"
						className="w-full text-white"
						disabled={isPending}
					>
						Add
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default NewGroupForm;
