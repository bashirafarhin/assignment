"use client";

import React from "react";
import TrendingNews from "./TrendingNews";
import TrendingMovies from "./TrendingMovies";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-8">
      <h1 className="font-bold text-7xl">{t("main.welcome")}</h1>
      <p className="text-base sm:text-lg font-normal mt-4">
        {t("main.description")}
      </p>
      <TrendingNews />
      <TrendingMovies />
    </div>
  );
};

export default Main;