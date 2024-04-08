// YourProjectDirectory/frontend/src/react-i18next.d.ts
import 'react-i18next';
import en from './public/locales/en/translation.json';
import af from './public/locales/af/translation.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      en: typeof en;
      af: typeof af;
    };
  }
}
