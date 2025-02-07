import { footerLinks, socials } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-600 sm:justify-start dark:text-teal-300">
                <Image
                  src={"/Logo/darkthemelogo.svg"}
                  width={50}
                  height={50}
                  alt="Sheikh Sahab Logo"
                  priority={false}
                />
              </div>

              <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left dark:text-gray-400">
                Our Vision is to convert our creative ideas into an eco-firendly
                technology that everyone can use.
              </p>

              <ul className="mt-8 flex justify-center gap-2 sm:justify-start md:gap-4">
                {socials.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <li>
                      <Image
                        src={social.icon}
                        width={28}
                        height={28}
                        alt={social.title}
                      />
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              {footerLinks.map((footLink, index) => (
                <div key={index} className="text-center sm:text-left">
                  <p className="text-lg font-medium text-white">
                    {footLink.title}
                  </p>

                  <ul className="mt-8 space-y-4 text-sm">
                    {footLink.sublist.map((subListMap, subIndex) => (
                      <li key={subIndex}>
                        {footLink.title === "Support" ? (
                          <span className="text-gray-500 cursor-text select-text">
                            {subListMap.title}
                          </span>
                        ) : (
                          <Link
                            className="text-white hover:text-white/75 transition"
                            href={subListMap.href}
                          >
                            {subListMap.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="block sm:inline">All rights reserved.</span>
              </p>

              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
                &copy; 2025 Sheikh sahab
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
