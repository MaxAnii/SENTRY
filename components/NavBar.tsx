"use client";
import ThemeToggel from "./themeToggel";

import Link from "next/link";
import AuthLinks from "./authLinks";

const NavBar = ({ children }: { children: React.ReactNode }) => {
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
						{children}
						<ThemeToggel></ThemeToggel>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default NavBar;
