"use client";

import React from "react";
import NewsCard from "@/components/NewsCard";
import { NewsArticle } from "@/types/news";

interface NewsGridProps {
  articles: NewsArticle[];
}

const NewsGrid = ({ articles }: NewsGridProps) => {

  if(articles.length==0){
    return null;
  }
  
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 my-[5rem]">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsGrid;