"use client";

import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import Button from "@/components/ui/Button";
import { useTranslation } from "react-i18next";
import { fetchNews } from "@/Redux/reducers/newsReducer";
import { newsActions } from "@/Redux/slices/newsSlice";
import debounce from "@/utils/debounce";

const TopBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [localKeyword, setLocalKeyword] = useState("");
  const { category } = useSelector((state: RootState) => state.news);

  const CATEGORIES = [
    t("General"),
    t("Business"),
    t("Entertainment"),
    t("Health"),
    t("Science"),
    t("Technology"),
  ];

  // Debounced query handler (runs only after user stops typing)
  const debouncedKeyword = useMemo(
    () =>
      debounce((keyword: string) => {
        dispatch(newsActions.resetNews());
        dispatch(newsActions.setKeyword(keyword));
        dispatch(fetchNews());
      }, 500),
    [dispatch]
  );

  const handleKeyword = (query: string) => {
    setLocalKeyword(query);
    debouncedKeyword(query.trim());
  };

  const handleCategory = (category: string) => {
    dispatch(newsActions.resetNews());
    dispatch(newsActions.setCategory(category.toLowerCase()));
    dispatch(fetchNews());
  };

  return (
    <div className="p-2 flex flex-wrap items-center justify-center w-fit gap-2">
      <input
        type="text"
        placeholder="Search by keyword..."
        value={localKeyword}
        onChange={(e) => handleKeyword(e.target.value)}
        className="p-2 border-b border-gray-600 border-black"
      />

      {CATEGORIES.map((cat, index) => (
        <Button
          key={index}
          onClick={() => handleCategory(cat)}
          className={`${category === cat.toLowerCase()? "bg-blue-500" : ""}`}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
};

export default TopBar;