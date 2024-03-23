"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserProfileForm from "./userProfileForm";

import { useCurrentUser } from "@/hook/current-user-session";
const UserAccountCard = () => {
  const user = useCurrentUser();

  return (
    <div>
      <div className="relative">
        <img
          src={user?.image || "https://github.com/shadcn.png"}
          className="absolute left-[180px] h-[150px]  w-[150px] rounded-full border-8 border-amber-300"
        />
      </div>
      <Card className="mt-20 w-[500px]">
        <CardHeader className="mt-20">
          <CardTitle>My Account</CardTitle>

          <CardDescription>
            Here you can see and update your profile
          </CardDescription>
        </CardHeader>

        <CardContent>
          <UserProfileForm></UserProfileForm>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserAccountCard;
