import { Link } from "react-router-dom";

const NavMenus = () => {
  return (
    <div className=" md:block sm:hidden hidden">
      <ul className="flex items-center gap-8 list-none text-sm font-semibold">
        <li>
          <a
            className=" cursor-pointer hover:text-green-500 duration-500 ease-in-out transition-all"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          {/* About */}
          <a
            className=" cursor-pointer hover:text-green-500 duration-500 ease-in-out transition-all"
            href="/About"
          >
            About
          </a>
        </li>
        <li className=" cursor-pointer hover:text-green-500 duration-500 ease-in-out transition-all">
          Services
        </li>
        <li className=" cursor-pointer hover:text-green-500 duration-500 ease-in-out transition-all">
          Contact
        </li>
        <li className=" cursor-pointer hover:text-green-500 duration-500 ease-in-out transition-all">
          Projects
        </li>
        <li className=" cursor-pointer hover:text-green-500 duration-500 ease-in-out transition-all">
          Blogs
        </li>
      </ul>
    </div>
  );
};

export default NavMenus;
