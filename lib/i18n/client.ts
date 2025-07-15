"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationHI from "./locales/hi/translation.json";

i18n
  .use(LanguageDetector) // Detect language from browser
  .use(initReactI18next) // React integration
  .init({
    fallbackLng: "en",
    // debug: process.env.NODE_ENV === "development",
    debug: false,
    resources: {
      en: { translation: translationEN },
      hi: { translation: translationHI },
    },
  });

export default i18n;