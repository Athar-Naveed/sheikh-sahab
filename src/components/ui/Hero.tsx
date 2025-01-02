"use client";
import { HeroParallax } from "../ui/hero-parallax";
import { products } from "@/data/constants";
const Hero = () => {
  return <HeroParallax products={products} />;
}


export default Hero;