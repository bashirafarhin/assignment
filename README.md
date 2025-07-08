# 📰 NewsPulse - A Modern News Aggregator App

A modern, responsive News Aggregator web application built using **Next.js**, **Redux Toolkit**, and **Tailwind CSS**. This app fetches real-time news from the [News API](https://newsapi.org/) and supports features like category filtering, keyword search with debounce, pagination, Google authentication, protected routes (both frontend and backend), and dynamic theming.

## 🔗 Demo

📽️ [Watch the demo video](https://your-demo-link.com)

## 🚀 Features

- 🌍 Fetch top headlines by country, category, or keyword
- 🔍 Debounced keyword search
- 🧭 Pagination with dynamic page count
- 🌗 Dark/light theme toggle
- 🔐 Google authentication using NextAuth.js
- 🚫 Middleware protection for routes and APIs
- 🖼️ User avatar with fallback (initials)
- ✅ Toast notifications for auth and errors
- 📱 Responsive layout with `auto-fit` grid for cards

---

## 🛠️ Tech Stack

- **Frontend:** Next.js App Router, React, Tailwind CSS
- **State Management:** Redux Toolkit + Redux Thunk
- **Authentication:** NextAuth.js (Google OAuth)
- **API:** News API (`/v2/top-headlines`)
- **UI/UX:** Framer Motion, Lucide Icons, Headless UI (dropdowns)

---

## Env

```
NEXTAUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_key
```