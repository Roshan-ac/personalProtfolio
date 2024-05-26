import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import NavMenus from "./NavMenus";
import RightMenu from "./RightMenu";
import { Home } from "lucide-react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [showBgNavbar, setBgNavbar] = useState(true);

  useEffect(() => {
    return scrollY.onChange((current) => {
      console.log(current);
      if (current > 100) {
        setBgNavbar(true);
      } else {
        setBgNavbar(false);
      }
    });
  }, [scrollY]);

  return (
    <>
      {showBgNavbar ? (
        <motion.div
          animate={{ y: ["-80%", "0%"] }}
          transition={{
            duration: 0.3,
            ease:'easeInOut'
          }}
          className="w-full z-50 md:p-6 p-4 fixed top-0 bg-[#1f1f1f]"
        >
          <div className="text-white m-auto container flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-green-500 md:text-3xl font-bold text-2xl mb-1 mr-[1.5]">P</span>
              <span className="md:text-2xl text-xl font-semibold">ortfolio</span>
            </div>
            <NavMenus />
            <RightMenu />
          </div>
        </motion.div>
      ) : (
        <motion.div className="w-full md:p-6 p-4 absolute top-0">
          <div className="text-white m-auto container flex items-center justify-between">
          <div className="flex items-center">
              <span className="text-green-500 md:text-3xl font-bold text-2xl mb-1 mr-[1.5]">P</span>
              <span className="md:text-2xl text-xl font-semibold">ortfolio</span>
            </div>
            <NavMenus />
            <RightMenu />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
