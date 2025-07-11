"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingNews } from "@/Redux/reducers/trendingNews";
import { RootState, AppDispatch } from "@/Redux/store";
import NewsCard from "@/components/NewsCard";
import Loader from "@/components/ui/Loader";
import toast from "react-hot-toast";
import HorizontalScroller from "./HorizontalScrollbar";
import { useTranslation } from "react-i18next";

const TrendingNews = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.trending
  );

  useEffect(() => {
    dispatch(fetchTrendingNews());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <>
      <h1 className="font-bold text-6xl text-center my-2">
        {t("trendingNews")}
      </h1>
      { loading && <Loader />}
      <div className="w-[80vw] mt-6">
        <HorizontalScroller itemWidth={320} gap={20}>
        {data.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </HorizontalScroller>
      </div>
    </>
  );
};

export default TrendingNews;
