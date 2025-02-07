"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navbarLinks } from "../../../data/constants";
import { usePathname } from "next/navigation";
import { Squeeze as Hamburger, Cross } from "hamburger-react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const path = usePathname();

  if (path.includes("studio")) return null;
  return (
    <>
      <nav className="bg-white sticky opacity-95 w-full z-20 top-0 start-0 md:py-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 mt-4">
          <Link href="/" className="flex items-center">
            <Image
              width={70}
              height={100}
              quality={100}
              src="/Logo/lightthemelogo.svg"
              className="h-10"
              alt="Sheikh Sahab Logo"
            />
            <span className="hidden lg:flex font-poppins">Sheikh sahab</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            <button className="bg-black text-white mr-3 flex items-center h-10 rounded-lg text-[10px] md:text-base px-6 text-center hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-150 ease-linear">
              Get a Quote
            </button>
            <div className="flex md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
            </div>
          </div>
          {/* 
// -------------------
// Mobile NavList
// -------------------
*/}
          {isOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-80 z-50 md:hidden">
              <div className="flex items-center justify-center h-full">
                <div
                  className="items-center justify-between flex w-full h-full md:hidden"
                  id="navbar-sticky"
                >
                  <ul className="flex flex-col p-4 font-medium rounded-lg bg-white dark:bg-gray-900 w-full max-w-sm mx-auto">
                    <Cross toggle={setOpen} toggled={isOpen} size={22} />
                    {navbarLinks.map((link, index) => (
                      <li key={index} className="mb-2 last:mb-0">
                        <Link
                          href={link.href}
                          className="block px-3 text-black text-left text-lg "
                          aria-label={link.title}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          {/* 
  // -------------------
  // Desktop NavList
  // -------------------
  */}

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navbarLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="py-2 px-3 text-black hover:text-slate-700"
                    aria-label={link.title}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
