"use client";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/new-verification";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const page = () => {
	const route = useRouter();
	const params = useSearchParams();
	const token = params.get("token");
	const confrimToken = () => {
		if (!token) return;
		newVerification(token).then((data) => {
			if (data?.message === "verified") {
				route.push("/signIn");
			} else alert(data.message);
		});
	};
	useEffect(() => {
		confrimToken();
	}, []);
	return <div>page</div>;
};

export default page;
