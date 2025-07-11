"use client";

import React from "react";
import TrendingNews from "./TrendingNews";
import TrendingMovies from "./TrendingMovies";
import TextAnimation from "./ui/TextAnimation";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-30">
      <h1 className="font-bold text-7xl">{t("main.welcome")}</h1>
      <div className="text-7xl">
        <TextAnimation
          text={`Stay informed.\nStay inspired.\nGet the latest updates.`}
        />
      </div>
      <TrendingNews />
      <TrendingMovies />
      <div className="text-7xl">
        <TextAnimation
          text={`Information is the most powerful tool of our time. What you know shapes what you do. Stay curious. Stay aware. Stay ahead.`}
        />
      </div>
    </div>
  );
};

export default Main;