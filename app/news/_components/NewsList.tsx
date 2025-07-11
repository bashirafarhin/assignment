"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementPage } from "@/Redux/slices/news";
import { fetchNews } from "@/Redux/reducers/news";
import { RootState, AppDispatch } from "@/Redux/store";
import NewsCard from "@/components/NewsCard";
import Button from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const NewsList: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error, page } = useSelector(
    (state: RootState) => state.news
  );
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch, page]);

  const loadMore = () => {
    dispatch(incrementPage());
  };

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  if (loading && page === 1) return <Loader />;

  return (
    <>
      <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 my-[5rem]">
        {data.map((article, index) => (
          <NewsCard
            key={index}
            article={article}
          />
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Button onClick={loadMore} disabled={loading}>
          {loading ? `${t("loadingMore")}...` : t("loadMore")}
        </Button>
      </div>
    </>
  );
};

export default NewsList;
