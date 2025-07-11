"use client";

import React from "react";
import TrendingNews from "./TrendingNews";
import TrendingMovies from "./TrendingMovies";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-15">
      <h1 className="font-bold text-7xl">{t("main.welcome")}</h1>
      <TrendingNews />
      <TrendingMovies />
    </div>
  );
};

export default Main;