"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./ButtonDefault"
import {
  useSession,
  SignedIn,
  SignIn,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { MessageSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";

const Navbar = () => {
  const { isSignedIn } = useSession();
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
        {
          isSignedIn && (
            <>
              <CreateChatButton />
  
              <Link href={"/chat"} prefetch={false}>
                <MessageSquareIcon className="text-bold" />
              </Link>
            </>
          )
        }
        {!isSignedIn && (
          <Link href={"/chat"}>
            {" "}
            <div className="lg:flexCenter hidden">
              {/* <button></button> */}
              <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
                title2="/signup"
              />
            </div>
          </Link>
        ) }

        {/* <SignedOut>
       

         <SignInButton /> 
      </SignedOut> */}

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
