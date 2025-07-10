"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingNews } from "@/Redux/reducers/trendingNews";
import { RootState, AppDispatch } from "@/Redux/store";
import NewsCard from "@/components/NewsCard";
import Loader from "@/components/ui/Loader";
import toast from "react-hot-toast";
import HorizontalScroller from "./HorizontalScrollbar";

const TrendingNews = () => {
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
    <div className="space-y-8">
      <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center">
        Trending News
      </h1>
      { loading && <Loader />}
      { data && <div className="w-[80vw] mt-5">
        <HorizontalScroller itemWidth={320} gap={20}>
        {data.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </HorizontalScroller>
      </div>}
    </div>
  );
};

export default TrendingNews;
