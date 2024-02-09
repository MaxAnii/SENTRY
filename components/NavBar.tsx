import ThemeToggel from "./themeToggel"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  

const NavBar = () => {
  return (
    <div className="">
        
    


        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-4">
  <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <a className="flex-none text-xl font-semibold " href="#">SENTRY</a>
    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
      <a className="font-medium  ">Dashboard</a>
      <a className="font-medium  ">Dashboard</a>
      <a className="font-medium  ">Dashboard</a>
      <a className="font-medium  ">Dashboard</a>
    <ThemeToggel></ThemeToggel>
    </div>
  </nav>
</header>
    
    </div>
  )
}

export default NavBar