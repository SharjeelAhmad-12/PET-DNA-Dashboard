import PetProfileCard from "@/components/PetProfileCard";
import DnaKitPromoCard from "@/components/DnaKitPromoCard";
import RecentTipsCard from "@/components/RecentTipsCard";
import ReferralCard from "@/components/ReferralCard";
const page = () => {
  return (
    <div className="p-4 flex flex-col gap-8">
      <div className="flex gap-5 xl:flex-row flex-col">
        <PetProfileCard />
        <DnaKitPromoCard />
      </div>
      <div className="flex gap-5 xl:flex-row flex-col">
        <ReferralCard />
        <RecentTipsCard />
      </div>
    </div>
  )
}

export default page
