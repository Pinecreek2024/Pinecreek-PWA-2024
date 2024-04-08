// YourProjectDirectory/frontend/src/app/hooks/useTranslation.ts
import { useState, useEffect } from 'react';

interface Translation {
  [key: string]: string;
}

const useTranslation = (language: string) => {
  const [translations, setTranslations] = useState<Translation>({});

  useEffect(() => {
    // Assuming translations are stored in public/locales
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${language}.json`);
        if (!response.ok) {
          throw new Error('Translation file not found');
        }
        const json = await response.json();
        setTranslations(json);
      } catch (error) {
        console.error('Failed to load translations', error);
      }
    };

    loadTranslations();
  }, [language]);

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return { t };
};

export default useTranslation;
