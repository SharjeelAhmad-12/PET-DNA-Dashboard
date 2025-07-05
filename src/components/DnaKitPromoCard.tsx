"use client";

import React from "react";
import { FaGift } from "react-icons/fa";

const DnaKitPromoCard = () => {
  return (
    <section className="bg-white w-full  rounded-md shadow-sm p-6 flex flex-col ">
      <div>
        <div
          className="w-10 h-10 mb-4 rounded-md text-yellow-400 grid place-items-center border border-y-amber-300"
          style={{ boxShadow: "inset 0 0 15px rgba(255, 255, 0, 0.5)" }}
        >
          <FaGift size={18} />
        </div>

        <h2 className="font-bold leading-snug mb-2 text-3xl">
          Start your pets wellness journey
        </h2>

        <p className="text-md text-gray-600 max-w-[29rem]">
          Get the PetDNA+ Kit to unlock breed insights, health risks, and a
          personalized care plan — designed just for your dog or cat.
        </p>
      </div>

      <button className="mt-7 xl:mt-auto w-44 bg-yellow-400 text-white  text-sm font-bold px-4 py-2 rounded  transition">
        Get the Kit for $129
      </button>
    </section>
  );
};

export default DnaKitPromoCard;
