"use client";

import { MdMenu, MdPerson } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { PiDogFill } from "react-icons/pi";

interface AppBarProps {
  onToggleSidebar: () => void;
}
const AppBar = ({ onToggleSidebar }: AppBarProps) => {
  return (
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-16 px-6">

        <div className="flex items-center space-x-1">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-yellow-200 md:hidden transition-colors"
          >
            <MdMenu size={20} className="text-slate-600" />
          </button>

          <h2 className="text-2xl font-extrabold text-slate-700 cursor-pointer hover:text-yellow-400">Pet Profile</h2>
        </div>

        <PiDogFill className="hover:text-yellow-500 text-slate-700 text-3xl md:text-4xl lg:text-5xl lg:mr-14 cursor-pointer" />

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
