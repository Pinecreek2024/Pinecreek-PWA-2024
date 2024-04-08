import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // Not needed for React as it escapes by default
    },
    react: {
      useSuspense: true, // Depends on your project setup; adjust as needed
    },
  });

export default i18n;
