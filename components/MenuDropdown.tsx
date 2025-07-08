import React from "react";
import Dropdown from "./ui/Dropdown";
import { Menu } from "lucide-react";
import Link from "next/link";

const MenuDropdown = () => {
  return (
    <Dropdown
      trigger={
        <Menu size={30}/>
      }
    >
      {["News", "Music", "Favourites"].map((item) => (
        <Link
          key={item}
          href={`/${item}`}
          className="block text-text font-medium px-4 py-2 hover:text-hover"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      ))}
    </Dropdown>
  );
};

export default MenuDropdown;
