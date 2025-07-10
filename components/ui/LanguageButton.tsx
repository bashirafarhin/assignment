"use client";

import React from "react";
import Dropdown from "./Dropdown";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "hi", lang: "Hindi" },
];

const LanguageButton = () => {
  const { i18n } = useTranslation();

  const handleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown
      trigger={
        <div className="border border-bg px-2 py-1 rounded-full">
          <Languages />
        </div>
      }
    >
      {languages.map((item) => (
        <button
          key={item.code}
          onClick={() => handleLanguage(item.code)}
          className={`block w-fit text-left text-text font-medium px-3 py-2 hover:cursor-pointer ${
            item.code === i18n.language ? "bg-blue-500" : ""
          }`}
        >
          {item.lang}
        </button>
      ))}
    </Dropdown>
  );
};

export default LanguageButton;
