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
import { Button } from "./ui/button";
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
					<AlertDialogTrigger>
						<Button>Add a new group</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Add new group</AlertDialogTitle>
							<AlertDialogDescription>
								<NewGroupForm></NewGroupForm>
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel className="w-fulln">Cancel</AlertDialogCancel>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			)}
		</div>
	);
};

export default AddNewGroup;
