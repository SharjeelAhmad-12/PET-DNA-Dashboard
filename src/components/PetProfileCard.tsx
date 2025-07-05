'use client';

import { FiCalendar, FiEdit2 } from 'react-icons/fi';

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
        <div className="flex gap-3">
          <span>Gender</span>
          <span className="font-semibold text-slate-800">Male</span>
        </div>
        <div className="flex gap-3">
          <span>Size</span>
          <span className="font-semibold text-slate-800">Medium</span>
        </div>
        <div className="flex gap-3">
          <span>Weight</span>
          <span className="font-semibold text-slate-800">24.5 kg</span>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between bg-slate-50 p-3 rounded-md text-sm">
      <div className="flex items-center gap-2 text-slate-600">
        <FiCalendar size={16} />
        <span>12 August 2018</span>
      </div>
      <span className="font-semibold text-slate-800">5 years old</span>
    </div>
  </section>
);

export default PetProfileCard;
