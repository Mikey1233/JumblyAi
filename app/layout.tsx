import type { Metadata } from "next";
import {  ClerkProvider } from "@clerk/nextjs";
// import SignInWithClerk from "@/components/clerkAuthSign";
// import SignInWithClerk from "@/pages/clerkAuthSign";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import SubscriptionProvider from "@/SubscriptionProvider";
import dynamic from "next/dynamic";

// const SignInWithClerk = dynamic(() => import("@/pages/clerkAuthSign"), {
//   ssr: false,
// });

export const metadata: Metadata = {
  title: "jumbly.AI",
  description: "Real-time Chat Translation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<ClerkProvider>
      {/* <ClerkLoaded> */}
        {/* <html lang="en"> */}
          <body>
            {/* <SignInWithClerk> */}
            <SubscriptionProvider>
              <Navbar />

              <main className="relative overflow-hidden"> {children}</main>
              <Toaster />
            </SubscriptionProvider>
            {/* </SignInWithClerk> */}
           
          </body>
        {/* </html> */}
      {/* </SignInWithClerk> */}
      {/* </ClerkLoaded> */}
      
    </ClerkProvider>
    </html>

    
  );
}
