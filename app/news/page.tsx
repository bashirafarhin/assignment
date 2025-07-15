import React from "react";
import TopBar from "./_components/TopBar";
import NewsList from "./_components/NewsList";
import NewsTopSection from "./_components/NewsTopSection";

export default function Page ()  {
  return (
    <div className="my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-8">
      <NewsTopSection />
      <TopBar />
      <NewsList />
    </div>
  );
};