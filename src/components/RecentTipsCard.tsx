"use client";

import { FaBone, FaRunning, FaSyringe } from "react-icons/fa";

const RecentTipsCard = () => {
  const tips = [
    {
      id: 1,
      icon: <FaBone size={20} className="text-gray-700" />,
      title: "Health Tip 1",
      text: "Add omega-3 to Lunas meals to support her joints.",
    },
    {
      id: 2,
      icon: <FaRunning size={20} className="text-gray-700" />,
      title: "Health Tip 2",
      text: "Try a 30-minute walk daily to balance her energy levels.",
    },
    {
      id: 3,
      icon: <FaSyringe size={20} className="text-gray-700" />,
      title: "Health Tip 3",
      text: "Schedule a vet check-up before summer travel.",
    },
  ];
  return (
    <section className="bg-white rounded-md shadow-sm p-5 flex flex-col gap-4 w-full">
      <h2 className="font-semibold text-lg">Recent Tips</h2>

      <ul className="flex-1 overflow-y-auto pr-2">
        {tips.map((tip, index) => (
          <li key={tip.id} className="mb-4 last:mb-0">
            <div className="flex items-start gap-3 text-sm">
              <span className="mt-1">{tip.icon}</span>
              <div className="flex flex-col items-start">
                <div>
                  <p className="font-medium">{tip.title}</p>
                  <p className="text-gray-600">{tip.text}</p>
                </div>
                <button className="bg-black px-2 py-2 text-white rounded-md mt-3">Learn More</button>
              </div>
            </div>
            {index !== tips.length - 1 && <hr className="mt-3" />}
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
