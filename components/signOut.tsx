import { signOut } from "@/auth";
import { Button } from "./ui/button";

const SignOut = () => {
	return (
		<form
			action={async () => {
				"use server";
				await signOut();
			}}
		>
			<Button className="pl-2  text-sm" type="submit">
				Logout
			</Button>
		</form>
	);
};

export default SignOut;
