"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./image-slider";
import { images } from "@/data/constants";
const EMI = () => {
  
  return (
    <ImagesSlider className="h-[15rem] sm:h-[25rem] md:h-[55rem] mb-10" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-start"
      >
        <motion.p className="uppercase font-bold text-xl md:text-6xl text-center text-white -mt-20 md:-mt-32">
          we take pride in
        </motion.p>
        
      </motion.div>
    </ImagesSlider>
  );
}

export default EMI;