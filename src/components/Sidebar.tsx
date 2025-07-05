"use client";

import Link from "next/link";
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
      
      <nav className="h-[calc(100vh-200px)] overflow-y-auto px-4 py-4">
        <div>
          <h4 className="text-lg text-black mb-4 font-semibold">Main Menu</h4>
          <ul className="space-y-4 px-2">
            <li>
              <Link
                href="/"
                className="text-slate-800 text-sm flex items-center font-medium hover:text-yellow-500 transition-all"
              >
                <FiHome className="w-4 h-4 mr-3" />
                <span>Overview</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dna"
                className="text-slate-800 text-sm flex items-center font-medium hover:text-yellow-500 transition-all"
              >
                <LuDna className="w-4 h-4 mr-3" />
                <span>DNA</span>
              </Link>
            </li>
            <li>
              <Link
                href="/care"
                className="text-slate-800 text-sm flex items-center font-medium hover:text-yellow-500 transition-all"
              >
                <FaHandHoldingHeart className="w-4 h-4 mr-3" />
                <span>Care</span>
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="text-slate-800 text-sm flex items-center font-medium hover:text-yellow-500 transition-all"
              >
                <LuShoppingCart className="w-4 h-4 mr-3" />
                <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link
                href="/referrals"
                className="text-slate-800 text-sm flex items-center font-medium hover:text-yellow-500 transition-all"
              >
                <SlBadge className="w-4 h-4 mr-3" />
                <span>Referrals</span>
              </Link>
            </li>
          </ul>
        </div>
        
        <hr className="my-6 border-gray-200" />
        
        <div>
          <h4 className="text-lg font-semibold text-black mb-4">Preferences</h4>
          <ul className="space-y-4 px-2">
            <li>
              <Link
                href="/setting"
                className="text-slate-800 text-sm flex items-center font-medium hover:text-yellow-500 transition-all"
              >
                <FiSettings className="w-4 h-4 mr-3" />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="text-slate-800 text-sm flex items-center font-medium hover:text-yellow-500 transition-all"
              >
                <CgSupport className="w-4 h-4 mr-3" />
                <span>Support & Help</span>
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="text-slate-800 text-sm flex items-center font-medium hover:text-yellow-500 transition-all"
              >
                <FiUser className="w-4 h-4 mr-3" />
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
