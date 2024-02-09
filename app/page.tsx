import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex items-center justify-center h-[90vh] ">
			<div className="text-center ">
				<button className="text-green-400 text-l rounded-3xl my-2 p-3   bg-accent ">
					Welcome to SENTRY
				</button>
				<h1 className="text-5xl font-bold">Proctect Your Chat</h1>
				<div className="text-center p-4 px-[10vw]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi
					odio dolore provident, debitis consequatur facilis at? Quisquam magni
					exercitationem nihil asperiores ipsa officiis maxime sapiente,
					debitis, amet, at soluta.
				</div>
				<div className="text-3xl">
					<Button variant="outline" size="lg" className="text-xl font-light">
						Get Started
					</Button>
				</div>
			</div>
		</div>
	);
}
