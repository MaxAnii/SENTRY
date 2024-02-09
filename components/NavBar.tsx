import ThemeToggel from "./themeToggel";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "./ui/button";
import Link from "next/link";

const NavBar = () => {
	return (
		<div className="">
			<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-4">
				<nav
					className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
					aria-label="Global"
				>
					<Link className="flex-none text-xl font-semibold " href="/">
						SENTRY
					</Link>
					<div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
						<Button className="font-medium" size="sm">
							<Link href="/signIn">Sign In</Link>
						</Button>
						<Button className="font-medium" size="sm" variant="secondary">
							<Link href="/signUp">Sign Up</Link>
						</Button>

						<ThemeToggel></ThemeToggel>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default NavBar;
