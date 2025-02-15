import { SCarousel } from "@/components/Carousel";
import EMI from "@/components/ui/EMI";

import Hero from "@/components/ui/Hero";
import Newsletter from "@/components/ui/Newsletter";
import RecycleFacility from "@/components/ui/Recycle";

export default function Landing() {
  return (
    <>
      <section className="landing">
        <Hero />
        <EMI />
        <SCarousel />
        <RecycleFacility />
        <Newsletter />
      </section>
    </>
  );
}
