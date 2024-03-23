"use client";
import AddNewGroup from "@/components/addNewGroup";
import DashTable from "@/components/dashTable";
import NoNumberVerifiedAlert from "@/components/NoNumberVerifiedAlert";
import { useCurrentUser } from "@/hook/current-user-session";
import { useContext } from "react";
import { GroupListContext } from "@/hook/GroupListContext";
import { Triangle } from "react-loader-spinner";
const page = () => {
  const user = useCurrentUser();
  const groupList = useContext(GroupListContext);
  if (!groupList.data) return;
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
      <div className="my-4 h-[80vh] p-4 shadow-xl sm:mx-[5vw] md:mx-[15vw]">
        {!groupList.gettingGroupList ? (
          <DashTable></DashTable>
        ) : (
          <div className="flex h-[80vh] items-center justify-center">
            <Triangle
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="triangle-loading"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
