"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { getGroupList } from "@/actions/groups";

type GroupType = {
	id: string;
	userId: string;
	groupName: string;
	icon: string | null;
	warningPerUser: string | null;
	removeUser: string | null;
	toleranceLevel: string | null;
};

type GroupListType = GroupType[] | undefined;

type GroupListContextType = {
	data: GroupListType;
	setCallFunction: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GroupListContext = createContext<GroupListContextType>({
	data: undefined,
	setCallFunction: () => {},
});

const GroupListProvider = ({ children }: { children: ReactNode }) => {
	const [data, setData] = useState<GroupListType>();
	const [callFunction, setCallFunction] = useState<boolean>(false);

	const getList = async () => {
		const groupList = await getGroupList();
		setData(groupList);
	};

	useEffect(() => {
		getList();
	}, [callFunction]);

	return (
		<GroupListContext.Provider value={{ data, setCallFunction }}>
			{children}
		</GroupListContext.Provider>
	);
};

export default GroupListProvider;
