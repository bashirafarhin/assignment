"use client"
import FavNewsList from "./_components/FavNewsList";
import { useTranslation } from "react-i18next";

const Page = () => {

  const { t } = useTranslation();

  return (
    <div className="my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-8">
      <div className="mx-auto px-4 font-bold text-6xl text-center">
        <h1>{t("favourites")}</h1>
        <p className="text-base sm:text-lg font-normal mt-4">
          {t("favTagLine")}
        </p>
      </div>
      <FavNewsList />
    </div>
  );
};

export default Page;