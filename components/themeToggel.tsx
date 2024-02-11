"use client";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
const ThemeToggel = () => {
	const { setTheme } = useTheme();
	const [toggel, setToggel] = useState(true);

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (theme === "dark") {
			setToggel(true);
		} else setToggel(false);
	}, []);
	useEffect(() => {
		if (toggel) setTheme("dark");
		else setTheme("light");
	}, [toggel]);
	return (
		<div className="flex mt-2 gap-x-2">
			<Label>
				<MdDarkMode size={20}></MdDarkMode>
			</Label>
			<Switch
				checked={toggel}
				onCheckedChange={() => setToggel((prev) => !prev)}
			/>
		</div>
	);
};

export default ThemeToggel;
