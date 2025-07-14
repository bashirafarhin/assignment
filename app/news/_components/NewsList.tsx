"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementPage } from "@/Redux/slices/news";
import { fetchNews } from "@/Redux/reducers/news";
import { RootState, AppDispatch } from "@/Redux/store";
import NewsCard from "@/components/NewsCard";
import Loader from "@/components/ui/Loader";
import toast from "react-hot-toast";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

const NewsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error, page } = useSelector(
    (state: RootState) => state.news
  );

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch, page]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  const observerRef = useInfiniteScroll({
    loading,
    onLoadMore: () => dispatch(incrementPage()),
  });

  if (loading && page === 1) return <Loader />;

  return (
    <>
      <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 my-[5rem]">
        {data.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>

      <div ref={observerRef} className="h-12 flex justify-center items-center">
        {loading && <Loader />}
      </div>
    </>
  );
};

export default NewsList;