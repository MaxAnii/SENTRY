import { RiTableAltLine } from "react-icons/ri";

const NoAddedGroupMessage = () => {
  return (
    <div>
      <div className="flex h-[50vh] w-full items-center justify-center">
        <div className="h-20 w-20 rounded-full bg-gray-100 dark:bg-gray-900">
          <div className="p-4">
            <RiTableAltLine size="3rem" className="text-primary " />
          </div>
        </div>
      </div>
      <div className="mt-[-18vh] text-center">
        <h3 className="text-2xl">No groups set up.</h3>
        <p className="my-1 text-xl text-gray-500">
          You currently don&apos;t have any groups, add a group to begin
          moderation.
        </p>
      </div>
    </div>
  );
};

export default NoAddedGroupMessage;
