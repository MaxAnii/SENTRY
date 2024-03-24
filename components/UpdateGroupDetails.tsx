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
import { MdEditNote } from "react-icons/md";
import { Button } from "./ui/button";
import { GroupType } from "@/hook/GroupListContext";
import UpdateGroupDetailsForm from "./UpdateGroupDetailsForm";
const UpdateGroupDetails = (props: GroupType) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="">
        <Button variant="secondary">
          <MdEditNote size="1.5rem" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Update Group Details</AlertDialogTitle>
          <AlertDialogDescription>
            <UpdateGroupDetailsForm {...props}></UpdateGroupDetailsForm>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="w-full bg-red-500">
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UpdateGroupDetails;
