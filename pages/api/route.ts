
// import type { NextApiRequest, NextApiResponse } from "next";
// import { clerkClient } from "@clerk/clerk-sdk-node";
// import { auth } from "@/firebase-admin";


// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { id } = req.body;
//   if (req.method === "POST") {
//     try {
//       const session = await clerkClient.sessions.getSession(id);
//       const clerkUserId = session.userId;
//       const customClaims = {
//         userId : clerkUserId
//       }
//       const firebaseToken = await auth.createCustomToken(clerkUserId,customClaims);
//       res.status(200).json({ firebaseToken });
//     } catch (error) {
//       return res.status(500).json({ message: error });
//     }
//     // Processing a POST request
//   } else {
//     // Handle any other HTTP method
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
import type { NextApiRequest, NextApiResponse } from "next";
import { clerkClient } from "@clerk/clerk-sdk-node";
import { auth } from "@/firebase-admin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id } = req.body;
    
    if (!id) {
      return res.status(400).json({ message: "Missing session ID" });
    }

    try {
      const session = await clerkClient.sessions.getSession(id);
      if (!session) {
        return res.status(404).json({ message: "Session not found" });
      }

      const clerkUserId = session.userId;
      const customClaims = { userId: clerkUserId };

      const firebaseToken = await auth.createCustomToken(clerkUserId, customClaims);
      return res.status(200).json({ firebaseToken });
    } catch (error) {
      console.error("Error creating custom token:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
