import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector) // to detect our anguage of browser
  .use(initReactI18next) // to inform i18 that its a react app
  .init({
    debug: process.env.NEXT_ENV==="development",
    fallbackLng: "en",
    lng: "en",
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
          favTagLine: "We got your favourites",
          newsTagLine: "We got every information for you",
          noFav: "No favourite yet",
          loadMore: "Load More",
          loadingMore: "Loading",
          moviesTagLine: "We got every Movie for you",
          categories: "Categories",
          Business: "Business",
          Entertainment: "Entertainment",
          General: "General",
          Health: "Health",
          Science: "Science",
          Technology: "Technology",
          Sports: "Sports",
          footer: {
            follow: "Follow us",
            legal: "Legal",
            privacy: "Privacy Policy",
            terms: "Terms & Conditions",
            newsletter: "Newsletter",
            emailPlaceholder: "Your email",
            rights: "All Rights Reserved.",
            popular: "Popular",
            topRated: "Top rated",
            upcoming: "Upcoming",
            nowPlaying: "Now playing",
          },
          main: {
            welcome: "Welcome",
            description: "Click on the above buttons to reach your destination",
            line1: "Stay informed.",
            line2: "Stay inspired.",
            line3: "Get the latest updates.",
            quote: "Information is the most powerful tool of our time. What you know shapes what you do. Stay curious. Stay aware. Stay ahead."
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
          favTagLine: "हमने आपके पसंदीदा सहेज लिए हैं",
          noFav: "अभी तक कोई पसंदीदा नहीं है।",
          newsTagLine: "हम आपके लिए हर जानकारी लेकर आए हैं।",
          loadMore: "और लोड करें",
          loadingMore: "और लोड हो रहा है...",
          popular: "लोकप्रिय",
          topRated: "सर्वश्रेष्ठ रेटेड",
          upcoming: "आगामी",
          nowPlaying: "अब चल रही हैं",
          moviesTagLine: "हमने आपके लिए सब कुछ तैयार किया है",
          categories: "श्रेणियाँ",
          Business: "व्यवसाय",
          Entertainment: "मनोरंजन",
          General: "सामान्य",
          Health: "स्वास्थ्य",
          Science: "विज्ञान",
          Technology: "प्रौद्योगिकी",
          Sports: "खेल",
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
            line1: "सूचित रहें।",
            line2: "प्रेरित रहें।",
            line3: "नवीनतम अपडेट प्राप्त करें।",
            quote: "जानकारी हमारे समय का सबसे शक्तिशाली उपकरण है। आप क्या जानते हैं, वही तय करता है आप क्या करते हैं। जिज्ञासु रहें। सचेत रहें। आगे बढ़ते रहें।"
          },
        },
      },
    },
  });

export default i18n;