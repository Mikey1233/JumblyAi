'use client'
import React from 'react'
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useSession } from '@clerk/nextjs';
import { useState } from "react";
import { db } from "@/firebase";
import LoadingSpinner from "./LoadingSpinner";
import { useSubscription } from "@/store/store";
import ManageAccountBtn from './ManageAccountBtn';




function CheckoutBtn()  {
    const { session } = useSession();
    
    const [loading, setLoading] = useState(false);
  
    const subscription = useSubscription((state) => state.subscription);
    const isLoadingSubscription = subscription === undefined;

    console.log(loading || isLoadingSubscription )
    const isSubscribed = subscription?.status === "active" && subscription?.role === "pro";
    const CreateCheckOutSession = async () => {
      if (!session?.user.id) return;
      setLoading(true);
      const userId: string = session.user.id as string; // Ensure userId is of type string
  
      const docRef = await addDoc(
        collection(db, "customers", userId, "checkout_sessions"),
        {
          payment_method_types: ["card"],
          price: "price_1PTrfQAiaMrIOPgJ5duERkoQ",
          success_url: window.location.origin,
          cancel_url: window.location.origin,
        }
      );
      //push a document into the firestore db
  
      //...stripe extension on firebase will create a checkout session
      return onSnapshot(docRef, (snap) => {
        const data = snap.data();
        const url = data?.url;
        const error = data?.error;
  
        if (error) {
          alert(`an error occured : ${error.message}`);
          setLoading(false);
        }
        if (url) {
          window.location.assign(url);
          setLoading(false);
        }
      });
      //redirect user to checkout page
    };
  
    
    //responsive for Stripe checkOut session,Stripe payment and Managements
    return (
      <div className="flex flex-col space-y-2">
        {isSubscribed && (
          <>
            <hr className="mt-5 " />
            <p className="text-center text-xs  text-indigo-600"> You are subscribed to PRO</p>
          </>
        )}
       
        <div
        >
             {isSubscribed ? (
          <ManageAccountBtn />
        ) : loading || isLoadingSubscription ? (
          <LoadingSpinner />
        ) : (
          <button onClick={() => CreateCheckOutSession()}>Sign Up</button>
        )}
        </div>
     
      </div>
    );
  }
  
  export default CheckoutBtn;
  
