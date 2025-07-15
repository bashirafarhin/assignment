"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Dropdown from "@/components/ui/Dropdown";
import { Menu } from "lucide-react";

type Props = {
  isDropdown?: boolean;
};

const NavLinks = ({ isDropdown = false }: Props) => {
  const { t } = useTranslation();

  if (isDropdown) {
    return (
      <Dropdown
        trigger={
          <div className="p-2 border border-gray-300 dark:border-gray-600 rounded-full">
            <Menu size={18} />
          </div>
        }
        className="mt-2 min-w-[160px] p-2 shadow-lg"
      >
        <ul className="flex flex-col">
          <li>
            <Link href="/news" className="block text-text font-medium px-4 py-2 hover:text-hover">
              {t("news")}
            </Link>
          </li>
          <li>
            <Link href="/movies" className="block text-text font-medium px-4 py-2 hover:text-hover">
              {t("movies")}
            </Link>
          </li>
          <li>
            <Link href="/favourites" className="block text-text font-medium px-4 py-2 hover:text-hover">
              {t("favourites")}
            </Link>
          </li>
        </ul>
      </Dropdown>
    );
  }

  return (
    <ul className="flex flex-row space-x-8 font-medium">
      <li>
        <Link href="/news" className="dark:text-text">
          {t("news")}
        </Link>
      </li>
      <li>
        <Link href="/movies" className="dark:text-text">
          {t("movies")}
        </Link>
      </li>
      <li>
        <Link href="/favourites" className="dark:text-text">
          {t("favourites")}
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;