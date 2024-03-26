"use client";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
const ThemeToggelButton = () => {
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
    <div className="mt-2 flex gap-x-2">
      <Switch
        checked={toggel}
        onCheckedChange={() => setToggel((prev) => !prev)}
      />
      <Label>
        <MdDarkMode size={20}></MdDarkMode>
      </Label>
    </div>
  );
};

export default ThemeToggelButton;
