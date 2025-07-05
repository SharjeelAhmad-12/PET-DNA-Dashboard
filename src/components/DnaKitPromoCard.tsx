'use client';

import React from 'react';
import { FaGift } from 'react-icons/fa';

const DnaKitPromoCard = () => {
  return (
    <section className="bg-white w-full  rounded-md shadow-sm p-5 flex flex-col justify-between">
      <div>
        <div className="w-10 h-10 mb-4 rounded-md bg-black/80 text-white grid place-items-center">
          <FaGift size={18} />
        </div>

        <h2 className="font-semibold leading-snug mb-2 text-2xl">
          Start your pets wellness journey
        </h2>

        <p className="text-sm text-gray-600 max-w-[28rem]">
          Get the PetDNA+ Kit to unlock breed insights, health risks, and a
          personalized care plan — designed just for your dog or cat.
        </p>
      </div>

      <button className="mt-4 w-40 bg-black text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-800 transition">
        Get the Kit Now
      </button>
    </section>
  );
};

export default DnaKitPromoCard;
