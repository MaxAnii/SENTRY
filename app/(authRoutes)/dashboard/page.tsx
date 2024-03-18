"use client";
import AddNewGroup from "@/components/addNewGroup";
import DashTable from "@/components/dashTable";
import NoNumberVerifiedAlert from "@/components/NoNumberVerifiedAlert";
import { useCurrentUser } from "@/hook/current-user-session";
import { useContext } from "react";
import { GroupListContext } from "@/hook/GroupListContext";
import { Triangle } from "react-loader-spinner";
const page = () => {
	const user = useCurrentUser();
	const groupList = useContext(GroupListContext);
	if (!groupList.data) return;
	return (
		<div className="pl-9 ">
			<div className="md:flex max-w-[90vw] w-full">
				<div>
					<div className="text-3xl pb-2">Your Group</div>
					<p className="text-xl">Here you can see and add new groups </p>
				</div>
				<div className="ml-auto sm:mt-3 md:mt-0">
					{user?.phoneNumber ? (
						<AddNewGroup></AddNewGroup>
					) : (
						<NoNumberVerifiedAlert></NoNumberVerifiedAlert>
					)}
				</div>
			</div>
			<div className="shadow-xl h-[80vh] my-4 md:mx-[15vw] sm:mx-[5vw] p-4">
				{!groupList.gettingGroupList ? (
					<DashTable></DashTable>
				) : (
					<div className="flex justify-center items-center h-[80vh]">
						<Triangle
							height="80"
							width="80"
							color="#4fa94d"
							ariaLabel="triangle-loading"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default page;
