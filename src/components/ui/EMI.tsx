"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function EMI() {
  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView3 = useInView(ref3, { once: true, amount: 0.3 });

  return (
    <>
      <section className="h-[250vh] grid items-center justify-center">
        <div className=" mx-auto px-4 sm:px-6">
          <div className="">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <div className="inline-flex font-semibold py-1 px-3 m-2 rounded-full mb-4">
                <Image
                  src={"/Logo/lightthemelogo.svg"}
                  width={80}
                  height={80}
                  alt={"Sheikh Sahab Logo"}
                />
              </div>
              <h1 className="h2 mb-4 font-semibold uppercase text-4xl">
                We do
              </h1>
            </div>

            <div className="grid gap-20">
              {/* 1st item - Export (from right) */}
              <motion.div
                ref={ref1}
                className="md:grid md:grid-cols-12 md:gap-6 items-center"
                initial="hidden"
                animate={isInView1 ? "visible" : "hidden"}
                variants={fadeInRightVariants}
                transition={{ duration: 0.5 }}
              >
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                  <Image
                    className="max-w-full md:w-full h-auto"
                    src={"/assets/images/emi/export.webp"}
                    width={540}
                    height={405}
                    alt="Export"
                  />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className="emi-title">Export</div>
                    <h3 className="emi-heading mb-3">Expanding Global Reach</h3>
                    <p className="emi-desc">
                      We ship eco-friendly and innovative products worldwide,
                      forging partnerships that promote a sustainable future. We
                      export premium products, ensuring customers around the
                      globe experience the best of our craftsmanship.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 2nd item - Manufacture (from left) */}
              <motion.div
                ref={ref2}
                className="md:grid md:grid-cols-12 md:gap-6 items-center"
                initial="hidden"
                animate={isInView2 ? "visible" : "hidden"}
                variants={fadeInLeftVariants}
                transition={{ duration: 0.5 }}
              >
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl">
                  <Image
                    className="max-w-full md:w-full h-auto"
                    src={"/assets/images/emi/manufacture.webp"}
                    width={540}
                    height={405}
                    alt="Manufacture"
                  />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <div className="emi-title">Manufacture</div>
                    <h3 className="emi-heading mb-3">The Art of Creativity</h3>
                    <p className="emi-desc">
                      Our state-of-the-art facilities produce high-quality,
                      environmentally conscious products, reflecting our
                      commitment to innovation and responsibility.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 3rd item - Import (from right) */}
              <motion.div
                ref={ref3}
                className="md:grid md:grid-cols-12 md:gap-6 items-center"
                initial="hidden"
                animate={isInView3 ? "visible" : "hidden"}
                variants={fadeInRightVariants}
                transition={{ duration: 0.5 }}
              >
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                  <Image
                    className="max-w-full md:w-full h-auto"
                    src={"/assets/images/emi/import.webp"}
                    width={540}
                    height={405}
                    alt="Import"
                  />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className="emi-title">Import</div>
                    <h3 className="emi-heading mb-3">Sourcing the Finest</h3>
                    <p className="emi-desc">
                      We carefully selects and imports only the finest materials
                      and products from around the world, ensuring our customers
                      have access to the best the global market has to offer.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
