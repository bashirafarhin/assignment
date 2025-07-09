"use client";

import React, { useEffect } from "react";
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
import { deleteFavourite } from "@/Redux/slices/favourites";
import Link from "next/link";

const NewsList: React.FC = () => {
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

  const favouriteNews = useSelector(
    (state: RootState) => state.favourites.news
  );

  const handleDelete = (article: NewsArticle) => {
    dispatch(deleteFavourite({ type: "news", title: article.title }));
    toast.success("Removed from favourites");
  };

  const isArticleFavourite = (article: NewsArticle) => {
    return favouriteNews.some((fav) => fav.title === article.title);
  };

  const addToFavourites = (article: NewsArticle) => {
    dispatch(insertFavourite({ type: "news", item: article }));
    toast.success("added to favourites");
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
                {
                  isArticleFavourite(article) ?
                  <Button onClick={() => handleDelete(article)}><Sparkles className="text-yellow-900" /></Button> :
                  <Button onClick={() => addToFavourites(article)}><Sparkle /></Button>
                  
                }
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
