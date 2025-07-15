"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/Redux/store";
import { fetchMovies } from "@/Redux/reducers/movieReducer";
import Loader from "@/components/ui/Loader";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import MoviesGrid from "./MoviesGrid";
import RetryState from "@/components/ui/RetryState";
import { movieActions } from "@/Redux/slices/movieSlice";

const MovieList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data,
    loading,
    error,
    endpoint,
    page,
    query,
    totalResults,
  } = useSelector((state: RootState) => state.movies);

  const hasMore = data.length < totalResults;

  useEffect(() => {
    dispatch(movieActions.resetMovies());
    dispatch(fetchMovies());
  }, [dispatch, endpoint, query]);

  const observerRef = useInfiniteScroll({
    loading,
    onLoadMore: () => {
      if (!loading && hasMore) {
        dispatch(movieActions.incrementPage());
        dispatch(fetchMovies());
      }
    },
  });

  if (loading && page === 1) return <Loader />;

  if (query && data.length === 0) {
    return (
      <div className="text-center my-4">
        <h1>No results for this keyword.</h1>
      </div>
    );
  }

  return (
    <>
      <MoviesGrid movies={data} />

      {loading && <Loader />}

      {!loading && !hasMore && data.length > 0 && (
        <p className="text-center my-4 text-gray-500">
          No more results. Explore different categories or queries
        </p>
      )}

      <div ref={observerRef} className="h-12 flex justify-center items-center" />

      {error && (
        <RetryState
          onRetry={() => {
            dispatch(movieActions.resetMovies());
            dispatch(fetchMovies());
          }}
          errorMessage={error}
        />
      )}
    </>
  );
};

export default MovieList;