import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector) // to detect our anguage of browser
  .use(initReactI18next) // to inform i18 that its a react app
  .init({
    debug: true, // make this false in production
    lng: "hi",
    resources: {
      en: {
        translation: {
          logo: "LOGO",
          news: "News",
          movies: "Movies",
          favourites: "Favourites",
          signin: "Sign in",
          trendingNews: "Trending News",
          trendingMovies: "Trending Movies",
          readMore: "Read More",
          browseMore: "Browse more",
          footer: {
            follow: "Follow us",
            legal: "Legal",
            privacy: "Privacy Policy",
            terms: "Terms & Conditions",
            newsletter: "Newsletter",
            emailPlaceholder: "Your email",
            rights: "All Rights Reserved.",
          },
          main: {
            welcome: "Welcome",
            description: "Click on the above buttons to reach your destination",
          },
        },
      },
      hi: {
        translation: {
          logo: "लोगो",
          news: "समाचार",
          movies: "फ़िल्में",
          favourites: "पसंदीदा",
          signin: "साइन इन",
          trendingNews: "प्रचलित समाचार",
          trendingMovies: "प्रचलित फ़िल्में",
          readMore: "और पढ़ें",
          browseMore: "और ब्राउज़ करें",
          footer: {
            follow: "हमसे जुड़ें",
            legal: "कानूनी",
            privacy: "गोपनीयता नीति",
            terms: "नियम और शर्तें",
            newsletter: "समाचार पत्र",
            emailPlaceholder: "अपना ईमेल दर्ज करें",
            rights: "सभी अधिकार सुरक्षित।",
          },
          main: {
            welcome: "स्वागत है",
            description:
              "गंतव्य पर पहुंचने के लिए ऊपर दिए गए बटन पर क्लिक करें",
          },
        },
      },
    },
  });

export default i18n;