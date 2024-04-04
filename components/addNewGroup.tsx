"use client";
import {
  AlertDialog,
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
            <div className="rounded-md bg-primary p-2 text-primary-foreground shadow hover:bg-primary/90">
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
              <AlertDialogCancel className="w-full bg-red-500">
                Cancel
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default AddNewGroup;
