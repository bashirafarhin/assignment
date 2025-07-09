"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { fetchMovies } from "@/Redux/reducers/movies";
import Button from "@/components/ui/Button";
import { useDebounce } from "@/hooks/useDebounce";
import { setEndpoint } from "@/Redux/slices/movies";
import { RootState } from "@/Redux/store";

const CATEGORIES = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Now Playing", value: "now_playing" },
];

const TopBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { endpoint } = useSelector(
    (state: RootState) => state.movies
  );

  // Dispatch when debouncedQuery updates
  useEffect(() => {
    if (debouncedQuery.trim()) {
      dispatch(fetchMovies({ endpoint: "search", query: debouncedQuery }));
    }
  }, [debouncedQuery, dispatch]);

  const handleCategoryChange = (category: string) => {
    dispatch(setEndpoint(category));
  };

  return (
    <div className="p-2 flex flex-wrap items-center justify-center w-fit gap-2">
      {/* Live Search Input */}
      <input
        type="text"
        placeholder="Search by keyword..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border-b border-gray-600 border-black"
      />

      {/* Category Buttons */}
      {/* <div className="flex flex-wrap gap-2"> */}
        {CATEGORIES.map((cat, index) => (
          <Button
            key={index}
            onClick={() => handleCategoryChange(cat.value)}
            className={`cat.border border-bg w-fit px-2 py-1 rounded-full ${
              endpoint === cat.value
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
            }`}
          >
            {cat.label}
          </Button>
        ))}



      {/* </div> */}
    </div>
  );
};

export default TopBar;