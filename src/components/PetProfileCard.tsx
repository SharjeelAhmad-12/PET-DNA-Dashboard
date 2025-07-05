"use client";

import { FiEdit2 } from "react-icons/fi";
import { BsCake } from "react-icons/bs";

const PetProfileCard = () => (
  <section className="bg-white rounded-lg shadow-sm p-6 w-full max-w-7xl flex flex-col gap-6">
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Bruno</h2>
        <p className="text-sm text-slate-600">Dog, Bulldog</p>
      </div>
      <button className="text-slate-500 hover:text-slate-800">
        <FiEdit2 size={18} />
      </button>
    </div>

    <div className="flex items-center gap-6">
      <div className="relative w-24 h-24 rounded-full border-4 border-amber-100 overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/500px-Bulldog_inglese.jpg"
          alt="Pet avatar"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 text-sm text-slate-600">
        <div className="flex justify-between gap-3">
          <span>Gender</span>
          <span className="font-semibold text-slate-800">Male</span>
        </div>
        <div className="flex justify-between gap-3">
          <span>Size</span>
          <span className="font-semibold text-slate-800">Medium</span>
        </div>
        <div className="flex justify-between gap-3">
          <span>Weight</span>
          <span className="font-semibold text-slate-800">24.5 kg</span>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between bg-gradient-to-r from-amber-50 to-orange-50 p-3 border border-amber-200 rounded-md text-sm">
      <div className="flex items-center gap-5 text-slate-600">
        <div
          className="w-10 h-10  rounded-md text-yellow-400 grid place-items-center border border-y-amber-300"
          style={{ boxShadow: "inset 0 0 15px rgba(255, 255, 0, 0.5)" }}
        >
          <BsCake size={24} className="text-yellow-600" />
        </div>

        <div className="flex flex-col">
          <h3>Birthday</h3>
          <span className="font-bold text-slate-900">12 August 2018</span>
        </div>
      </div>
      <span className="font-semibold text-slate-800">5 years old</span>
    </div>
  </section>
);

export default PetProfileCard;
