const NavMenus = () => {
  return (
    <div className="">
      <ul className="flex items-center gap-8 list-none text-lg font-semibold">
        <li className=" cursor-pointer hover:text-green-500 duration-500 ease-in-out transition-all">Home</li>
        <li className=" cursor-pointer hover:text-green-500 duration-500 ease-in-out transition-all">About</li>
        <li className=" cursor-pointer hover:text-green-500 duration-500 ease-in-out transition-all">Services</li>
        <li className=" cursor-pointer hover:text-green-500 duration-500 ease-in-out transition-all">Contact</li>
        <li className=" cursor-pointer hover:text-green-500 duration-500 ease-in-out transition-all">Projects</li>
        <li className=" cursor-pointer hover:text-green-500 duration-500 ease-in-out transition-all">Blogs</li>
      </ul>
    </div>
  );
};

export default NavMenus;
