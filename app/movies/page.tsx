import React from "react";
import MovieList from "./_components/MoviesList";
import TopBar from "./_components/TopBar";
import MoviesTopSection from "./_components/MoviesTopSection";

export default function Page () {
  return (
    <div className="my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-8">
      <MoviesTopSection />
      <TopBar />
      <MovieList/>
    </div>
  );
};