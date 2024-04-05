"use client";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <span
      className="w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm hover:bg-red-700 transition-colors duration-300"
      onClick={() => signOut()}
    >
      Logout
    </span>
  );
};

export default SignOutButton;
