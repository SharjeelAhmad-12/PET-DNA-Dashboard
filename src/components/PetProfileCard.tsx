"use client";

import { FiEdit2 } from "react-icons/fi";
import { BsCake } from "react-icons/bs";
import { FaTransgender } from "react-icons/fa";
import { GiBodyHeight, GiWeight } from "react-icons/gi";

const PetProfileCard = () => (
  <section className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl mx-auto space-y-8 transition-all">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-200 shadow-inner">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/500px-Bulldog_inglese.jpg"
            alt="Pet avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">Bruno</h2>
          <p className="text-sm font-medium text-slate-600">Dog, Bulldog</p>
        </div>
      </div>

      <button className="text-slate-500 hover:text-yellow-500 transition-colors">
        <FiEdit2 size={20} />
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">

      <div className="p-4 rounded-xl border border-yellow-300 bg-yellow-50/40 hover:shadow-md hover:scale-[1.02] transition flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-yellow-600">
          <FaTransgender size={18} />
          <span>Gender</span>
        </div>
        <span className="font-semibold text-slate-800">Male</span>
      </div>

      <div className="p-4 rounded-xl border border-yellow-300 bg-yellow-50/40 hover:shadow-md hover:scale-[1.02] transition flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-yellow-600">
          <GiBodyHeight size={18} />
          <span>Size</span>
        </div>
        <span className="font-semibold text-slate-800">Medium</span>
      </div>

      <div className="p-4 rounded-xl border border-yellow-300 bg-yellow-50/40 hover:shadow-md hover:scale-[1.02] transition flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-yellow-600">
          <GiWeight size={18} />
          <span>Weight</span>
        </div>
        <span className="font-semibold text-slate-800">24.5 kg</span>
      </div>
    </div>

    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-50 via-white to-yellow-100 p-4 border border-yellow-300 rounded-xl text-sm shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-5 text-slate-700 w-full">
        <div
          className="p-3 rounded-md bg-white text-yellow-600 grid place-items-center border border-yellow-300"
          style={{ boxShadow: "inset 0 0 15px rgba(255, 255, 0, 0.5)" }}
        >
          <BsCake size={24} />
        </div>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full">
          <div>
            <h3 className="text-sm font-medium text-slate-700">Birthday</h3>
            <p className="font-bold text-slate-900">12 August 2018</p>
          </div>
          <p className="font-semibold text-slate-800 sm:text-right mt-1 sm:mt-0">
            5 years old
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default PetProfileCard;
