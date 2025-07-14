// // "use client";

// // import { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { RootState, AppDispatch } from "@/Redux/store";
// // import {
// //   incrementPage,
// // } from "@/Redux/slices/movies";
// // import { fetchMovies } from "@/Redux/reducers/movies";
// // import MovieCard from "@/components/MovieCard";
// // import Loader from "@/components/ui/Loader";
// // import Button from "@/components/ui/Button";
// // import toast from "react-hot-toast";
// // import { useTranslation } from "react-i18next";

// // const MovieList = () => {
// //   const { t } = useTranslation();
// //   const dispatch = useDispatch<AppDispatch>();
// //   const { data, loading, error, endpoint, page } = useSelector(
// //     (state: RootState) => state.movies
// //   );

// //   // Initial fetch
// //   useEffect(() => {
// //     dispatch(fetchMovies({ endpoint, page }));
// //   }, [dispatch, endpoint, page]);

// //   // Show toast on error
// //   useEffect(() => {
// //     if (error) toast.error(error);
// //   }, [error]);

// //   if (loading && page === 1) return <Loader />;

// //   // Category change handler

// //   // Load more handler
// //   const handleLoadMore = () => {
// //     dispatch(incrementPage());
// //   };

// //   return (
// //     <>
// //       {/* Movie Grid */}
// //       <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 my-[3rem] px-4">
// //         {data.map((movie) => (
// //           <MovieCard key={movie.id} movie={movie} />
// //         ))}
// //       </div>

// //       {/* Load More */}
// //       <div className="flex justify-center my-6">
// //         <Button onClick={handleLoadMore} disabled={loading}>
// //           {loading ? `${t("loadingMore")}...` : t("loadMore")}
// //         </Button>
// //       </div>
// //     </>
// //   );
// // };

// // export default MovieList;
// "use client";

// import { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "@/Redux/store";
// import { incrementPage } from "@/Redux/slices/movies";
// import { fetchMovies } from "@/Redux/reducers/movies";
// import MovieCard from "@/components/MovieCard";
// import Loader from "@/components/ui/Loader";
// import toast from "react-hot-toast";
// import { useTranslation } from "react-i18next";

// const MovieList = () => {
//   const { t } = useTranslation();
//   const dispatch = useDispatch<AppDispatch>();
//   const observerRef = useRef<HTMLDivElement | null>(null);

//   const { data, loading, error, endpoint, page } = useSelector(
//     (state: RootState) => state.movies
//   );

//   // Fetch data
//   useEffect(() => {
//     dispatch(fetchMovies({ endpoint, page }));
//   }, [dispatch, endpoint, page]);

//   // Show toast on error
//   useEffect(() => {
//     if (error) toast.error(error);
//   }, [error]);

//   // Infinite Scroll Logic
//   // useEffect(() => {
//   //   if (loading) return;

//   //   const observer = new IntersectionObserver(
//   //     (entries) => {
//   //       if (entries[0].isIntersecting) {
//   //         dispatch(incrementPage());
//   //       }
//   //     },
//   //     {
//   //       root: null,
//   //       rootMargin: "0px",
//   //       threshold: 1.0,
//   //     }
//   //   );

//   //   if (observerRef.current) {
//   //     observer.observe(observerRef.current);
//   //   }

//   //   return () => {
//   //     const currentRef = observerRef.current;
//   //     if (currentRef) observer.observe(currentRef);
//   //     return () => {
//   //       if (currentRef) observer.unobserve(currentRef);
//   //     };
//   //   };
//   // }, [loading, dispatch]);
//   useEffect(() => {
//   if (loading) return;

//   const observer = new IntersectionObserver(
//     (entries) => {
//       if (entries[0].isIntersecting) {
//         dispatch(incrementPage());
//       }
//     },
//     {
//       root: null,
//       rootMargin: "0px",
//       threshold: 1.0,
//     }
//   );

//   const currentRef = observerRef.current;
//   console.log("current ref", currentRef);
//   if (currentRef) {
//     observer.observe(currentRef);
//   }

//   return () => {
//     if (currentRef) observer.unobserve(currentRef);
//   };
// }, [loading, dispatch]);


//   if (loading && page === 1) return <Loader />;

//   return (
//     <>
//       {/* Movie Grid */}
//       <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 my-[3rem] px-4">
//         {data.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>

//       {/* Infinite Scroll Trigger */}
//       <div ref={observerRef} className="h-12 flex justify-center items-center">
//         {loading && <Loader />}
//       </div>
//     </>
//   );
// };

// export default MovieList;
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/Redux/store";
import { incrementPage } from "@/Redux/slices/movies";
import { fetchMovies } from "@/Redux/reducers/movies";
import MovieCard from "@/components/MovieCard";
import Loader from "@/components/ui/Loader";
import toast from "react-hot-toast";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

const MovieList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading, error, endpoint, page } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies({ endpoint, page }));
  }, [dispatch, endpoint, page]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  const observerRef = useInfiniteScroll({
    loading,
    onLoadMore: () => dispatch(incrementPage()),
  });

  if (loading && page === 1) return <Loader />;

  return (
    <>
      <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 my-[3rem] px-4">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div ref={observerRef} className="h-12 flex justify-center items-center">
        {loading && <Loader />}
      </div>
    </>
  );
};

export default MovieList;