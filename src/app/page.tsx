import { SCarousel } from "@/components/Carousel";
import EMI from "@/components/ui/EMI";
import Hero from "@/components/ui/Hero";

export default function Landing() {
  return (
    <>
    <section className="landing">
      <Hero />
      <EMI />
      <SCarousel />
    </section>
    </>
  );
}
