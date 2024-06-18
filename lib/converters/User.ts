import { db } from "@/firebase";
import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  query,
  where,
} from "firebase/firestore";
import { User } from "@clerk/clerk-sdk-node";

// Define a custom type or interface for Firestore User
interface FirestoreUser {
  emailAddresses: { emailAddress: string }[];
  imageUrl: string;
  username: string;
  id: string;
  lastName: string;
  updatedAt: string;
  createdAt: string;
  firstName: string;
}

const useConverter: FirestoreDataConverter<FirestoreUser> = {
  toFirestore: function (customer: FirestoreUser): DocumentData {
    return {
      email: customer.emailAddresses[0].emailAddress,
      image: customer.imageUrl,
      username: customer.username,
      id: customer.id,
      lastname: customer.lastName,
      updatedAt: customer.updatedAt,
      createdAt: customer.createdAt,
      firstname: customer.firstName,
    };
  },
  fromFirestore: function (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): FirestoreUser {
    const data = snapshot.data(options);
    return {
      emailAddresses: [{ emailAddress: data.email }],
      imageUrl: data.image,
      username: data.username,
      id: data.id,
      lastName: data.lastName,
      updatedAt: data.updatedAt,
      createdAt: data.createdAt,
      firstName: data.firstName,
    };
  },
};

export const getUserByEmailRef = (email: string) =>
  query(collection(db, "users"), where("email", "==", email)).withConverter(
    useConverter
  );
