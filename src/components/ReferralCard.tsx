"use client";

import { FiCopy } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

export default function ReferralCard() {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6 w-full max-w-7xl h-full ">
      <h2 className="font-bold text-xl mb-1">
        Invite Pet Lovers, Get Free Kits
      </h2>
      <p className="text-sm text-gray-700 mb-5">
        Share your referral link and earn credits for every friend who joins.
      </p>

      <div className="relative mb-6">
        <input
          type="text"
          readOnly
          value="https://petdnaplus.ai/"
          className="w-full rounded-md border border-gray-300 py-3 pl-4 pr-12 text-sm font-medium bg-gray-50"
        />
        <div
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md bg-black text-white">
          <FiCopy size={16} />
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 text-gray-800 text-xl">
        <FaFacebookF className="cursor-pointer hover:scale-110 transition"/>
        <FaInstagram className="cursor-pointer hover:scale-110 transition"/>
        <FaXTwitter className="cursor-pointer hover:scale-110 transition"/>
        <FaPinterestP className="cursor-pointer hover:scale-110 transition"/>
      </div>
    </section>
  );
}
