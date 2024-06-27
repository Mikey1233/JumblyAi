import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
const Camp = () => {
  return (
    <section className="flex gap-6 flex-col py-5 lg:mb-10 lg:py-20 xl:mb-20 h-full">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] text-black">
        <div
          className={`h-full w-full  bg-cover bg-no-repeat md:rounded-r-2xl md:mr-8 2xl:rounded-5xl big10`}
        >
          <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
            <div className="flex items-center justify-center gap-4">
              <div className="rounded-full bg-[#44cd72] p-4">
                <Image src="/star.svg" alt="map" width={28} height={28} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="bold-18 text-white">
                  Case Study: Clothing Manufacturer Debacle
                </h4>
                <p className="regular-14 text-white">Topic: Quality Control</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-500 p-8 lg:max-w-[800px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Learn How</strong>
          </h2>
          <p className="text-white regular-24 xl:regular-28 pb-5">
            jumbly.AI is revolutionizing International Business
          </p>
          <div className="flexCenter gap-6">
            <span className="flex -space-x-4 overflow-hidden">
              {PEOPLE_URL.map((url) => (
                <Image
                  className="inline-block h-10 w-10 rounded-full"
                  src={url}
                  key={url}
                  alt="person"
                  width={52}
                  height={52}
                />
              ))}
            </span>
            <p className="bold-16 md:bold-20 text-white">"250+ Shared"</p>
          </div>

          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
