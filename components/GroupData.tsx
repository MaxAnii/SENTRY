import { useContext } from "react";
import { GroupListContext } from "@/hook/GroupListContext";
import ListGroupTable from "@/components/ListGroupTable";
import { Triangle } from "react-loader-spinner";
const GroupData = () => {
  const groupList = useContext(GroupListContext);
  return (
    <div className=" my-4 h-[80vh]  p-2 md:mx-[15vw]  md:p-4">
      {!groupList.gettingGroupList ? (
        <ListGroupTable></ListGroupTable>
      ) : (
        <div className="flex h-[80vh] items-center justify-center">
          <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
          />
        </div>
      )}
    </div>
  );
};

export default GroupData;
