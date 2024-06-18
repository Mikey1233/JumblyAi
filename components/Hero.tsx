import Image from "next/image";
import Button from "./ButtonDefault";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Real-time Chat Translation</h1>
        <p className="regular-40 pl-3 mt-6 text-gray-30 xl:max-w-[520px]">
          Powered by AI
        </p>

        <p className="regular-16 pl-3 mt-6 text-gray-30 xl:max-w-[520px]">
          Empower your employees to seamlessly connect with vendors,
          international agents, and overseas offices. Avoid costly mistakes with
          real-time chat translation services.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <p className="bold-16 lg:bold-20 text-blue-70 pl-3 pt-10">
            Over 20+
            <span className="regular-16 lg:regular-20 ml-1">
              Languages Supported
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Signup For Free" variant="btn_green" />
          <Link href="https://calendly.com/burkardj3/30min" target="_blank">
            <Button
              type="button"
              title="Schedule a Demo"
              icon="./calendar-black.svg"
              variant="btn_white_text"
            />
          </Link>
        </div>
      </div>

      <div className="relative flex flex-1 items-start border-2 border-slate-400 shadow-2xl	pb-2 pt-2 pl-2 pr-2">
        <Image src="/bg-demo.gif" alt="demo" width={700} height={700} />
      </div>
    </section>
  );
};

export default Hero;
