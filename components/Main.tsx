import React from "react";
import TrendingSection from "./TrendingSection";

const Main = () => {
  return (
    <div className="my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-8">
      <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Welcome</h1>
      <p className="text-base sm:text-lg font-normal mt-4">
        Click on the above buttons to reach your destination
      </p>
      <TrendingSection />
    </div>
  );
};

export default Main;
