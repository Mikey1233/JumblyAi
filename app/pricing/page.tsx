import React from "react";
import Pricing from "@/components/Pricing";
function page() {
  return (
    <div>
      <Pricing
      title="The perfect price for you, regardless of who you are."
        refx={"register"}
        plantext="We are absolutely confident that we have a plan that perfectly matches 100% of your needs."
      />
    </div>
  );
}

export default page;
