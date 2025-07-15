"use client";

import React from "react";
import { NewsArticle } from "@/types/news";
import Button from "./ui/Button";
import Link from "next/link";
import { Sparkles, Sparkle } from "lucide-react";
import { RootState, AppDispatch } from "@/Redux/store";
import { insertFavourite } from "@/Redux/slices/favouritesReducer";
import { deleteFavourite } from "@/Redux/slices/favouritesReducer";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface Props {
  article: NewsArticle;
}

const NewsCard: React.FC<Props> = ({ article }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

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

  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData(
          "application/json",
          JSON.stringify({ type: "news", item: article })
        );
      }}
      className="dark:bg-bg border border-gray-300 rounded-xl overflow-hidden max-w-md mx-auto font-medium transition-all duration-300 ease-in-out hover:border-white/60 hover:shadow-lg hover:scale-105"
    >
      {/* Image */}
      {/* <div className="relative"> */}
        <Image
          src={article.urlToImage || "/fallback.jpeg"}
          alt={article.title}
          width={500}
          height={300}
          className="object-cover rounded-md"
          unoptimized
        />
      {/* </div> */}

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">{article.title}</h2>
        <p className="text-sm text-text">{article.description}</p>

        <div className="text-xs text-gray-500 mt-2">
          <p>
            <strong>Author:</strong> {article.author || "Unknown"}
          </p>
          <p>
            <strong>Source:</strong> {article.source?.name}
          </p>
          <p>
            <strong>Published:</strong>{" "}
            {new Date(article.publishedAt).toLocaleString()}
          </p>
        </div>

        <div className="w-fit flex mt-4 gap-3">
          <Button>
            <Link
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:px-2 transition-all duration-300 ease-in-out"
            >
              {t("readMore")}
            </Link>
          </Button>
          {isArticleFavourite(article) ? (
            <Button onClick={() => handleDelete(article)}>
              <Sparkles className="text-yellow-900" />
            </Button>
          ) : (
            <Button onClick={() => addToFavourites(article)}>
              <Sparkle />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(NewsCard);