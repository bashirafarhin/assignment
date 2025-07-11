"use client";

import React from "react";
import { Movie } from "@/types/movie";
import Button from "./ui/Button";
import Link from "next/link";
import { Sparkles, Sparkle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { RootState } from "@/Redux/store";
import toast from "react-hot-toast";
import { deleteFavourite } from "@/Redux/slices/favourites";
import { insertFavourite } from "@/Redux/slices/favourites";
import { useTranslation } from "react-i18next";

interface Props {
  movie: Movie;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard: React.FC<Props> = ({ movie }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const favouriteMovies = useSelector(
    (state: RootState) => state.favourites.movies
  );

  const handleDelete = (movie: Movie) => {
    dispatch(deleteFavourite({ type: "movies", title: movie.title }));
    toast.success("Removed from favourites");
  };

  const isArticleFavourite = (movie: Movie) => {
    return favouriteMovies.some((fav) => fav.title === movie.title);
  };

  const addToFavourites = (movie: Movie) => {
    dispatch(insertFavourite({ type: "movies", item: movie }));
    toast.success("added to favourites");
  };

  return (
    <div className="max-w-md mx-auto overflow-hidden rounded-xl border border-gray-300 dark:bg-bg shadow-md font-medium transition-all duration-300 ease-in-out hover:border-white/60 hover:shadow-lg hover:scale-105">
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

        {/* {footer && <div>{footer}</div>} */}
        <div className="w-fit flex mt-4 gap-3">
          <Button>
            <Link
              href={"#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:px-2 transition-all duration-300 ease-in-out"
            >
               {t("readMore")}
            </Link>
          </Button>
          {isArticleFavourite(movie) ? (
            <Button onClick={() => handleDelete(movie)}>
              <Sparkles className="text-yellow-900" />
            </Button>
          ) : (
            <Button onClick={() => addToFavourites(movie)}>
              <Sparkle />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieCard);