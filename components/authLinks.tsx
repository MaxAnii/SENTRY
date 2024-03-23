import { Button } from "./ui/button";
import Link from "next/link";
const AuthLinks = () => {
  return (
    <div>
      <Button className="ml-2 font-medium" size="sm">
        <Link href="/signIn">Sign In</Link>
      </Button>
      <Button className="ml-2 font-medium" size="sm" variant="secondary">
        <Link href="/signUp">Sign Up</Link>
      </Button>
    </div>
  );
};

export default AuthLinks;
