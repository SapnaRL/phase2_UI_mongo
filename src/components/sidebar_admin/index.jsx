/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import { routes_admin } from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[37px] mt-[40px] flex items-center`}>
        <div className="ml-1 mt-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white"></div>
      </div>
      {/* Nav item */}

      <ul className="mb-auto pt-7">
        <Links routes={routes_admin} />
      </ul>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
