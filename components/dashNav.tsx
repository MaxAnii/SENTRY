import NavBar from "@/components/NavBar";
import UserDropdownMenu from "@/components/UserDropdownMenu";
import NavLinks from "@/components/navLinks";

const DashNav = () => {
	return (
		<div>
			<NavBar>
				<>
					<NavLinks></NavLinks>
					<UserDropdownMenu></UserDropdownMenu>
				</>
			</NavBar>
		</div>
	);
};

export default DashNav;
