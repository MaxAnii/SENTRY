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
import { useTransition } from "react";

const NewGroupForm = () => {
	const [isPending, startTransition] = useTransition();
	const form = useForm<z.infer<typeof groupDataSchema>>({
		resolver: zodResolver(groupDataSchema),
		defaultValues: {
			groupName: "",
			toleranceLevel: "0",
			warning: "3",
			remove: "0",
		},
	});
	const onSubmit = (values: z.infer<typeof groupDataSchema>) => {
		console.log(values);
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
									<Input {...field} type="range" max="5"></Input>
								</FormControl>
								{field.value}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="warning"
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
						name="remove"
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
					<Button type="submit" className="w-full" disabled={isPending}>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default NewGroupForm;
