"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "@/Redux/reducers/newsReducer";
import { RootState, AppDispatch } from "@/Redux/store";
import Loader from "@/components/ui/Loader";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import NewsGrid from "./NewsGrid";
import { newsActions } from "@/Redux/slices/newsSlice";
import RetryState from "@/components/ui/RetryState";

const NewsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error, category, page, keyword, totalResults } =
    useSelector((state: RootState) => state.news);
  console.log(
    "data",
    data,
    "loading",
    loading,
    "error",
    error,
    "category",
    category,
    "page",
    page,
    "keyword",
    keyword,
    "total result",
    totalResults
  );

  const hasMore = data.length < totalResults;

  useEffect(() => {
    dispatch(newsActions.resetNews());
    dispatch(fetchNews());
  }, [dispatch, category, keyword]);

  const observerRef = useInfiniteScroll({
    loading,
    onLoadMore: () => {
      if (!loading && hasMore) {
        dispatch(newsActions.incrementPage());
        dispatch(fetchNews());
      }
    },
  });

  if (loading && page === 1) return <Loader />;

  if (keyword && data.length === 0) {
    return (
      <div className="text-center my-4">
        <h1>No results for this keyword.</h1>
      </div>
    );
  }

  return (
    <>
      <NewsGrid articles={data} />

      {loading && <Loader />}

      {!loading && !hasMore && data.length > 0 && (
        <p className="text-center my-4 text-gray-500">
          No more results. Explore different categories or queries
        </p>
      )}

      <div
        ref={observerRef}
        className="h-12 flex justify-center items-center"
      />

      {error && (
        <RetryState
          onRetry={() => {
            dispatch(newsActions.resetNews());
            dispatch(fetchNews());
          }}
          errorMessage={error}
        />
      )}
    </>
  );
};

export default NewsList;