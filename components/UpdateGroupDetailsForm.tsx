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
import { UpdategroupDataSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateGroupDetails } from "@/actions/groups";
import { useContext, useState, useTransition } from "react";
import FormSubmissionSpinner from "./FormSubmissionSpinner";
import { GroupListContext, GroupType } from "@/hook/GroupListContext";
const UpdateGroupDetailsForm = (props: GroupType) => {
  const groupDetails = useContext(GroupListContext);

  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<String>("");
  const form = useForm<z.infer<typeof UpdategroupDataSchema>>({
    resolver: zodResolver(UpdategroupDataSchema),
    defaultValues: {
      id: props.id,
      userId: props.userId,
      groupName: props.groupName,
      warningPerUser: props.warningPerUser || "3",
      toleranceLevel: props.toleranceLevel || "0",
      removeUser: props.removeUser || "0",
    },
  });
  const onSubmit = (values: z.infer<typeof UpdategroupDataSchema>) => {
    console.log(values);
    startTransition(async () => {
      const data = await updateGroupDetails(values);
      if (data) {
        setMessage(data.message);
        groupDetails.setCallFunction((prev) => !prev);
      }

      setTimeout(() => setMessage(""), 5000);
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
          <p className=" text-red-500">{message}</p>
          {!isPending ? (
            <Button type="submit" className="w-full text-white">
              Update
            </Button>
          ) : (
            <FormSubmissionSpinner></FormSubmissionSpinner>
          )}
        </form>
      </Form>
    </div>
  );
};

export default UpdateGroupDetailsForm;
