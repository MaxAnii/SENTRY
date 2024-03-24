import React from 'react'
import { useContext } from "react";
import { GroupListContext } from "@/hook/GroupListContext";
import ListGroupTable from "@/components/ListGroupTable";
import { Triangle } from "react-loader-spinner";
const GroupData = () => {
    const groupList = useContext(GroupListContext);
    if (!groupList.data) return;
  return (
    <div className="my-4 h-[80vh] p-4 shadow-xl sm:mx-[5vw] md:mx-[15vw]">
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
  )
}

export default GroupData