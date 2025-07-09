"use client";

import React, { useState, useEffect } from "react";
import CategoriesDropdown from "./CategoriesDropdown";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { setKeyword } from "@/Redux/slices/news";
import { fetchNews } from "@/Redux/reducers/news";

const TopBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      dispatch(setKeyword(search));
      dispatch(fetchNews());
    }, 500);

    return () => clearTimeout(delayDebounce); // Cleanup on re-typing
  }, [search, dispatch]);

  return (
    <div className="p-1 flex items-center gap-5 w-fit mx-auto">
      <input
        type="text"
        placeholder="Search by Keyword"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border-b border-gray-600 border-black"
      />
      <CategoriesDropdown />
    </div>
  );
};

export default TopBar;