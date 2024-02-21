import Link from "next/link";

const NavLinks = () => {
	return (
		<Link href="/dashboard" className="p-2 text-sm bg-accent rounded-lg ml-2">
			Dashboard
		</Link>
	);
};
export default NavLinks;
