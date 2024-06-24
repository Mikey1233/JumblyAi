"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "@/firebase";
import { useSession, SignedIn, SignIn, UserButton,useSignUp } from "@clerk/nextjs";
import { MessageSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";
import { teardownHeapProfiler } from "next/dist/build/swc";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
// import SignInWithClerk from "./clerkAuthSign";

const Navbar = () => {
 

  const { isSignedIn } = useSession();

  const { getToken } = useAuth();
  const signInWithClerk = async () => {
    try {
      
      console.log("Sign in with clerk");
      const token = await getToken({ template: "integration_firebase" }) as string;
      console.log(token)
      const userCredentials = await signInWithCustomToken(auth, token);
      console.log("User:", userCredentials.user);
    } catch (err) {
      console.log(err);
    }
  };
  //  console.log(useSession())
  //  console.log('hello')
  return (
    <nav className="flex justify-between max-container  padding-container z-30 py-5 sticky top-0 bg-white">
      <Link href="/">
        <Image src="/jumbly.ai-logo.svg" alt="logo" width={200} height={40} />
      </Link>

      {/* <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      /> */}
      <div className="flex gap-10 items-center justify-between ">
        {isSignedIn && (
          <>
            <CreateChatButton />

            <Link href={"/chat"} prefetch={false}>
              <MessageSquareIcon className="text-bold" />
            </Link>
          </>
        )} 
        {!isSignedIn && (
          <Link href={"/chat"}>
             {" "}
            <div className="lg:flexCenter hidden">
              <Button className="bg-green-700 rounded-full py-7 px-7 text-xl hover:bg-green-800">Get Started</Button>
              {/* <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
                title2="/signup"
              /> */}
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
