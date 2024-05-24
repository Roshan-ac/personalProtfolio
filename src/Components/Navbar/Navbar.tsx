import NavMenus from "./NavMenus";
import RightMenu from "./RightMenu";
import { Home } from "lucide-react";
const Navbar = () => {
  return (
    <div className="flex px-12 items-center justify-between z-50 p-6 fixed top-0 w-full text-white">
      <div className="flex items-center gap-4">
        <Home size={30} className=" text-green-500" />
        <h3 className="text-2xl font-semibold">Home</h3>
      </div>
      <NavMenus />
      <RightMenu />
    </div>
  );
};

export default Navbar;
