import React from "react";
import phone from "../public/phone.png";
import Image from "next/image";
function IntroPage() {
  return (
    <div>
      <section className="py-12 bg-white sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center max-w-5xl grid-cols-1 mx-auto gap-y-8 lg:grid-cols-5 gap-x-16">
            <div className="max-w-md mx-auto text-center lg:max-w-none lg:col-span-3">
              <h1 className="text-4xl font-bold leading-[120%]  lg:bold-88 text-black  sm:text-5xl lg:text-5xl xl:text-8xl">
                Real-time
              </h1>
              <h1 className="text-4xl font-normal text-black  sm:text-5xl lg:text-5xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38ef7d] to-[#11998e]">
                  CHAT TRANSLATION
                </span>
              </h1>

              <p className="mt-6 text-sm text-center font-normal text-black sm:text-xl">
              Empower your employees to seamlessly connect with vendors,
          international agents, and overseas offices. Avoid costly mistakes with
          real-time chat translation services.
              </p>
              <div className="mt-8 sm:mt-10">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-normal text-white transition-all duration-200 rounded-full bg-gradient-to-r from-[#38ef7d] to-[#11998e]  hover:contrast-150"
                  role="button"
                >
                  {" "}
                  Get Started{" "}
                </a>
              </div>

              <p className="max-w-xs mx-auto mt-4 text-base font-normal text-gray-400 sm:mt-8">
                30 days pro membership.
                <br />
                for just $9.99
              </p>
            </div>

            <div className="lg:col-span-2">
              <Image
                className=" mx-auto"
                src={phone}
                alt=""
                width={600}
                height={150}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntroPage;
