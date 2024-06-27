'use server'
// import { authOptions } from "@/auth";
// import { adminDb } from "@/firebase-admin";
// import { getServerSession } from "next-auth";
import { adminDB } from "@/firebase-admin";
import { currentUser } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-04-10",
  });
export async function generatePortalLink() {
    const session = await currentUser()
    
    const host = headers().get("host");
  
    if (!session?.id) return console.error("No user is found");
    const id = session.id
    // const {
    //   id: { id },
    // } = session;
    const returnUrl =
      process.env.NODE_ENV === "development"
        ? `http://${host}/register`
        : `https://${host}/register`;
    const UsID = id as string;
    const doc = await adminDB.collection("customers").doc(UsID).get();
  
    if (!doc.data) return console.error("No customer record found with userID :",id);
  
    const stripeId = doc.data()!.stripeId;
  
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer : stripeId,
      return_url: returnUrl
    })
  
    redirect(stripeSession.url)
}


