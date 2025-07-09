"use client";

import React, { useState, useEffect } from "react";
import CategoriesDropdown from "./CategoriesDropdown";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { setKeyword } from "@/Redux/slices/news";
import { fetchNews } from "@/Redux/reducers/news";
import { useDebounce } from "@/hooks/useDebounce";

const TopBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const debouncedQuery = useDebounce(search, 500);

  // useEffect(() => {
  //   const delayDebounce = setTimeout(() => {
  //     dispatch(setKeyword(search));
  //     dispatch(fetchNews());
  //   }, 500);

  //   return () => clearTimeout(delayDebounce); // Cleanup on re-typing
  // }, [search, dispatch]);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      dispatch(setKeyword(search));
      dispatch(fetchNews());
    }
  }, [debouncedQuery, dispatch, search]);

  return (
    <div className="p-1 flex flex-wrap justify-center items-center gap-5 w-fit mx-auto">
      <input
        type="text"
        placeholder="Search by Keyword"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-fit p-2 border-b border-gray-600 border-black"
      />
      <CategoriesDropdown />
    </div>
  );
};

export default TopBar;