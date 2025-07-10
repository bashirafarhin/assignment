"use client"
import React from "react";
import MovieList from "./_components/MoviesList";
import TopBar from "./_components/TopBar";
import { useTranslation } from "react-i18next";

const Page = () => {

  const { t } = useTranslation();

  return (
    <div className="my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-8">
      <div className="mx-auto px-4 font-bold text-6xl text-center">
        <h1>{t("movies")}</h1>
        <p className="text-base sm:text-lg font-normal mt-4">
          {t("moviesTagLine")}
        </p>
      </div>
      <TopBar />
      <MovieList/>
    </div>
  );
};

export default Page;
