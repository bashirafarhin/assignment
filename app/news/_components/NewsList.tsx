"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, incrementPage } from "@/Redux/slices/news";
import { RootState, AppDispatch } from "@/Redux/store";
import NewsCard from "./NewsCard";
import Button from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";

const NewsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error, page } = useSelector((state: RootState) => state.news);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch, page]);

  const loadMore = () => {
    dispatch(incrementPage());
  };

  if (loading && page === 1) return <Loader />;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <>
      <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 my-[5rem]">
        {data.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Button onClick={loadMore} disabled={loading}>
          {loading ? "Loading more..." : "Load More"}
        </Button>
      </div>
    </>
  );
};

export default NewsList;