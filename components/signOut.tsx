"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const SignOut = () => {
	return (
		<Button className="pl-2  text-sm" onClick={() => signOut()}>
			Logout
		</Button>
	);
};

export default SignOut;
