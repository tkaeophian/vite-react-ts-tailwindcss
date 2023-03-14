import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    saveMissing: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
