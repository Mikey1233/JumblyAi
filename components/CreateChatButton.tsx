"use client";
import { Button } from "./ui/button";
// import { useSession } from "next-auth/react";
import { useSession } from "@clerk/nextjs";
import { useState } from "react";
import { useSubscription } from "@/store/store";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { v4 as uuidv4} from "uuid"
import { getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import {
  addChatRef,
  chatMembersCollectionGroupRef,
} from "@/lib/converters/ChatMembers";

import LoadingSpinner from "./LoadingSpinner";

import { ToastAction } from "./ui/toast";
import { MessageSquarePlusIcon } from "lucide-react";
function CreateChatButton({ isLarge }: { isLarge?: boolean }) {
  const router = useRouter();

  const {  session } = useSession();

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const subscription = useSubscription((state) => state.subscription);
  const createNewChat = async () => {
    if (!session?.user.id) return;
    //logic goes here
    setLoading(true);
    toast({
      title: "Creating new chat...",
      description: "Hold tight while we create a new chat...",
      duration: 3000,
    });
    const userId = session.user.id as string;

    //checks for pro user and set limits then creating a new chat
    const noOfChats = (
      await getDocs(chatMembersCollectionGroupRef(userId))
    ).docs.map((doc) => doc.data()).length;

      const isPro =  subscription?.role === "pro" && subscription.status === "active";
    console.log(isPro && (noOfChats >= 3))
    if (!isPro && noOfChats >= 3) {
      toast({
        title: "free plan limit exceeded",
        description:
          "you've exceeded the limit of chats for the Free plan.Please upgrade to PRO to continua adding users to chats!",
        variant: "destructive",
        action: (
          <ToastAction
            altText="Upgrade"
            onClick={() => router.push("/register")}
          >
            Upgrade to PRO
          </ToastAction>
        ),
      });
      setLoading(false)
      return
    }
  
    const chatId = uuidv4();
    await setDoc(addChatRef(chatId, userId), {
      userId: userId!,
      email: session.user.emailAddresses[0].emailAddress!,
      timestamp: serverTimestamp(),
      isAdmin: true,
      chatId: chatId,
      image: session.user.imageUrl || "",
    })
      .then(() => {
        toast({
          title: "Success",
          description: "Your chat has been created",
          className: "bg-white text-black",
        });

        router.push(`/chat/${chatId}`);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          description: "There was an error creating your chat",
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  if (isLarge) {
    return (
      <div>
        <Button variant={"default"} onClick={createNewChat}>
          {loading ? <LoadingSpinner /> : "create a New Chat"}
        </Button>
      </div>
    );
  }
  return (
    <button> <MessageSquarePlusIcon onClick={createNewChat}/></button>
     
  );
}

export default CreateChatButton;

// import React from "react";
// import Modals from "./Modals";
// import { useState } from "react";
// import { MessageSquarePlusIcon } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { v4 as uuidv4 } from "uuid";
// import { getDocs, serverTimestamp, setDoc } from "firebase/firestore";
// import {
//   addChatRef,
//   chatMembersCollectionGroupRef,
// } from "@/lib/converters/ChatMembers";
// import LoadingSpinner from "./LoadingSpinner";
// import { useSubscription } from "@/store/store";

// import { useSession } from "@clerk/nextjs";

// function CreateChatButton() {
 
//   const [isLoading,setLoading] = useState(false)

//   const { isSignedIn, session } = useSession();
//   const subscription = useSubscription((state) => state.subscription);

//   const router = useRouter();

//   const handleEvent = () => {
//     setWaiting(true);
//     // setTimeout(() => setWaiting(false), 3000); // Reset trigger after 3 seconds
//   };

//   const createChat = async () => {
//     if (!isSignedIn) return;
   
//     const userId = session.user.id as string;
//     console.log(session)
//     //checks for pro user and set limits then creating a new chat
//     const noOfChats = (
//       await getDocs(chatMembersCollectionGroupRef(userId))
//     ).docs.map((doc) => doc.data()).length;

//     const isPro =
//       subscription?.role === "pro" && subscription.status === "active";
//     // console.log(isPro && (noOfChats >= 3))
//     if (!isPro && noOfChats >= 3) {
//       setchatLimit(true);
//       //  toast({
//       //    title: "free plan limit exceeded",
//       //    description:
//       //      "you've exceeded the limit of chats for the Free plan.Please upgrade to PRO to continua adding users to chats!",
//       //    variant: "destructive",
//       //    action: (
//       //      <ToastAction
//       //        altText="Upgrade"
//       //        onClick={() => router.push("/register")}
//       //      >
//       //        Upgrade to PRO
//       //      </ToastAction>
//       //    ),
//       //  });
//       //  setLoading(false)
//       return;
//     }

//     const chatId = uuidv4();
//     await setDoc(addChatRef(chatId, userId), {
//       userId: userId,
//       email: session.user.emailAddresses[0].emailAddress!,
//       timestamp: serverTimestamp(),
//       isAdmin: true,
//       chatId: chatId,
//       image: session.user.imageUrl || "",
//     })
//       .then(() => {
//         setCreated(true);
//         router.push(`/chat/${chatId}`);
//       })
//       .catch((err) => {
//         console.log(err);
//         setChaterror(true)
//       })
//       .finally(() => {
//         setLoading(false)
//       });
//   };
//   return (
//     <div>
//       <button className="pt-2" onClick={createChat}>
//         <MessageSquarePlusIcon />
//       </button>
     
//     </div>
//   );
// }

// export default CreateChatButton;
