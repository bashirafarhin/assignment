# Personalized Content Dashboard - Assignment Documentation

## Overview

This project is a **Personalized Content Dashboard** built using **React**, **Next.js (App Router)**, **TypeScript**, **Redux Toolkit**, **Tailwind CSS**, **Framer Motion**, and **Axios**. The dashboard integrates multiple APIs (News API, TMDB API) to provide users with personalized news, movie recommendations, and more. The user experience is dynamic, interactive, and customizable.

---


## 🔗 Demo

* Live Demo

---

## ✅ Features Implemented

### 1. Personalized Content Feed

* **User Preferences**:

  * Categories like entertainment, sports, business are persisted in Redux/localStorage.
* **APIs Integrated**:

  * **News API**: Fetches top headlines with filters like `country`, `category`, `query`, `page`.
  * **TMDB API**: Fetches movies via endpoints like `popular`, `top_rated`, `search`, with pagination support.
* **Smart UI**:

  * NewsCard and MovieCard display title, image, author/source/overview, published date, and more.
  * Includes fallback images and domain whitelisting to prevent Next.js crashes.

### 2. Dashboard Layout

* **TopBar**:

  * Includes a debounced search bar to fetch filtered movies/news.
  * Category buttons (`Popular`, `Top Rated`, `Upcoming`, etc.) that dispatch endpoint change.
* **Trending Sections**:

  * `TrendingNews` and `TrendingMovies` show horizontally scrolling cards using `HorizontalScroller`.
* **Load More Pagination**:

  * For both movies and news using Redux `page` state.

* **Favourite Section**:
  * user can add their `favourties` for both news and movies.

### 3. Search

* Debounced input.
* Automatically dispatches Redux action on query change.

### 4. Advanced UI/UX

* **Dark Mode**:

  * Tailwind + CSS variables + localStorage toggle.
* **Framer Motion**:

  * Used for smooth transitions and marquee animations.

### 5. State Management

* **Redux Toolkit**:

  * Slices for `movies`, `news`, `trendingNews`, and more.
* **Async Logic**:

  * `createAsyncThunk` with axios for API integration.
* **Persistence**:

  * Settings like `dark mode` and `preferences` stored in localStorage.

### 6. Authentication

* Implemented user login/logout functionality using NextAuth.js.

* Supports Google authentication for user sign-in.


### 7. Optimization

* **SmartImage**:

  * Handles both Next.js `<Image>` and native `<img>` depending on domain whitelisting.
* **Debounced Search**:

  * `useDebounce` used to reduce API load during fast typing.

### 6. i18n (internationalization)

* Supports English and Hindi languages using react-i18next for seamless internationalization (i18n).

<!-- ---

## 🚧 Not Implemented (Due to Time)
* Real-time updates with WebSockets/SSE.
* Testing (Unit/E2E).
* Internationalization (i18n). -->

---

## 💡 Code Highlights

* `app/api/news/route.ts`: News API backend proxy.
* `app/api/movies/route.ts`: TMDB API proxy with support for `/movie/{endpoint}?page=X` and `/search/movie?query=abc`.
* `Redux/reducers/movies.ts`: Handles fetching movies via endpoint, page, and query.
* `components/MovieCard.tsx`: Movie card display.
* `components/TopBar.tsx`: Handles both category buttons and search.
* `utils/useDebounce.ts`: Custom debounce hook.

---

## 🔗 Project Setup

```bash
npm install
npm run dev
```

### Environment Variables

Create a `.env` file:

```

NEWS_API_KEY=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=your-secret-key
TMDB_API_KEY=
```
