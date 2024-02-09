import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
type propsType = {
	children: React.ReactNode;
	title: string;
	backButtonLabel: string;
	backButtonhref: string;
};

const FormContainer = ({
	children,
	title,
	backButtonLabel,
	backButtonhref,
}: propsType) => {
	return (
		<div className="flex justify-center mt-[10vh] ">
			<Card className=" shadow-md w-[400px]">
				<CardHeader className="text-center">{title}</CardHeader>
				<CardContent>{children}</CardContent>
				<CardFooter className="gap-x-2">
					<Button variant="secondary" className="w-[50%]  ">
						<FaGoogle size={20}></FaGoogle>
					</Button>
					<Button variant="secondary" className="w-[50%] ">
						<FaWhatsapp size={20}></FaWhatsapp>
					</Button>
				</CardFooter>
				<CardFooter>
					<Link href={backButtonhref}>
						<Button variant="link">{backButtonLabel}</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
};

export default FormContainer;
