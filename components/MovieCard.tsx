"use client";

import React from "react";
import { Movie } from "@/types/movie";


interface Props {
  movie: Movie;
  footer?: React.ReactNode;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard: React.FC<Props> = ({ movie, footer }) => {
  return (
    <div className="max-w-md mx-auto overflow-hidden rounded-xl border border-gray-300 dark:bg-bg shadow-md font-medium">
      {/* Poster */}
      {movie.poster_path ? (
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-72 object-cover"
        />
      ) : (
        <div className="h-72 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold">{movie.title}</h2>
        <p className="text-sm text-text">{movie.overview}</p>

        <div className="text-xs text-gray-500 space-y-1 mt-2">
          <p>
            <strong>Original Title:</strong> {movie.original_title}
          </p>
          <p>
            <strong>Language:</strong> {movie.original_language.toUpperCase()}
          </p>
          <p>
            <strong>Release Date:</strong>{" "}
            {new Date(movie.release_date).toLocaleDateString()}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average} / 10 ({movie.vote_count} votes)
          </p>
          <p>
            <strong>Popularity:</strong> {movie.popularity.toFixed(1)}
          </p>
          <p>
            <strong>Adult:</strong> {movie.adult ? "Yes 🔞" : "No ✅"}
          </p>
        </div>

        {footer && <div>{footer}</div>}
      </div>
    </div>
  );
};

export default MovieCard;