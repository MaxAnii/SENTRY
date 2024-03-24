"use client";
import ThemeToggelButton from "@/components/ThemeToggelButton";

import Link from "next/link";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <header className="z-50 flex w-full flex-wrap py-4 text-sm  sm:flex-nowrap sm:justify-start">
        <nav
          className="mx-auto flex w-full max-w-[85rem] px-4 "
          aria-label="Global"
        >
          <div>
            <Link className="flex-none text-xl font-semibold " href="/">
              SENTRY
            </Link>
          </div>
          <div className="ml-auto mr-11 flex gap-x-3">
            {children}
            <ThemeToggelButton></ThemeToggelButton>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
