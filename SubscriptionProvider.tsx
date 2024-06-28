"use client";
import { onSnapshot } from "firebase/firestore";
// import { useSession } from "next-auth/react";
import { useSession } from "@clerk/nextjs";

import React, { useEffect } from "react";
import { subscriptionRef } from "./lib/converters/Subscription";
import { useSubscription } from "./store/store";
import { Subscription } from "./types/Subscription";
import { signInWithCustomToken } from "./firebase";


function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { session } = useSession();
  const setSubscription = useSubscription((state) => state.setSubscription);
  useEffect(() => {
    if (!session) return;
    const id = session?.user.id as string;
    /////////////////////////////////////////////
   
    //////////////////////////////////
    return onSnapshot(
      subscriptionRef(id),
      (snapshot: { empty: any; docs: { data: () => Subscription | null; }[]; }) => {
        if (snapshot.empty) {
          console.log("user has no subcription");
          setSubscription(null);
          return;
        } else {
          console.log("user has subcription");
          setSubscription(snapshot.docs[0].data());
        }
      },
      (error: any) => {
        console.log(`Error getting the document`, error);
      }
    );
  }, [session, setSubscription]);
  return <>{children}</>;
}

export default SubscriptionProvider;
