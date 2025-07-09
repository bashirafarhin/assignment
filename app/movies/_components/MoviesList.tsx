"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/Redux/store";
import {
  incrementPage,
} from "@/Redux/slices/movies";
import { fetchMovies } from "@/Redux/reducers/movies";
import MovieCard from "@/components/MovieCard";
import Loader from "@/components/ui/Loader";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

const MovieList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error, endpoint, page } = useSelector(
    (state: RootState) => state.movies
  );

  // Initial fetch
  useEffect(() => {
    dispatch(fetchMovies({ endpoint, page }));
  }, [dispatch, endpoint, page]);

  // Show toast on error
  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  if (loading && page === 1) return <Loader />;

  // Category change handler
  

  // Load more handler
  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <>
      {/* Movie Grid */}
      <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 my-[3rem] px-4">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center my-6">
        <Button onClick={handleLoadMore} disabled={loading}>
          {loading ? "Loading more..." : "Load More"}
        </Button>
      </div>
    </>
  );
};

export default MovieList;
