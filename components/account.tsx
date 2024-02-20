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

const Account = () => {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<div>
						<img
							src="https://github.com/shadcn.png"
							className="h-9 w-9 rounded-lg"
						/>
					</div>
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

export default Account;
