"use client";

import React from "react";
import Logo from "@/components/ui/Logo";
import ThemeToggleButton from "../ui/ThemeToggleButton";
import Login from "../Login";
import LanguageButton from "../ui/LanguageButton";
import DropToFavIcon from "./DropToFav";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header>
      <div className="w-[80vw] mx-auto flex justify-between items-center mt-3">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden sm:block">
          <NavLinks />
        </div>

        {/* Header Controls */}
        <div className="flex gap-3 justify-center items-center">
          <DropToFavIcon />
          <ThemeToggleButton />
          <LanguageButton />
          <Login />

          {/* Mobile Dropdown */}
          <div className="block sm:hidden">
              <NavLinks isDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;