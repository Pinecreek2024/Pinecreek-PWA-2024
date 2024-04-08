// frontend/src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { UserProvider } from '@/context/UserContext'; // Ensure this path is correct
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
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default MyApp;
