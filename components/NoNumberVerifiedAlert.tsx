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
const NoNumberVerifiedAlert = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="mt-3">
          <div className="rounded-md bg-primary p-2 text-primary-foreground shadow hover:bg-primary/90">
            Add new group
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alert</AlertDialogTitle>
            <AlertDialogDescription>
              <div>
                Before adding a new group, you need to verify your whatsApp
                number.
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-red-500">Ok</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default NoNumberVerifiedAlert;
