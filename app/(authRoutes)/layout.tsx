import DashNav from "@/components/dashNav";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<DashNav></DashNav>
			{children}
		</div>
	);
};

export default layout;
