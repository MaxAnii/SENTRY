"use client";
import AddNewGroup from "@/components/addNewGroup";
import GroupData from "@/components/GroupData";

import NoNumberVerifiedAlert from "@/components/NoNumberVerifiedAlert";
import { useCurrentUser } from "@/hook/current-user-session";


const page = () => {
  const user = useCurrentUser();

  return (
    <div className="pl-9 ">
      <div className="w-full max-w-[90vw] md:flex">
        <div>
          <div className="pb-2 text-3xl">Your Group</div>
          <p className="text-xl">Here you can see and add new groups </p>
        </div>
        <div className="ml-auto sm:mt-3 md:mt-0">
          {user?.phoneNumber ? (
            <AddNewGroup></AddNewGroup>
          ) : (
            <NoNumberVerifiedAlert></NoNumberVerifiedAlert>
          )}
        </div>
      </div>
      <GroupData></GroupData>
    </div>
  );
};

export default page;
