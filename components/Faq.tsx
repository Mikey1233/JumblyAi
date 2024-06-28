import React from "react";
import AccordionItem from "./AccordionItem";
import Link from "next/link";

function Faq() {
  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Find answers to common questions and learn how to make the most of
              JumblyAI's powerful features.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            <AccordionItem
              title="How to create an account?"
              content="Creating an account with JumblyAi is quick and easy. Sign up with your email follow the prompts, and start enjoying seamless multilingual chat translations"
            />

            <AccordionItem
              title="How can I make a payment with Stripe?"
              content="To make a payment with Stripe, simply enter your payment details at checkout and follow the onscreen instructions. It's secure, quick, and easy."
            />
            <AccordionItem
              title=" Can I cancel my plan?"
              content="Yes, you can cancel your payment within 24 hours of making it. Contact our support team to assist with the cancellation process."
            />

            <AccordionItem
              title="How can I reach to support?"
              content="You can reach our support team 24/7 via email or live chat. We're here to help with any questions or issues you may have."
            />
          </div>

          <p className="text-center text-gray-600 textbase mt-9">
            Didn’t find the answer you are looking for?{" "}
            <Link
              href="https://calendly.com/burkardj3/30min"
              title=""
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Contact our support
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Faq;
