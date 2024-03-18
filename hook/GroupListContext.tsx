"use client";
import {
	createContext,
	useState,
	useEffect,
	ReactNode,
	useTransition,
} from "react";
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
	gettingGroupList: Boolean;
};

export const GroupListContext = createContext<GroupListContextType>({
	data: undefined,
	setCallFunction: () => {},
	gettingGroupList: false,
});

const GroupListProvider = ({ children }: { children: ReactNode }) => {
	const [gettingGroupList, startTransition] = useTransition();
	const [data, setData] = useState<GroupListType>();
	const [callFunction, setCallFunction] = useState<boolean>(false);

	const getList = async () => {
		const groupList = await getGroupList();
		setData(groupList);
	};

	useEffect(() => {
		startTransition(async () => {
			await getList();
		});
	}, [callFunction]);

	return (
		<GroupListContext.Provider
			value={{ data, setCallFunction, gettingGroupList }}
		>
			{children}
		</GroupListContext.Provider>
	);
};

export default GroupListProvider;
