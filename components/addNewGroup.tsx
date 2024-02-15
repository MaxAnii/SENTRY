"use client";
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
import { useEffect, useState } from "react";
import NewGroupForm from "./newGroupForm";
const AddNewGroup = () => {
	const [isClient, setIsClient] = useState<Boolean>(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	return (
		<div>
			{isClient && (
				<AlertDialog>
					<AlertDialogTrigger className="mt-3">
						<div className="bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-md p-2">
							Add new group
						</div>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Add new group</AlertDialogTitle>
							<AlertDialogDescription>
								<NewGroupForm></NewGroupForm>
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			)}
		</div>
	);
};

export default AddNewGroup;
