import React from "react";
import Button from "./ButtonDefault";
import Image from "next/image";
import Link from "next/link";

const GetApp = () => {
  return (
    <section className="flexCenter  flex-col ">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Signup Now!</h2>
          <p className="regular-16 text-gray-10">
            Available on all web platforms.
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Link href={"https://calendly.com/burkardj3/30min"} target="blank">
              <Button
                type="button"
                title="Join Now"
                icon="/calendar-black.svg"
                variant="btn_white"
                full
              />
            </Link>
            <Link href={"https://calendly.com/burkardj3/30min"} target="blank">
              <Button
                type="button"
                title="Contact Us"
                icon="/map.svg"
                variant="btn_dark_green_outline"
                full
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={1200} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
