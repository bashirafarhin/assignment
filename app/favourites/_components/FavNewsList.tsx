"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/Redux/store";
import { fetchFavourites } from "@/Redux/slices/favourites";
import NewsCard from "@/components/NewsCard";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/Loader";
import MovieCard from "@/components/MovieCard";

const FavNewsList = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { news: favouriteNews, movies: favouriteMovies, error } = useSelector(
    (state: RootState) => state.favourites
  );

  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchFavourites());
    setTimeout(() => setLocalLoading(false), 0);
  }, [dispatch]);

  if (localLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <div className="text-red-500 font-semibold mb-4">{error}</div>
        <Button
          onClick={() => {
            setLocalLoading(true);
            dispatch(fetchFavourites());
            setTimeout(() => setLocalLoading(false), 0);
          }}
        >
          Retry
        </Button>
      </div>
    );
  }

  if (favouriteNews.length === 0 && favouriteMovies.length ===0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="text-text mb-2">No favourite yet.</div>
        <Button onClick={() => router.push("/news")}>Browse now</Button>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 my-[5rem]">
      {favouriteNews.map((article, index) => (
        <NewsCard
          key={index}
          article={article}
        />
      ))}
      {favouriteMovies.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default FavNewsList;
