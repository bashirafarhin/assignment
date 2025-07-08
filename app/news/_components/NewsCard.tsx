"use client";

import React from "react";
import { NewsArticle } from "@/types/news";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import Button from "@/components/ui/Button";

interface Props {
  article: NewsArticle;
}

const NewsCard: React.FC<Props> = ({ article }) => {
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
        <p className="text-sm text-text">
          {article.description}
        </p>

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
      </div>
    </div>
  );
};

export default NewsCard;
