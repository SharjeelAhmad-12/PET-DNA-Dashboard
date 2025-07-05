"use client";

import { MdMenu, MdPerson } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";

interface AppBarProps {
  onToggleSidebar: () => void;
  isMobile: boolean;
}
const AppBar = ({ onToggleSidebar, isMobile }: AppBarProps) => {
  return (
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-16 px-6">

        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            title={isMobile ? "Toggle Menu" : "Toggle Sidebar"}
          >
            <MdMenu size={20} className="text-slate-600" />
          </button>

          <h2 className="text-2xl font-extrabold text-black">Pet Profile</h2>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative">
            <FaRegBell className="w-6 h-6 text-slate-600 hover:text-amber-400 cursor-pointer" />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <MdPerson size={16} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppBar
