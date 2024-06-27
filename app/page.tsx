import Camp from "@/components/Camp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import IntroPage from "@/components/IntroPage";
import Pricing from "@/components/Pricing";
import Trusted from "@/components/Trusted";
import UsageGuide from "@/components/UsageGuide";
// import NewHome from "@/components/newHome";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      {/* <NewHome/> */}
      <IntroPage/>
      <Features />
      <Camp />
      <Pricing refx={""} plantext={""} title={""} />
      <UsageGuide/>
      <Faq/>
      <GetApp />
      <Footer />
    </>
  );
}
