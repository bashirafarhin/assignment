"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/Redux/store";
import { fetchFavourites } from "@/Redux/slices/favourites";
import NewsCard from "@/components/NewsCard";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/Loader";
import { deleteFavourite } from "@/Redux/slices/favourites";
import Link from "next/link";
import { Sparkle, Sparkles } from "lucide-react";
import toast from "react-hot-toast";
import { NewsArticle } from "@/types/news";

const FavNewsList = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [ deleted ] = useState(false);

  const { news: favouriteNews, error } = useSelector(
    (state: RootState) => state.favourites
  );

  const [localLoading, setLocalLoading] = useState(true);

    const handleDelete = (article: NewsArticle) => {
    dispatch(deleteFavourite({ type: "news", title: article.title }));
    toast.success("Removed from favourites");
  };


  useEffect(() => {
    dispatch(fetchFavourites());
    // Wait for one tick to allow Redux state update
    setTimeout(() => setLocalLoading(false), 0);
  }, [dispatch]);

  if (localLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <div className="text-red-500 font-semibold mb-4">{error}</div>
        <Button
          onClick={() => {
            setLocalLoading(true);
            dispatch(fetchFavourites());
            setTimeout(() => setLocalLoading(false), 0);
          }}
        >
          Retry
        </Button>
      </div>
    );
  }

  if (favouriteNews.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="text-text">No favourite news yet.</div>
        <Button onClick={() => router.push("/news")}>Browse now</Button>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 my-[5rem]">
      {favouriteNews.map((article, index) => (
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
                <Button onClick={() => handleDelete(article)}>
                  {deleted ? (
                    <Sparkle />
                  ) : (
                    <Sparkles className="text-yellow-900" />
                  )}
                </Button>
              </div>
          }
        />
      ))}
    </div>
  );
};

export default FavNewsList;
