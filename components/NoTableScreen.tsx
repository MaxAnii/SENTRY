import { RiTableAltLine } from "react-icons/ri";
import AddNewGroup from "@/components/addNewGroup";

const NoTableScreen = () => {
	return (
		<div>
			<div className="flex justify-center items-center w-full h-[50vh]">
				<div className="dark:bg-gray-900 bg-gray-100 w-20 h-20 rounded-full">
					<div className="p-4">
						<RiTableAltLine size="3rem" className="text-primary " />
					</div>
				</div>
			</div>
			<div className="text-center mt-[-18vh]">
				<h3 className="text-2xl">You don't have any groups added</h3>
				<p className="text-gray-500 text-xl my-1">
					You currently don't have any groups added, please added some so that
					you can see the right here
				</p>
				<div className="ml-1">
					<AddNewGroup></AddNewGroup>
				</div>
			</div>
		</div>
	);
};

export default NoTableScreen;
