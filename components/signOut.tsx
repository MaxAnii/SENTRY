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
			<Button className="p-2 text-sm ml-2" type="submit">
				Logout
			</Button>
		</form>
	);
};

export default SignOut;
