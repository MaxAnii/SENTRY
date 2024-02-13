import Link from "next/link";
import { Button } from "./ui/button";
import SignOut from "./signOut";

const NavLinks = () => {
	const routes = [
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Home",
			href: "/dashboard",
		},
	];
	return (
		<div className="flex">
			{routes.map((item, index) => {
				return (
					<Link
						href={item.href}
						key={index}
						className="p-2 text-sm bg-accent rounded-lg ml-2"
					>
						{item.label}
					</Link>
				);
			})}
			<SignOut></SignOut>
		</div>
	);
};
export default NavLinks;
