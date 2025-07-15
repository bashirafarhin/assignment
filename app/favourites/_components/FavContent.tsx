"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavourites } from "@/Redux/slices/favouritesReducer";
import { RootState, AppDispatch } from "@/Redux/store";
import Loader from "@/components/ui/Loader";
import RetryState from "@/components/ui/RetryState";
import EmptyState from "@/components/ui/EmptyState";
import FavouriteGrid from "./FavouriteGrid";
import { useEffect, useState } from "react";

const FavContent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { news, movies, error } = useSelector((state: RootState) => state.favourites);

  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchFavourites());
    setTimeout(() => setLocalLoading(false), 0);
  }, [dispatch]);

  if (localLoading) return <Loader />;
  if (error) return <RetryState onRetry={() => {
    setLocalLoading(true);
    dispatch(fetchFavourites());
    setTimeout(() => setLocalLoading(false), 0);
  }} />;
  if (news.length === 0 && movies.length === 0) return <EmptyState />;

  return <FavouriteGrid news={news} movies={movies} />;
};

export default FavContent;