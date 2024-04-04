"use client";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
const ThemeToggelButton = () => {
  const { setTheme, theme } = useTheme();
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
        {toggel ? (
          <MdDarkMode size={20}></MdDarkMode>
        ) : (
          <MdLightMode size={20}></MdLightMode>
        )}
      </Label>
    </div>
  );
};

export default ThemeToggelButton;
