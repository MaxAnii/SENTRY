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
import { useRouter } from "next/navigation";
import data from "../tempData/dashboard.json";
const DashTable = () => {
	const route = useRouter();

	return (
		<div>
			<Table>
				<TableCaption>A list of your Groups</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px] p-4">Icon</TableHead>
						<TableHead className=" p-4">Name</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((item) => {
						return (
							<TableRow
							// onClick={() => {
							// 	route.push(`/room/${item.id}`);
							// }}
							>
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
		</div>
	);
};

export default DashTable;
