// frontend/src/pages/404.tsx
import React from 'react';
import Link from 'next/link';
import styles from './404.module.css'; // Make sure to create this CSS module

const Custom404: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
      <Link href="/">
        <a className={styles.homeLink}>Go to Home</a>
      </Link>
    </div>
  );
};

export default Custom404;
