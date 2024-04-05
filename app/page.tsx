import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AuthLinks from "@/components/authLinks";
export default function Home() {
  return (
    <>
      <Navbar>
        <AuthLinks></AuthLinks>
      </Navbar>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-center">
          <button className="my-2 rounded-3xl bg-gray-200 p-5 text-xl text-green-600 dark:bg-accent dark:text-green-400">
            Welcome to SENTRY
          </button>
          <h1 className="text-3xl font-bold lg:text-5xl">Protect Your Chat</h1>
          <p className="w-full p-4 text-center lg:px-[120px]">
            Sentry offers a comprehensive solution to enhance user safety on
            digital platforms. By efficiently identifying and filtering out
            semantically toxic or offensive content, the service effectively
            curtails online harassment, bullying, and hate speech, fostering a
            more secure digital space.
          </p>
          <div className="text-3xl ">
            <Link href="/signIn">
              <Button
                variant="outline"
                size="lg"
                className="text-base text-indigo-950"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
