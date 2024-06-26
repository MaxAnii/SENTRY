import DashboardNavbar from "@/components/DashboardNavbar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import GroupListProvider from "@/hook/GroupListContext";
const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <div>
      <SessionProvider session={session}>
        <GroupListProvider>
          <DashboardNavbar></DashboardNavbar>
          {children}
        </GroupListProvider>
      </SessionProvider>
    </div>
  );
};

export default layout;
