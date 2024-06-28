import { WebhookEvent } from "@clerk/nextjs/server";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { CreateRequest } from "firebase-admin/auth";
import { syncUserToFirebase } from "@/lib/syncUsers";
import { db } from "@/firebase";
import { NextResponse } from "next/server";
import { deleteUser } from "@/lib/deleteAuthFromFB";

export async function POST(request: Request) {
  const payload: WebhookEvent = await request.json();

  async function update(collectionName: string, docId: string, data: any) {
    try {
      const docRef = doc(db, collectionName, docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userDocRef = doc(db, "users", data?.user_id);
        await updateDoc(userDocRef, {
          status: data.status,
        });
      }
    } catch (error) {
      console.error("Error updating document:", error);
    }
  }

  const data = payload.data as CreateRequest;
  console.log(payload.type);
  if(payload.type === 'user.deleted'){
    const uid = payload.data.id as string
    await deleteUser(uid)
    return NextResponse.json({ message: `User Auth Deleted from firestore` });

  }
  if (payload.type === "user.created") {
    await syncUserToFirebase("active");
    return NextResponse.json({ message: `User synced to firestore` });
  }
  if (payload.type === "session.created") {
    await update("users", payload.data.user_id, payload.data);
  }
  if (
    payload.type === "session.ended" ||
    payload.type === "session.revoked" ||
    payload.type === "session.removed"
  ) {
    await update("users", payload.data.user_id, payload.data);
    return NextResponse.json({ message: `Updated user status` });
  }

  return NextResponse.json({ message: `Updated database ` });
}
