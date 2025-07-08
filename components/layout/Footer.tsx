import React from "react";
import Link from "next/link";
import {
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
      <footer className="my-20 text-center bg-bg backdrop">
        <div className="p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Logo />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-text uppercase">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-600 font-medium">
                  <li className="mb-4">
                    <Link
                      href="https://github.com/yourprofile"
                      className="hover:underline"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://discord.gg/yourinvite"
                      className="hover:underline"
                      target="_blank"
                    >
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-text uppercase">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-600 font-medium">
                  <li className="mb-4">
                    <Link href="/privacy-policy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:underline">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-text uppercase">
                  Newsletter
                </h2>
                <form className="mb-4">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full p-2 border-b border-gray-600 border-black"
                  />
                </form>
                <div className="flex gap-4 text-gray-500 dark:text-gray-600">
                  <Link href="https://twitter.com" target="_blank">
                    <div className="p-2 rounded-full hover:scale-110 transition-transform bg-white/10">
                      <Twitter size={20} />
                    </div>
                  </Link>
                  <Link href="https://instagram.com" target="_blank">
                    <div className="p-2 rounded-full hover:scale-110 transition-transform bg-white/10">
                      <Instagram size={20} />
                    </div>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank">
                    <div className="p-2 rounded-full hover:scale-110 transition-transform bg-white/10">
                      <Linkedin size={20} />
                    </div>
                  </Link>
                  <Link href="https://youtube.com" target="_blank">
                    <div className="p-2 rounded-full hover:scale-110 transition-transform bg-white/10">
                      <Youtube size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-center">
            <span className="text-sm text-gray-500 dark:text-gray-600">
              © 2025{" "}
              <Link href="/" className="hover:underline">
                Project™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
        <div className="text-9xl font-bold mt-10">
          LOGO
        </div>
      </footer>
  );
};

export default Footer;