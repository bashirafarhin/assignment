"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsActions } from "@/Redux/slices/newsSlice";
import { RootState, AppDispatch } from "@/Redux/store";
import NewsCard from "@/components/NewsCard";
import Loader from "@/components/ui/Loader";
import HorizontalScroller from "./HorizontalScrollbar";
import { useTranslation } from "react-i18next";
import RetryState from "./ui/RetryState";
import { fetchNews } from "@/Redux/reducers/newsReducer";

const TrendingNews = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.news
  );

  // Ensure trending mode: clear keyword and category
  useEffect(() => {
    dispatch(newsActions.resetNews());
    dispatch(fetchNews());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchNews());
  };

  return (
    <div className="text-center">
      <h1 className="font-semibold text-6xl text-center my-4">
        {t("trendingNews")}
      </h1>

      {loading && <Loader />}

      {error && !loading && <RetryState onRetry={handleRetry} />}

      {!loading && data.length > 0 && (
        <div className="w-[80vw] mt-6 mx-auto">
          <HorizontalScroller itemWidth={320} gap={20}>
            {data.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </HorizontalScroller>
        </div>
      )}
    </div>
  );
};

export default TrendingNews;