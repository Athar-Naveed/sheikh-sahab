import { JSX } from "react";

export interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export interface CardType {
  title: string;
  category:string;
  href: string;
  thumbnail: string;
};