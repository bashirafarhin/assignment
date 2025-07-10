"use client";

import React from "react";
import Dropdown from "@/components/ui/Dropdown";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { setCategory } from "@/Redux/slices/news";
import { fetchNews } from "@/Redux/reducers/news";
import { useTranslation } from "react-i18next";

const CategoriesDropdown: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const handleSelect = (item: string) => {
  const selectedCategory = item.toLowerCase();
  localStorage.setItem("selectedCategory", selectedCategory);
  dispatch(setCategory(selectedCategory));
  dispatch(fetchNews());
};

  return (
    <Dropdown
      trigger={
        <div className="border border-bg w-full px-2 py-1 rounded-full">
          {t("categories")}
        </div>
      }
    >
      {[
        "Business",
        "Entertainment",
        "General",
        "Health",
        "Science",
        "Technology",
        "Sports",
      ].map((item) => (
        <button
          key={item}
          onClick={() => handleSelect(item)}
          className="block w-full text-left text-text font-medium px-2 py-1 hover:cursor-pointer"
        >
          {t(item)}
        </button>
      ))}
    </Dropdown>
  );
};

export default CategoriesDropdown;
