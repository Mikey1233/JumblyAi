"use client"
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import {
  useSession,
  SignedIn,
  SignIn,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

const Navbar = () => {
  const {isSignedIn} = useSession()
//  console.log(useSession())
//  console.log('hello')
  return (
    <nav className="flexBetween max-container padding-container z-30 py-5 sticky top-0 bg-white">
      <Link href="/">
        <Image src="/jumbly.ai-logo.svg" alt="logo" width={200} height={40} />
      </Link>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
      {
        !isSignedIn ? ( <Link href={"/chat"}>
          {" "}
          <div className="lg:flexCenter hidden">
            <button></button>
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
              title2="signup"
            />
          </div>
        </Link>) :''
      }
     
      {/* <SignedOut>
       

         <SignInButton /> 
      </SignedOut> */}

      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default Navbar;
