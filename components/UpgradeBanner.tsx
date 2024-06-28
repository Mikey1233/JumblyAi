"use client";

import { useSubscription } from "@/store/store";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

function UpgradeBanner() {
  const subscription = useSubscription((state) => state.subscription);
  const isPro = subscription?.role === "pro";
  const router = useRouter();
  // console.log(subscription, isPro)
  if (subscription === undefined || isPro) return null;
  return (
    <Button
      onClick={() => router.push("/register")}
      className="w-full rounded-none bg-gradient-to-r from-[#38ef7d] to-[#11998e] text-center text-white px-5 py-2 hover:to-[#38ef7d] hover:from-[#11998e] hover:shadow-md hover:opacity-75 transition-all"
    >
      Upgrade to pro to unlock all features
    </Button>
  );
}

export default UpgradeBanner;
