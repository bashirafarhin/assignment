import React from "react";
import TopBar from "./_components/TopBar";
import NewsList from "./_components/NewsList";

const page = () => {
  return (
    <div className="my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-8">
      <div className="mx-auto px-4 font-bold text-6xl text-center">
        <h1>News</h1>
        <p className="text-base sm:text-lg font-normal mt-4">
          We have got everything for you
        </p>
      </div>
      <TopBar />
      <NewsList />
    </div>
  );
};

export default page;
