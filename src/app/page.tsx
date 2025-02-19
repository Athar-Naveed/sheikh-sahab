import { SCarousel } from "@/components/Carousel";
import EMI from "@/components/ui/EMI";

import Hero from "@/components/ui/Hero";
import QuoteForm from "@/components/ui/Quote";

import RecycleFacility from "@/components/ui/Recycle";

export default function Landing() {
  return (
    <>
      <section className="landing">
        <Hero />
        <EMI />
        <SCarousel />
        <RecycleFacility />
        <QuoteForm />
      </section>
    </>
  );
}
