import PetProfileCard from "@/components/PetProfileCard";
import DnaKitPromoCard from "@/components/DnaKitPromoCard";
import RecentTipsCard from "@/components/RecentTipsCard";
import ReferralCard from "@/components/ReferralCard";
import BreedSummaryCard from "@/components/BreedSummaryCard";
import HealthScoreRingCard from "@/components/HealthScoreRingCard";

const page = () => {
  return (
    <div className="p-4 flex flex-col gap-8 w-full  mx-auto">
      <div className="flex flex-col xl:flex-row gap-6 w-full">
        <div className="flex-1 flex justify-center">
          <PetProfileCard />
        </div>
        <div className="flex-1 flex justify-center">
          <DnaKitPromoCard />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 w-full">
        <div className="flex-1 flex justify-center">
          <BreedSummaryCard />
        </div>
        <div className="flex-1 flex justify-center">
          <HealthScoreRingCard />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 w-full">
        <div className="flex-1 h-full flex justify-center">
          <ReferralCard />
        </div>
        <div className="flex-1 flex justify-center">
          <RecentTipsCard />
        </div>
      </div>
    </div>
  );
};

export default page;
