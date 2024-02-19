"use client";
import ThemeToggel from "./themeToggel";

import Link from "next/link";

const NavBar = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="">
			<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-4">
				<nav
					className="max-w-[85rem] w-full mx-auto px-4 flex "
					aria-label="Global"
				>
					<div>
						<Link className="flex-none text-xl font-semibold " href="/">
							SENTRY
						</Link>
					</div>
					<div className="ml-auto mr-11 flex gap-x-3">
						{children}
						<ThemeToggel></ThemeToggel>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default NavBar;
