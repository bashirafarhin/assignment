import React from "react";
import Dropdown from "./ui/Dropdown";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const MenuDropdown = () => {

  const { t } = useTranslation();
  
  return (
    <Dropdown
      trigger={
        <Menu size={30}/>
      }
    >
      {["news", "movies", "favourites"].map((item) => (
        <Link
          key={item}
          href={`/${item}`}
          className="block text-text font-medium px-4 py-2 hover:text-hover"
        >
          {t(item).charAt(0).toUpperCase() + t(item).slice(1)}
        </Link>
      ))}
    </Dropdown>
  );
};

export default MenuDropdown;
