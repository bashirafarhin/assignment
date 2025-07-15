import React from "react";
import { Movie } from "@/types/movie";
import MovieCard from "@/components/MovieCard";

interface MoviesGridProps {
  movies: Movie[];
}

const MoviesGrid = ({ movies }: MoviesGridProps) => {

  if(movies.length==0){
    return null;
  }
  
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 my-[5rem]">
      {movies.map((movie, ind) => (
        <MovieCard key={ind} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;