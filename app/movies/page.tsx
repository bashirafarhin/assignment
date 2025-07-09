import React from "react";
import MovieList from "./_components/MoviesList";
import TopBar from "./_components/TopBar";

const page = () => {
  return (
    <div className="my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-8">
      <div className="mx-auto px-4 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl my-[8rem] text-center">
        <h1>Movies</h1>
        <p className="text-base sm:text-lg font-normal mt-4">
          We have got everything for you
        </p>
      </div>
      <TopBar />
      <MovieList/>
    </div>
  );
};

export default page;
