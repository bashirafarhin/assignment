import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n.
use(LanguageDetector) // to detect our anguage of browser
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
                signin: "Sign in"
                
            }
        },
        hi: {
            translation: {
                logo: "लोगो",
                news: "समाचार",
                movies: "फ़िल्में",
                favourites: "पसंदीदा",
                signin: "साइन इन"
            }
        }
    }
})

export default i18n;