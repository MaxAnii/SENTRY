"use client";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useState } from "react";
const ThemeToggel = () => {
	const { setTheme } = useTheme();
	const [toggel, setToggel] = useState<Boolean>(false);
	return (
		<div>
			{toggel ? (
				<button
					className=" py-2 px-3"
					onClick={() => {
						setTheme("light");
						setToggel(!toggel);
					}}
				>
					<CiLight size={15}></CiLight>
				</button>
			) : (
				<button
					onClick={() => {
						setTheme("dark");
						setToggel(!toggel);
					}}
				>
					<MdDarkMode size={20}></MdDarkMode>
				</button>
			)}
		</div>
	);
};

export default ThemeToggel;
