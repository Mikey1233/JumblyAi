const { auth } = require('../firebase-admin'); // Adjust the path as necessary
import { deleteDoc,doc } from "firebase/firestore";
import { db } from "@/firebase";

export  async function deleteUser(uid : string) {
  try {
    await auth.deleteUser(uid);
    await deleteDoc(doc(db, 'users', uid));
    console.log(`Successfully deleted user with UID: ${uid}`);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}


