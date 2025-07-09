"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import ThemeToggleButton from "../ui/ThemeToggleButton";
import Login from "../Login";
import MenuDropdown from "../MenuDropdown";

const Header = () => {
  return (
    <header>
      <div className="w-[80vw] mx-auto flex justify-between items-center mt-3">
        <Logo />

        <div className="hidden sm:block">
          <ul className="flex flex-col font-medium flex-row space-x-8">
            <li>
              <Link
                href="/news"
                className="dark:text-text"
                aria-current="page"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/movies"
                className="dark:text-text"
                aria-current="page"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                href="/favourites"
                className="dark:text-text"
                aria-current="page"
              >
                Favourites
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <ThemeToggleButton />
          <Login />
          <div className="block sm:hidden"><MenuDropdown /></div>
        </div>
      </div>
    </header>
  );
};

export default Header;