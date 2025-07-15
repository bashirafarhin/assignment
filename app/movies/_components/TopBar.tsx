"use client";

import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import Button from "@/components/ui/Button";
import { useTranslation } from "react-i18next";
import { fetchMovies } from "@/Redux/reducers/movieReducer";
import { movieActions } from "@/Redux/slices/movieSlice";
import debounce from "@/utils/debounce"; // Make sure this is imported

const TopBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [localQuery, setLocalQuery] = useState("");
  const { endpoint } = useSelector((state: RootState) => state.movies);

  const CATEGORIES = [
    { label: t("popular"), value: "popular" },
    { label: t("topRated"), value: "top_rated" },
    { label: t("upcoming"), value: "upcoming" },
    { label: t("nowPlaying"), value: "now_playing" },
  ];

  // Debounced query handler (runs only after user stops typing)
  const debouncedQuery = useMemo(() => 
    debounce((query: string) => {
      dispatch(movieActions.resetMovies());
      dispatch(movieActions.setQuery(query));
      dispatch(fetchMovies());
    }, 500), [dispatch]
  );

  const handleQuery = (query: string) => {
    setLocalQuery(query);
    debouncedQuery(query.trim());
  };

  const handleCategory = (category: string) => {
    dispatch(movieActions.resetMovies());
    dispatch(movieActions.setEndpoint(category));
    dispatch(fetchMovies());
  };

  return (
    <div className="p-2 flex flex-wrap items-center justify-center w-fit gap-2">
      <input
        type="text"
        placeholder="Search by keyword..."
        value={localQuery}
        onChange={(e) => handleQuery(e.target.value)}
        className="p-2 border-b border-gray-600 border-black"
      />

      {CATEGORIES.map((cat, index) => (
        <Button
          key={index}
          onClick={() => handleCategory(cat.value)}
          className={`${endpoint === cat.value ? "bg-blue-500" : ""}`}
        >
          {cat.label}
        </Button>
      ))}
    </div>
  );
};

export default TopBar;