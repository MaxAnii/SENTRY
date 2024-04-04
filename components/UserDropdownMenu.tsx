"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SignOut from "./SignOutButton";
import Link from "next/link";
import { useCurrentUser } from "@/hook/CurrentUserSession";

const UserDropdownMenu = () => {
  const user = useCurrentUser();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img
            src={user?.image || "https://github.com/shadcn.png"}
            className="h-10 w-10 rounded-lg border-2 border-amber-300"
            alt="User Profile"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/account" className="w-full hover:text-slate-300 px-3 py-2 text-center">
              Profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOut></SignOut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserDropdownMenu;
