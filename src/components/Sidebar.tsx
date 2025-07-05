"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlinePets, MdClose, MdOutlineLogout } from "react-icons/md";
import { FiSettings, FiHome, FiUser } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";
import { LuDna, LuShoppingCart } from "react-icons/lu";
import { CgSupport } from "react-icons/cg";
import { FaHandHoldingHeart } from "react-icons/fa6";

interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, isMobile, onClose }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed top-0 left-0 z-50 h-full bg-white shadow-lg transition-all duration-300 ${
        isMobile
          ? isOpen
            ? "translate-x-0 w-64"
            : "-translate-x-full w-64"
          : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <MdOutlinePets className="text-yellow-400 text-2xl" />
          <h2 className="font-bold text-2xl ">Pet DNA+</h2>
        </div>
        {isMobile && (
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <MdClose size={20} className="text-gray-600" />
          </button>
        )}
      </div>
      
      <nav className="h-[calc(100vh-200px)] overflow-y-auto px-4 py-2">
        <div>
          <h4 className="text-lg text-black mb-2 font-semibold">Main Menu</h4>
          <ul className=" space-y-1">
            <li>
              <Link
                href="/"
                className={`text-sm flex items-center font-medium transition-all px-3 py-2 rounded-lg ${
                  pathname === "/"
                    ? "bg-yellow-50 text-yellow-600 border-r-2 border-yellow-500"
                    : "text-slate-800 group  hover:bg-yellow-50"
                }`}
              >
                <FiHome className={`w-4 h-4 mr-3 ${pathname === "/" ? "text-yellow-600" : "text-slate-600 group-hover:text-yellow-400"}`} />
                <span>Overview</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dna"
                className={`text-sm flex items-center font-medium transition-all px-3 py-2 rounded-lg ${
                  pathname === "/dna"
                    ? "bg-yellow-50 text-yellow-600 border-r-2 border-yellow-500"
                    : "text-slate-800 group hover:bg-yellow-50"
                }`}
              >
                <LuDna className={`w-4 h-4 mr-3 ${pathname === "/dna" ? "text-yellow-600" : "text-slate-600 group-hover:text-amber-400"}`} />
                <span>DNA</span>
              </Link>
            </li>
            <li>
              <Link
                href="/care"
                className={`text-sm flex items-center font-medium transition-all px-3 py-2 rounded-lg ${
                  pathname === "/care"
                    ? "bg-yellow-50 text-yellow-600 border-r-2 border-yellow-500"
                    : "text-slate-800 group hover:bg-yellow-50"
                }`}
              >
                <FaHandHoldingHeart className={`w-4 h-4 mr-3 ${pathname === "/care" ? "text-yellow-600" : "text-slate-600 group-hover:text-amber-400"}`} />
                <span>Care</span>
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className={`text-sm flex items-center font-medium transition-all px-3 py-2 rounded-lg ${
                  pathname === "/orders"
                    ? "bg-yellow-50 text-yellow-600 border-r-2 border-yellow-500"
                    : "text-slate-800 group hover:bg-yellow-50"
                }`}
              >
                <LuShoppingCart className={`w-4 h-4 mr-3 ${pathname === "/orders" ? "text-yellow-600" : "text-slate-600 group-hover:text-amber-400"}`} />
                <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link
                href="/referrals"
                className={`text-sm flex items-center font-medium transition-all px-3 py-2 rounded-lg ${
                  pathname === "/referrals"
                    ? "bg-yellow-50 text-yellow-600 border-r-2 border-yellow-500"
                    : "text-slate-800 group hover:bg-yellow-50"
                }`}
              >
                <SlBadge className={`w-4 h-4 mr-3 ${pathname === "/referrals" ? "text-yellow-600" : "text-slate-600 group-hover:text-amber-400"}`} />
                <span>Referrals</span>
              </Link>
            </li>
          </ul>
        </div>
        
        <hr className="my-4 border-gray-200" />
        
        <div>
          <h4 className="text-lg font-semibold text-black mb-2">Preferences</h4>
          <ul className="space-y-1">
            <li>
              <Link
                href="/setting"
                className={`text-sm flex items-center font-medium transition-all px-3 py-2 rounded-lg ${
                  pathname === "/setting"
                    ? "bg-yellow-50 text-yellow-600 border-r-2 border-yellow-500"
                    : "text-slate-800 group hover:bg-yellow-50"
                }`}
              >
                <FiSettings className={`w-4 h-4 mr-3 ${pathname === "/setting" ? "text-yellow-600" : "text-slate-600 group-hover:text-amber-400"}`} />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className={`text-sm flex items-center font-medium transition-all px-3 py-2 rounded-lg ${
                  pathname === "/support"
                    ? "bg-yellow-50 text-yellow-600 border-r-2 border-yellow-500"
                    : "text-slate-800 group hover:bg-yellow-50"
                }`}
              >
                <CgSupport className={`w-4 h-4 mr-3 ${pathname === "/support" ? "text-yellow-600" : "text-slate-600 group-hover:text-amber-400"}`} />
                <span>Support & Help</span>
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className={`text-sm flex items-center font-medium transition-all px-3 py-2 rounded-lg ${
                  pathname === "/profile"
                    ? "bg-yellow-50 text-yellow-600 border-r-2 border-yellow-500"
                    : "text-slate-800 group hover:bg-yellow-50"
                }`}
              >
                <FiUser className={`w-4 h-4 mr-3 ${pathname === "/profile" ? "text-yellow-600" : "text-slate-600 group-hover:text-amber-400"}`} />
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center cursor-pointer py-2 border rounded-md px-2 border-gray-200 mb-4">
          <img
            src="https://avatar.iran.liara.run/public/34"
            className="w-10 h-10 rounded-md border-2 border-white"
          />
          <div className="ml-4">
            <p className="text-sm text-slate-900 font-medium">Sharjeel Ahmad</p>
            <p className="text-xs text-slate-500 mt-0.5">Active account</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/" className="text-red-500 border border-red-500 px-5 py-3 w-full rounded-md text-sm flex items-center justify-center font-medium transition-all hover:bg-red-50">
            <MdOutlineLogout className="w-4 h-4 mr-2" />
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
