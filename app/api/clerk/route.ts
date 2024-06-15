// import { WebhookEvent } from "@clerk/clerk-sdk-node";
import { WebhookEvent } from "@clerk/nextjs/server";
import { auth } from "@/firebase-admin";
import { adminDB } from "@/firebase-admin";

import { CreateRequest } from "firebase-admin/auth";
import { NextApiRequest } from "next";
// import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";

export async function POST(request: Request) {
  const payload: WebhookEvent = await request.json();

  const data = payload.data as CreateRequest;
  console.log(payload.data);
  console.log(payload.type);
  if (payload.type === "user.created") {
    const userData = {
      id: payload.data.id,
      email: payload.data?.email_addresses[0].email_address,
      firstName: payload.data.first_name,
      lastName: payload.data.last_name,
      createdAt: payload.data.created_at,
      updatedAt: payload.data.updated_at,
      username: payload.data.username,
      image: payload.data.image_url,
    };
    try {
      await auth.createUser(data);
      await adminDB.collection("users").doc(payload.data.id).set(userData);
      return Response.json({ message: "Received" });
    } catch (error) {
      console.error("Error creating user in Firebase:", error);
      return Response.json({ message: "Internal Server Error" });
      // return res.statusCode(500)
    }
  }
}
export async function GET() {
  return Response.json({ message: "Hello World!" });
}
