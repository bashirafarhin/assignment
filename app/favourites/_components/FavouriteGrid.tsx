"use client";

import React from "react";
import { NewsArticle } from "@/types/news";
import { Movie } from "@/types/movie";
import NewsCard from "@/components/NewsCard";
import MovieCard from "@/components/MovieCard";

interface FavouriteGridProps {
  news: NewsArticle[];
  movies: Movie[];
}

const FavouriteGrid: React.FC<FavouriteGridProps> = ({ news, movies }) => {
  if (news.length === 0 && movies.length === 0) return null;

  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 my-[5rem]">
      {news.map((article, index) => (
        <NewsCard key={`news-${index}`} article={article} />
      ))}
      {movies.map((movie, index) => (
        <MovieCard key={`movie-${index}`} movie={movie} />
      ))}
    </div>
  );
};

export default FavouriteGrid;