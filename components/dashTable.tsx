"use client";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NoTableScreen from "@/components/NoTableScreen";
import { useState, useTransition, useContext } from "react";
import { GroupListContext } from "@/hook/GroupListContext";
const DashTable = () => {
	const groupList = useContext(GroupListContext);
	if (!groupList.data) return;
	return (
		<div>
			{groupList.data.length ? (
				<Table>
					<TableCaption>A list of your Groups</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px] p-4">Icon</TableHead>
							<TableHead className=" p-4">Name</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{groupList.data.map((item: any, index: any) => {
							return (
								<TableRow key={index}>
									<TableCell className="font-medium p-4">
										<Avatar>
											<AvatarImage src="https://github.com/shadcn.png" />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</TableCell>
									<TableCell className=" pl-4">{item.groupName}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			) : (
				<NoTableScreen></NoTableScreen>
			)}
		</div>
	);
};

export default DashTable;
