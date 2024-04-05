"use client";
import AddNewGroup from "@/components/addNewGroup";
import GroupData from "@/components/GroupData";

import NoNumberVerifiedAlert from "@/components/NoNumberVerifiedAlert";
import { useCurrentUser } from "@/hook/CurrentUserSession";

const Page = () => {
  const user = useCurrentUser();

  return (
    <div className="w-full">
      <div className="w-full px-5 md:flex lg:px-20">
        <div>
          <div className="pb-2 text-3xl">Groups</div>
          <div className="text-sm  font-light md:text-lg">
            Here you can see and add a new group.
          </div>
        </div>
        <div className="ml-auto mt-3 md:mt-0">
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

export default Page;
