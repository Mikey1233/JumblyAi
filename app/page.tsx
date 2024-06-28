import Camp from "@/components/Camp";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetApp from "@/components/GetApp";
import IntroPage from "@/components/IntroPage";
import Pricing from "@/components/Pricing";
import UsageGuide from "@/components/UsageGuide";


export default function Home() {
  return (
    <>
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
