"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SignOut from "./signOut";
import Link from "next/link";
import { useCurrentUser } from "@/hook/current-user-session";

const UserDropdownMenu = () => {
	const user = useCurrentUser();

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<img
						src={user?.image || "https://github.com/shadcn.png"}
						className="h-10 w-10 rounded-lg border-amber-300 border-2"
					/>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link href="/account">Profile</Link>
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
