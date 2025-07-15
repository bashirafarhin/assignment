"use client";

import React from "react";
import TrendingNews from "./TrendingNews";
import TrendingMovies from "./TrendingMovies";
import TextAnimation from "./ui/TextAnimation";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  return (
    <div className="my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-35">
      <div className="text-7xl text-center">
        <h1>{t("main.line1")}</h1>
        <h1>{t("main.line2")}</h1>
        <h1>{t("main.line3")}</h1>
      </div>
      <TrendingNews />
      <TrendingMovies />
      <div className="text-7xl">
        <TextAnimation
          text={t("main.quote")}
        />
      </div>
    </div>
  );
};

export default Main;