"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserProfileForm from "@/components/UserProfileForm";

import { useCurrentUser } from "@/hook/CurrentUserSession";
const UserProfileCard = () => {
  const user = useCurrentUser();

  return (
    <div>
      <div className="relative">
        <img
          alt="user profile"
          src={user?.image || "https://github.com/shadcn.png"}
          className="absolute h-[120px] w-[120px] rounded-full border-8  border-amber-300 md:left-[180px] md:h-[150px] md:w-[150px]"
        />
      </div>
      <Card className="mt-20 md:w-[500px]">
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

export default UserProfileCard;
