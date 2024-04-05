import Link from "next/link";

const NavigationLinks = () => {
  return (
    <Link
      href="/dashboard"
      className="mb-4 rounded-md bg-accent p-2 px-3 text-center text-sm "
    >
      Dashboard
    </Link>
  );
};
export default NavigationLinks;
