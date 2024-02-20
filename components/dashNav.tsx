import NavBar from "./NavBar";
import Account from "./account";
import NavLinks from "./navLinks";

const DashNav = () => {
	return (
		<div>
			<NavBar>
				<>
					<NavLinks></NavLinks>
					<Account></Account>
				</>
			</NavBar>
		</div>
	);
};

export default DashNav;
