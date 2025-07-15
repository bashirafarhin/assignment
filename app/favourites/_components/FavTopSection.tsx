"use client"
import React from "react";
import { useTranslation } from "react-i18next";

const FavTopSection = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto px-4 font-bold text-6xl text-center">
      <h1>{t("favourites")}</h1>
      <p className="text-base sm:text-lg font-normal mt-4">{t("favTagLine")}</p>
    </div>
  );
};

export default FavTopSection;