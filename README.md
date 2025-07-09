# 📰 NewsPulse - A Modern News Aggregator App

A modern, responsive News Aggregator web application built using **Next.js**, **Redux Toolkit**, and **Tailwind CSS**. This app fetches real-time news from the [News API](https://newsapi.org/) and supports features like category filtering, keyword search with debounce, pagination, Google authentication, protected routes (both frontend and backend), theming, and persistent favourites.

---

## 🔗 Demo

📽️ [Watch the demo video](https://your-demo-link.com)

---

## 🚀 Features

- 🌍 Fetch top headlines by country, category, or keyword
- 🔍 Debounced keyword search (500ms delay)
- 🧭 Pagination with dynamic page count and Load More
- 🗂️ Category dropdown with localStorage fallback (`entertainment` default)
- 🌟 Add/remove to favourites (news + music)
- 💾 Favourites stored in Redux and synced with `localStorage`
- 🔐 Protected routes using NextAuth + Next.js Middleware
- 👤 Google login/logout with fallback avatar (initials if no image)
- 🌗 Dark/light theme toggle using `next-themes`
- 📤 Toast notifications (auth, errors, favourites)
- 📱 Responsive layout with `auto-fit` card grid

---

## 🛠️ Tech Stack

- **Frontend:** Next.js App Router, React, Tailwind CSS
- **State Management:** Redux Toolkit, Redux Thunk
- **Authentication:** NextAuth.js (Google OAuth)
- **API:** News API (`/v2/top-headlines`)
- **UX Libraries:** Lucide Icons, Framer Motion, Headless UI

---

## Env

```
NEXTAUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEWS_API_KEY=your_newsapi_key
```

## To run locally

1. Clone the repo
```
git clone https://github.com/bashirafarhin/assignment
cd assignment
```
2. Install dependencies
```
npm install
```

3. Add your .env.local file

4. Run the development server
```
npm run dev
```