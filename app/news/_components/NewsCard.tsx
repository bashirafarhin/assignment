"use client";

import React, { useState } from "react";
import { NewsArticle } from "@/types/news";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import Button from "@/components/ui/Button";
import { Sparkle, Sparkles } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { insertFavourite } from "@/Redux/slices/favourites";
import toast from "react-hot-toast";

interface Props {
  article: NewsArticle;
}

const NewsCard: React.FC<Props> = ({ article }) => {
  const [ selected, setSelected ] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  
  const addToFavourites = (article: NewsArticle) => {
    dispatch(insertFavourite({ type: "news", item: article }));
    toast.success("added to favourites");
    setSelected(true)
  };

  return (
    <div className="dark:bg-bg border border-gray-300 rounded-xl overflow-hidden max-w-md mx-auto font-medium">
      {/* Image */}
      {article.urlToImage && (
        <SmartImage
          src={article.urlToImage}
          alt={article.title}
          width={500}
          height={300}
          className="rounded-md"
        />
      )}

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
              Read More
            </Link>
          </Button>
          <Button onClick={() => addToFavourites(article)}>
            { selected ? < Sparkles className="text-yellow-900"/> : <Sparkle /> }
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
