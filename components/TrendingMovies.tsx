"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "@/Redux/slices/movieSlice";
import { RootState, AppDispatch } from "@/Redux/store";
import MovieCard from "./MovieCard";
import Loader from "@/components/ui/Loader";
import HorizontalScroller from "./HorizontalScrollbar";
import { useTranslation } from "react-i18next";
import RetryState from "./ui/RetryState";
import { fetchMovies } from "@/Redux/reducers/movieReducer";

const TrendingMovies = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  // Ensure trending mode: clear keyword and category
  useEffect(() => {
    dispatch(movieActions.resetMovies());
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchMovies());
  };

  return (
    <div className="text-center">
      <h1 className="font-semibold text-6xl text-center my-4">
        {t("trendingMovies")}
      </h1>

      {loading && <Loader />}

      {error && !loading && <RetryState onRetry={handleRetry} />}

      {!loading && data.length > 0 && (
        <div className="w-[80vw] mt-6 mx-auto">
          <HorizontalScroller itemWidth={320} gap={20}>
            {data.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </HorizontalScroller>
        </div>
      )}
    </div>
  );
};

export default TrendingMovies;