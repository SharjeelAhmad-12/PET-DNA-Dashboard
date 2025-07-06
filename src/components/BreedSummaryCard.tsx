"use client";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

const breedData = [65, 25, 10];
const breedLabels = ["Golden Retriever", "Poodle", "Labrador"];
const breedColors = ["#23444B", "#1CC6DD", "#FFC166"];

const data = {
  labels: breedLabels,
  datasets: [
    {
      data: breedData,
      backgroundColor: breedColors,
      borderWidth: 0,
      cutout: "70%",
    },
  ],
};

const options = {
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  cutout: "70%",
  responsive: true,
  maintainAspectRatio: false,
};

const BreedSummaryCard = () => {
  return (
    <section className="bg-white justify-between rounded-xl shadow-sm flex flex-col w-full max-w-7xl">
      <div className="p-5 sm:p-7 h-full">
        <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
            Breed Summary
          </h2>
          <Link
            href="#"
            className="text-cyan-500 font-semibold flex items-center gap-2 hover:underline text-base sm:text-lg group transition"
          >
            View Full Report
            <FaArrowRight className="text-cyan-400 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 items-center  sm:items-center justify-center sm:justify-between sm:h-full p-4">
          <div className="relative w-36 h-36 sm:w-48 sm:h-48">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <FaArrowRight className="text-gray-300 text-4xl sm:text-5xl" />
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-xs">
            {breedLabels.map((label, i) => (
              <div
                key={label}
                className="flex items-center justify-between text-base sm:text-lg"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block w-4 h-4 rounded-full"
                    style={{ background: breedColors[i] }}
                  ></span>
                  <span className="text-slate-800 font-medium">{label}</span>
                </div>
                <span className="ml-2 font-bold text-slate-800">
                  {breedData[i]}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center  p-4 sm:p-5 border-t border-gray-200">
        <p className="text-slate-600 text-sm sm:text-base">
          Your pets unique breed mix influences their traits and health needs.
        </p>
      </div>
    </section>
  );
};

export default BreedSummaryCard;
