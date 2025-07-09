"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, incrementPage } from "@/Redux/slices/news";
import { RootState, AppDispatch } from "@/Redux/store";
import NewsCard from "@/components/NewsCard";
import Button from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";
import toast from "react-hot-toast";
import { Sparkle, Sparkles } from "lucide-react";
import { NewsArticle } from "@/types/news";
import { insertFavourite } from "@/Redux/slices/favourites";
import Link from "next/link";

const NewsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = useState(false);
  const { data, loading, error, page } = useSelector(
    (state: RootState) => state.news
  );
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch, page]);

  const loadMore = () => {
    dispatch(incrementPage());
  };

  const addToFavourites = (article: NewsArticle) => {
    if (selected) {
      return toast.success("Already added to favourites");
    }
    dispatch(insertFavourite({ type: "news", item: article }));
    toast.success("added to favourites");
    setSelected(true);
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
            footer={
              <div className="w-fit flex mt-4 gap-3">
                <Button>
                  <Link
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:px-2 transition-all duration-300 ease-in-out"
                  >
                    Read More
                  </Link>
                </Button>
                <Button onClick={() => addToFavourites(article)}>
                  {selected ? (
                    <Sparkles className="text-yellow-900" />
                  ) : (
                    <Sparkle />
                  )}
                </Button>
              </div>
            }
          />
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Button onClick={loadMore} disabled={loading}>
          {loading ? "Loading more..." : "Load More"}
        </Button>
      </div>
    </>
  );
};

export default NewsList;
