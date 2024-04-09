// frontend/src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components'; // Import ThemeProvider
import theme from '@/styles/theme'; // Import your theme
import '../i18n'; // Assuming the i18n configuration is in the src directory
import '@/styles/globals.css'; // Import global styles

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Register the service worker for PWA capabilities
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/serviceWorker.js') // Ensure the path to your service worker file is correct
        .then(registration => console.log('Service Worker registered: ', registration))
        .catch(registrationError => console.log('Service Worker registration failed: ', registrationError));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}> {/* Wrap your components with ThemeProvider */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
