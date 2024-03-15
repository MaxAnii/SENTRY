"use client";
import { Button } from "@/components/ui/button";
import LandingNav from "@/components/landingNav";
import { useRouter } from "next/navigation";
export default function Home() {
	const router = useRouter();
	return (
		<>
			<LandingNav></LandingNav>
			<div className="flex items-center justify-center h-[90vh] ">
				<div className="text-center ">
					<button className="dark:text-green-400 text-xl rounded-3xl my-2 p-5 bg-gray-200 dark:bg-accent text-green-600">
						Welcome to SENTRY
					</button>
					<h1 className="text-5xl font-bold">Protect Your Chat</h1>
					<div className="text-center p-4 px-[10vw] md:mx-[200px] ">
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
							onClick={() => router.push("/signIn")}
						>
							Get Started
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
