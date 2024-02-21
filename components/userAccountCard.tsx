"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import UserProfileForm from "./userProfileForm";

const UserAccountCard = () => {
	return (
		<div>
			<div className="relative">
				<img
					src="https://github.com/shadcn.png"
					className="h-[150px] w-[150px] rounded-full  border-amber-300 border-8 absolute left-[180px]"
				/>
			</div>
			<Card className="w-[500px] mt-20">
				<CardHeader className="mt-20">
					<CardTitle>My Account</CardTitle>

					<CardDescription>
						Here you can see and update your profile
					</CardDescription>
				</CardHeader>
				<CardContent>
					<UserProfileForm></UserProfileForm>
				</CardContent>
			</Card>
		</div>
	);
};

export default UserAccountCard;
