"use client";
import React, { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "@/firebase";
const SignInWithClerk = () => {
  const { isSignedIn, sessionId, userId, getToken } = useAuth();

  useEffect(() => {
    const signInToFirebase = async () => {
      if (isSignedIn) {
        const id = sessionId;
        console.log(id);
        try {
          // Fetching Firebase custom token

          const tokenResponse = await fetch("/api/route", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          });

          if (!tokenResponse.ok) {
            throw new Error("Failed to fetch Firebase custom token");
          }
          const { firebaseToken } = await tokenResponse.json();
          const res = await signInWithCustomToken(auth, firebaseToken);
        } catch (error) {
          console.error("Error signing in to Firebase:", error);
        }
      }
    };

    signInToFirebase();
  }, [isSignedIn, sessionId]);
  return null;
};

export default SignInWithClerk;
