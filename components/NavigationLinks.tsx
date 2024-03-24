import Link from "next/link";

const NavigationLinks = () => {
  return (
    <Link href="/dashboard" className="ml-2 rounded-lg bg-accent p-2 text-sm">
      Dashboard
    </Link>
  );
};
export default NavigationLinks;
