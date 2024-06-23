// syncUserToFirebase.ts
import { db } from "../firebase";
import { clerkClient, User } from "@clerk/clerk-sdk-node";
import { collection, doc, setDoc } from "firebase/firestore";

async function syncUserToFirebase(status: string) {
  try {
    const users: User[] = (await clerkClient.users.getUserList()).data;
    const newUser = users[0];
    const data = {
      id: users[0].id,
      email: newUser.emailAddresses[0]?.emailAddress,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
      username: newUser.username,
      image: newUser.imageUrl,
      status: status,
    };

    const userRef = doc(collection(db, "users"), newUser.id);
    await setDoc(userRef, data);
    Response.json({ message: "Received" });
  } catch (err) {
    console.log(err);
    Response.json({ message: "Internal Server Error" });
  }
}

export { syncUserToFirebase };
