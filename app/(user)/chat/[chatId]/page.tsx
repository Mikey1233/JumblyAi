// import { UserButton } from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";
import ChatInput from "@/components/ChatInput";
import { getDocs } from "firebase/firestore";
import { sortedMessagesRef } from "@/lib/converters/Message";
import ChatMessages from "@/components/ChatMessages";
import ChatMemberShipBadge from "@/components/ChatMemberShipBadge";
import AdminControls from "@/components/AdminControls";
import { chatMembersRef } from "@/lib/converters/ChatMembers";
import { redirect } from "next/navigation";
import { useSession } from "@clerk/nextjs";
import { auth} from "@clerk/nextjs/server";


import { getAuth, onAuthStateChanged } from "firebase/auth";

type Props = {
  params: {
    chatId: string;
  };
};

async function ChatPage({ params: { chatId } }: Props) {
  const authw = getAuth()
  // onAuthStateChanged(authw, async (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     console.log(user)
  
  //   }else{console.log('no user')}})
  const { userId } = auth(); // Get user id from Clerk
  
  // const session = await useSession().session?.id
  // console.log a(session)
  console.log(userId)
  const hasAccess = (await getDocs(chatMembersRef(chatId))).docs
    .map((doc) => doc.id)
    .includes(userId!);

  if (!hasAccess) {
    redirect("/chat?error=permission");
  }

  const initialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map(
    (doc) => doc.data()
  );

  return (
    <>
      {/* admin controls */}
      <AdminControls chatId={chatId} />
      {/* chat membersBadge */}
      <ChatMemberShipBadge chatId={chatId} />
      {/* chat Messages */}
      <div className="pb-10 flex-1">
        <ChatMessages
          chatId={chatId}
          session={userId}
          initialMessages={initialMessages} />
      </div>
      <ChatInput chatId={chatId} />
      {/* User button for profile management and sign out */}
      {/* <UserButton /> */}
    </>
  );
}

export default ChatPage;
