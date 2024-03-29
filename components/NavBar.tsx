"use client";
import ThemeToggelButton from "@/components/ThemeToggelButton";

import Link from "next/link";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav
      className="mx-auto flex w-full max-w-[85rem] flex-wrap p-4"
      aria-label="Global"
    >
      <div>
        <Link className="text-center text-xl font-semibold" href="/">
          SENTRY
        </Link>
        <ThemeToggelButton></ThemeToggelButton>
      </div>
      <div className=" ml-auto flex  gap-x-3">{children}</div>
    </nav>
  );
};

export default Navbar;
