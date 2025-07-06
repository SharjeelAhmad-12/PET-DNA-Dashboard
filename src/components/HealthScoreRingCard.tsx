"use client";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const score = 82;
const maxScore = 100;
const data = {
    datasets: [
        {
            data: [score, maxScore - score, 10],
            backgroundColor: ["#23444B", "#FFC166", "#F5F6F7"],
            borderWidth: 0,
            cutout: "70%",
        },
    ],
};

const options = {
    plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
    },
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
};

const HealthScoreRingCard = () => (
    <section className="bg-white rounded-xl shadow-sm p-4 sm:p-7 flex flex-col w-full max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-2">Health Score Ring</h2>
        <p className="text-base sm:text-lg text-slate-600 mb-4">Calculated from your pets</p>
        <div className="flex flex-col items-center justify-center flex-1 w-full">
            <div className="w-32 h-32 sm:w-48 sm:h-48 relative mb-6">
                <Doughnut data={data} options={options} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl sm:text-6xl font-extrabold text-slate-800">{score}</span>
                    <span className="text-lg sm:text-xl text-slate-400 font-semibold">/ {maxScore}</span>
                </div>
            </div>
            <button className="w-full bg-[#23444B] text-white text-base sm:text-lg font-bold py-3 sm:py-4 rounded-lg mt-2 hover:bg-[#183136] transition">
                View Care Center
            </button>
        </div>
    </section>
);

export default HealthScoreRingCard;