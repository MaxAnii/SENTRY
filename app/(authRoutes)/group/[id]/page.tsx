"use client";
import { useParams } from "next/navigation";
const page = () => {
	const params = useParams<{ id: string }>();
	console.log(params.id);
	return <div>asbvsfdgb gnasdg kn skadg sa</div>;
};

export default page;
