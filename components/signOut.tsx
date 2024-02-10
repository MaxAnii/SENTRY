"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
const SignOut = () => {
	const rout = useRouter();
	return (
		<Button
			className="p-2 text-sm ml-2"
			onClick={() => {
				rout.push("/", { scroll: false });
				localStorage.removeItem("login");
			}}
		>
			Logout
		</Button>
	);
};

export default SignOut;
