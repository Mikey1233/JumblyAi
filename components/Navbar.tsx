"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  useSession,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { MessageSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";
import { useEffect } from "react";
import LanguageSelect from "./LanguageSelect";


const Navbar = () => {
  const { isSignedIn } = useSession();
  return (
    <nav className="flex justify-between max-container  padding-container z-30 py-5 sticky top-0 bg-white">
      <Link href="/">
        <Image src="/jumbly.ai-logo.svg" alt="logo" width={200} height={40} />
      </Link>

      <div className="flex gap-10 items-center justify-between ">
        {isSignedIn && (
          <>
            <CreateChatButton />

            <Link href={"/chat"} prefetch={false}>
              <MessageSquareIcon className="text-bold" />
            </Link>
          </>
        )}
        <LanguageSelect />
        {!isSignedIn && (
          <Link href={"/chat"} >
            {" "}
            <div className="lg:flexCenter hidden">
              <Button className="bg-green-700 rounded-full py-7 px-7 text-xl hover:bg-green-800">
                Get Started
              </Button>
            </div>
          </Link>
        )}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
