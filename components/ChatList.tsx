// import { authOptions } from "@/auth";
import { auth } from "@clerk/nextjs/server";
import { getDocs } from "firebase/firestore";
// import { getServerSession } from "next-auth";
import { chatMembersCollectionGroupRef } from "@/lib/converters/ChatMembers";
import ChatRows from "./ChatRows";
async function ChatList() {
  const { userId } = auth(); // Get user id from Clerk
  const user = userId as string
  const chatsSnapShot = await getDocs(
    chatMembersCollectionGroupRef(user)
  ); 

 const initialChats = chatsSnapShot.docs.map((doc)=>({
  ...doc.data(),
  timestamp : null
 }))
  // return <div>ChatList</div>;
  return <ChatRows initialChats = {initialChats}/>
}

export default ChatList;
