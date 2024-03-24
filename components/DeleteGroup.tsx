"use client";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { Button } from "./ui/button";
import { deleteGroup } from "@/actions/groups";
import { useTransition } from "react";
const DeleteGroup = ({
  ...props
}: {
  id: string;
  setCallFunction: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isPending, startTransition] = useTransition();
  const clickHandler = () => {
    startTransition(async () => {
      const data = await deleteGroup(props.id);
      if (data) props.setCallFunction((prev) => !prev);
    });
  };
  return (
    <div>
      <Button variant="destructive" onClick={clickHandler} disabled={isPending}>
        <MdOutlineDeleteSweep size="1.5rem" />
      </Button>
    </div>
  );
};

export default DeleteGroup;
