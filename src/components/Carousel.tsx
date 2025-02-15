"use client";

import React from "react";
import { Carousel, Card } from "./ui/carousel";

import { categories } from "@/data/constants";

export function SCarousel() {
  const cards = categories.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Categories
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
