interface NavLinkTypes {
  title: string;
  href: string;
  subList?: NavLinkTypes[];
}
export const navbarLinks: NavLinkTypes[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "Services",
    href: "services",
  },
  {
    title: "Accreditation",
    href: "accreditation",
  },
];
export const products = [
  {
    title: "Left Side Mirror",
    thumbnail: "/assets/images/hero_images/car_1.webp",
  },
  {
    title: "High Beam Headlight",
    thumbnail: "/assets/images/hero_images/car_2.webp",
  },
  {
    title: "Fog Light",
    thumbnail: "/assets/images/hero_images/car_3.webp",
  },

  {
    title: "Right Side Mirror",
    thumbnail: "/assets/images/hero_images/car_4.webp",
  },
  {
    title: "Car Headlight",
    thumbnail: "/assets/images/hero_images/headlight_1.webp",
  },
  {
    title: "Car Reflector",
    thumbnail: "/assets/images/hero_images/reflector_1.webp",
  },

  {
    title: "Black Helmet",
    thumbnail: "/assets/images/hero_images/helmet_1.webp",
  },
  {
    title: "Police Light",
    thumbnail: "/assets/images/hero_images/policelight_1.webp",
  },
  {
    title: "Scooty Side Mirror",
    thumbnail: "/assets/images/hero_images/scooter_1.webp",
  },
  {
    title: "Bike Backlight",
    thumbnail: "/assets/images/hero_images/scooter_2.webp",
  },
  {
    title: "Bike Side Mirror",
    thumbnail: "/assets/images/hero_images/scooter_3.webp",
  },

  {
    title: "White Striplight",
    thumbnail: "/assets/images/hero_images/striplight_1.webp",
  },
  {
    title: "Red Striplight",
    thumbnail: "/assets/images/hero_images/striplight_2.webp",
  },
  {
    title: "RGB Striplight",
    thumbnail: "/assets/images/hero_images/striplight_3.webp",
  },
  {
    title: "Truck Lights",
    thumbnail: "/assets/images/hero_images/truck.webp",
  },
];

export const categories = [
  {
    title: "Black Helmet",
    category: "Helmets",
    href: "#",
    thumbnail: "/assets/images/hero_images/helmet_1.webp",
  },
  {
    title: "Circular Headlight",
    category: "Headlights",
    href: "#",
    thumbnail: "/assets/images/hero_images/car_2.webp",
  },
  {
    title: "Red Striplight",
    category: "Striplight",
    href: "#",
    thumbnail: "/assets/images/hero_images/striplight_2.webp",
  },
  {
    title: "Bike Backlight",
    category: "Bike Lights",
    href: "#",
    thumbnail: "/assets/images/hero_images/scooter_2.webp",
  },
];

export const images = [
  "/assets/images/emi/export.webp",
  "/assets/images/emi/manufacture.webp",
  "/assets/images/emi/import.webp",
];

export const footerLinks = [
  {
    title: "About",
    sublist: [
      {
        title: "Company History",
        href: "#",
      },
      {
        title: "Meet The Team",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
    ],
  },
  {
    title: "Our Services",
    sublist: [
      {
        title: "IT Services",
        href: "#",
      },
      {
        title: "Logistics",
        href: "#",
      },
      {
        title: "Recommendations",
        href: "#",
      },
    ],
  },
  {
    title: "Helpful Links",
    sublist: [
      {
        title: "FAQs",
        href: "#",
      },
    ],
  },
  {
    title: "Support",
    sublist: [
      {
        title: "+92 331 4264046",
        href: "#",
      },
      {
        title: "info2sheikhsahab@gmail.com",
        href: "#",
      },
      {
        title: "G-5 Auto centre Badami Bagh, Lahore, Pakistan",
        href: "#",
      },
    ],
  },
];

export const socials = [
  {
    title: "Facebook",
    href: "#",
    icon: "/assets/socials/facebook.svg",
  },
  {
    title: "Instagram",
    href: "#",
    icon: "/assets/socials/instagram.svg",
  },
  {
    title: "YouTube",
    href: "#",
    icon: "/assets/socials/youtube.svg",
  },
  {
    title: "LinkedIn",
    href: "#",
    icon: "/assets/socials/linkedin.svg",
  },
];
