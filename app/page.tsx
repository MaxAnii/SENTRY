import { Button } from "@/components/ui/button";
import LandingNav from "@/components/landingNav";
import Link from "next/link";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar>
        <></>
      </Navbar>
      <div className="flex h-[90vh] items-center justify-center ">
        <div className="text-center ">
          <button className="my-2 rounded-3xl bg-gray-200 p-5 text-xl text-green-600 dark:bg-accent dark:text-green-400">
            Welcome to SENTRY
          </button>
          <h1 className="text-5xl font-bold">Protect Your Chat</h1>
          <div className="p-4 px-[10vw] text-center md:mx-[200px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            eligendi odio dolore provident, debitis consequatur facilis at?
            Quisquam magni exercitationem nihil asperiores ipsa officiis maxime
            sapiente, debitis, amet, at soluta.
          </div>
          <div className="text-3xl ">
            <Button
              variant="outline"
              size="lg"
              className="text-xl text-indigo-950"
            >
              <Link href="/signIn">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
