"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import MovieCard from "@/components/MovieCard";
import Loader from "@/components/ui/Loader";
import HorizontalScroller from "./HorizontalScrollbar";
import toast from "react-hot-toast";
import { fetchMovies } from "@/Redux/reducers/movies";

const TrendingMovies = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies({ endpoint: "popular", page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <div className="space-y-8">
      <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center">
        Trending Movies
      </h1>
      { loading && <Loader />}
      {data && <div className="w-[80vw] mt-6">
        <HorizontalScroller itemWidth={320} gap={20}>
          {data.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </HorizontalScroller>
      </div>}
    </div>
  );
};

export default TrendingMovies;