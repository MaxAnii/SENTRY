"use client"
import { useTheme } from "next-themes"

const ThemeToggel = () => {
    const {setTheme} = useTheme()
  return (
    <div>
      
        <button className=" py-2 px-3" 
        onClick={()=>setTheme("light")}>
        Light
        </button>
        <button onClick={()=>setTheme("dark")} >
        Dark
        </button >
        </div>
  )
}

export default ThemeToggel