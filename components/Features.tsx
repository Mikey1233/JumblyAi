import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";
import {
  icon_onboarding,
  icon_products,
  icon_support,
  icon_result,
  icon_sales,
  icon_quality,
} from "@/constants/svg";






const FeatureBox = ({
  svg,
  title,
  text,
  border,
  borderRight,
}: {
  svg: any;
  title: string;
  text: string;
  border?: string;
  borderRight?: string;
}) => {
  return (
    <div className={`md:p-8 lg:p-14 sm:pb-4 ${border} ${borderRight}`}>
      {svg}
      <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">{title}</h3>
      <p className="mt-5  text-base text-gray-600 font-pj">{text}</p>
    </div>
  );
};
const Features = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Our Features
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
          Explore the powerful features that make JumblyAI your ultimate communication tool.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <FeatureBox
            svg={icon_support}
            title="Support"
            text="Experience unparalleled 24/7 support with JumblyAi. Our dedicated team ensures seamless and accurate chat translations, helping you effortlessly connect across languages."
            border="md:border-b md:border-gray-300"
            borderRight="lg:border-r lg:border-gray-300"
          />
          <FeatureBox
            svg={icon_sales}
            title="Innovation"
            text="We continuously develop our services and technology. By becoming an early adopter, you can help shape the future and influence our roadmap!"
            border="md:border-b md:border-gray-300"
            borderRight="md:border-r md:border-gray-300"
          />
          <FeatureBox
            border="md:border-b md:border-gray-300"
            svg={icon_onboarding}
            title="Onboarding"
            text="Our platform enables lightning-fast onboarding, reducing the process to hours and allowing your teams to start communicating efficiently almost immediately."
          />

          <FeatureBox
            svg={icon_products}
            title="Products"
            text="Enhance your multilingual chat with JumblyAi's innovative products, offering real-time translation and customizable language settings. Elevate your conversations with cutting-edge solutions."
            borderRight="md:border-r md:border-gray-300"
          />
          <FeatureBox
            svg={icon_quality}
            title="Quality"
            text="Experience top-tier translations with JumblyAi. Our advanced algorithms ensure precise, natural translations for clear, authentic conversations."
            borderRight="md:border-r md:border-gray-300"
          />
          <FeatureBox
            svg={icon_result}
            title="Anywhere"
            text="With JumblyAi, translate chats anytime, anywhere on any device. Stay connected and communicate effortlessly, wherever you are."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
