import Navbar from "@/components/Navbar";
import UserDropdownMenu from "@/components/UserDropdownMenu";
import NavigationLinks from "@/components/NavigationLinks";

const DashboardNavbar = () => {
  return (
    <div>
      <Navbar>
        <NavigationLinks></NavigationLinks>
        <UserDropdownMenu></UserDropdownMenu>
      </Navbar>
    </div>
  );
};

export default DashboardNavbar;
