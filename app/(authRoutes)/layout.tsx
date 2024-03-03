import DashNav from "@/components/dashNav";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
const layout = async ({ children }: { children: React.ReactNode }) => {
	const session = await auth();
	return (
		<div>
			<SessionProvider session={session}>
				<DashNav></DashNav>
				{children}
			</SessionProvider>
		</div>
	);
};

export default layout;
