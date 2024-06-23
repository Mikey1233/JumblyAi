
import type { NextApiRequest, NextApiResponse } from "next";
import { clerkClient } from "@clerk/clerk-sdk-node";
import { auth } from "@/firebase-admin";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;
  if (req.method === "POST") {
    try {
      const session = await clerkClient.sessions.getSession(id);
      const clerkUserId = session.userId;
      const customClaims = {
        userId : clerkUserId
      }
      const firebaseToken = await auth.createCustomToken(clerkUserId,customClaims);
      res.status(200).json({ firebaseToken });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
    // Processing a POST request
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
