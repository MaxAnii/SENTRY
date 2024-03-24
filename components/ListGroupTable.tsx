"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NoAddedGroupMessage from "@/components/NoAddedGroupMessage";
import { useContext } from "react";
import { GroupListContext } from "@/hook/GroupListContext";
import DeleteGroup from "./DeleteGroup";
import UpdateGroupDetails from "./UpdateGroupDetails";
const ListGroupTable = () => {
  const groupList = useContext(GroupListContext);
  if (!groupList.data) return;
  return (
    <div>
      {groupList.data.length ? (
        <Table>
          <TableCaption>A list of your Groups</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] p-4">Icon</TableHead>
              <TableHead className=" p-4">Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {groupList.data.map((item: any, index: any) => {
              return (
                <TableRow key={index}>
                  <TableCell className="p-4 font-medium">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className=" pl-4">{item.groupName}</TableCell>
                  <TableCell className="flex justify-end gap-2 ">
                    <UpdateGroupDetails {...item} />
                    <DeleteGroup
                      id={item.id}
                      setCallFunction={groupList.setCallFunction}
                    />
                  </TableCell>
                  <TableCell className=" "></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <NoAddedGroupMessage></NoAddedGroupMessage>
      )}
    </div>
  );
};

export default ListGroupTable;
