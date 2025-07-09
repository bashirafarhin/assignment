"use client"
import { NewsArticle } from "@/types/news";
import SmartImage from "./SmartImage";

interface Props {
  article: NewsArticle;
  footer?: React.ReactNode; // Optional custom footer (like action buttons)
}

const NewsCard: React.FC<Props> = ({ article, footer }) => {
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
          <p><strong>Author:</strong> {article.author || "Unknown"}</p>
          <p><strong>Source:</strong> {article.source?.name}</p>
          <p><strong>Published:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
        </div>

        <div>
          {footer && footer}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;