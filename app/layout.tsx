import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
// import SignInWithClerk from "@/components/clerkAuthSign";
import SignInWithClerk from "@/pages/clerkAuthSign";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import SubscriptionProvider from "@/SubscriptionProvider";

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
    <ClerkProvider>
      <html lang="en">
        <body>
          <SubscriptionProvider>
            <SignInWithClerk />

            <Navbar />
            <main className="relative overflow-hidden">{children}</main>
            <Toaster />
          </SubscriptionProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
