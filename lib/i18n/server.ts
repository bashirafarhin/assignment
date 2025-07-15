import "server-only";
import { createInstance } from "i18next";

import translationEN from "./locales/en/translation.json";
import translationHI from "./locales/hi/translation.json";

export async function serverTranslation(locale: string) {
  const i18nInstance = createInstance();
  await i18nInstance.init({
    lng: locale,
    fallbackLng: "en",
    resources: {
      en: { translation: translationEN },
      hi: { translation: translationHI },
    },
  });

  return {
    t: i18nInstance.t,
  };
}