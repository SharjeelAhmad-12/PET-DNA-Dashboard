"use client";

import { FaRunning } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { FaStethoscope } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const RecentTipsCard = () => {
  const tips = [
    {
      id: 1,
      icon: <GiBrain size={20} />,
      title: "Boost Brain Health",
      text: "Haa omeda-s to Luna's meals to suppon neroints and cognitive function.",
    },
    {
      id: 2,
      icon: <FaRunning size={20} />,
      title: "Balance Energy Levels",
      text: "Try a 30-minute walk daily to keep her energy levels alanced and nealinv.",
    },
    {
      id: 3,
      icon: <FaStethoscope size={20} />,
      title: "Prepare for Travel",
      text: "Schedule a vet check-up before summer travel to ensure snes til tor ine trio.",
    },
  ];
  return (
    <section className="bg-white rounded-md shadow-sm p-5 flex flex-col gap-4 w-full">
      <h2 className="font-bold text-xl">Recent Tips</h2>

      <ul className="flex-1 overflow-y-auto pr-2">
        {tips.map((tip, index) => (
          <li key={tip.id} className="mb-4 last:mb-0">
            <div className="flex items-start gap-3 text-sm">
              <div
                className="w-10 h-10 mb-4 p-3 rounded-full text-yellow-400 flex items-center border border-y-amber-300"
                style={{ boxShadow: "inset 0 0 15px rgba(255, 255, 0, 0.5)" }}
              >
                {tip.icon}
              </div>
              {/* <span className="mt-1">{tip.icon}</span> */}
              <div className="flex flex-col items-start">
                <div>
                  <p className="font-semibold">{tip.title}</p>
                  <p className="text-gray-600">{tip.text}</p>
                </div>
                <button className="text-yellow-400 font-extrabold rounded-md mt-2 border px-3 py-1.5 group transition">
                  Learn More
                  <FaArrowRightLong className="inline ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
                </button>
              </div>
            </div>
            {index !== tips.length - 1 && <hr className="mt-3 text-gray-200" />}
          </li>
        ))}
      </ul>

      <div className="text-center text-xs mt-2 space-x-2">
        <button className="font-semibold">1</button>
        <button>2</button>
        <button>3</button>
        <span>…</span>
        <button>8</button>
      </div>
    </section>
  );
};

export default RecentTipsCard;
