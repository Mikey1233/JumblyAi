"use client";
import { Message, sortedMessagesRef } from "@/lib/converters/Message";
import { useLanguageStore } from "@/store/store";
// import { Session } from "next-auth";
import { createRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useEffect } from "react";
import { MessageCircleIcon } from "lucide-react";
// import { UserAvatar } from "./UserAvatar";
import LoadingSpinner from "./LoadingSpinner";
import { UserAvatar } from "./UseAvatar";
function ChatMessages({
  chatId,
  initialMessages,
  session,
}: {
  chatId: string;
  initialMessages: Message[];
  session?: any;
}) {
  console.log(session);
  const language = useLanguageStore((state) => state.language);
  const messageEndRef = createRef<HTMLDivElement>();

  const [messages, loading, error] = useCollectionData<Message>(
    sortedMessagesRef(chatId),
    {
      initialValue: initialMessages,
    }
  );
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, messageEndRef]);
  return (
    <div className="p-5">
      {!loading && messages?.length === 0 && (
        <div className="flex flex-col justify-center text-center items-center p-20 rounded-xl space-y-2 bg-indigo-400 text-white font-extralight">
          <MessageCircleIcon className="h-10 w-10" />
          <h2>
            <span className="font-bold">Invite a friend</span>{" "}
            <span className="font-bold">
              Send your first message in ANY language
            </span>{" "}
            below to get started!
          </h2>
          <p>The AI will auto-detect & translate it all for you</p>
        </div>
      )}
      {messages?.map((message) => {
        const isSender = message.user.id === session;

        return (
          <div key={message.id} className={`flex my-2 items-end`}>
            <div
              className={`flex flex-col relative space-y-1 pt-3 pr-3 pl-3 pb-3 w-fit line-clamp-1 mx-2 rounded-3xl  ${
                isSender
                  ? "ml-auto bg-green-600 text-white rounded-br-none"
                  : "bg-gray-100 dark:text-gray-100 dark:bg-slate-700 rounded-bl-none"
              }`}
            >
              <p
                className={`text-[12px] italic font-extralight line-clamp-1 ${
                  isSender ? "text-right" : "text-left"
                }`}
              >
                {message.user.name?.split(" ")[0] || ""}
              </p>
              <div className="flex space-x-2">
                <p>{message.translated?.[language] || message.input}</p>
                {!message.translated && <LoadingSpinner />}
              </div>
            </div>
            <UserAvatar
              name={message.user.name}
              image={message.user.image}
              // className={`${isSender && "-order-1"}`}
              className={`${!isSender && "-order-1"}`}
            />
          </div>
        );
      })}
      <div ref={messageEndRef} />
    </div>
  );
}

export default ChatMessages;
