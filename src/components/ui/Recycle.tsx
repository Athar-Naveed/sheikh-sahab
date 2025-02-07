"use client";
import { motion } from "framer-motion";

export default function RecycleFacility() {
  return (
    <section className="relative w-full h-screen mb-5">
      {/* Animated background image */}
      <motion.div
        className="absolute inset-0 brightness-50 bg-[url('/assets/images/recycled/recycle3.png')]  bg-no-repeat bg-cover bg-left md:bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center">
        {/* Animated heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We recycle our products
        </motion.h1>
        {/* Additional descriptive text */}
        <motion.p
          className="mt-4 text-white max-w-xl px-4 md:text-xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Transforming waste into sustainable innovation, preserving our planet
          for a greener future.
        </motion.p>
      </div>
    </section>
  );
}
