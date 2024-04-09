import React from 'react';
import Link from 'next/link';
import NavBar from './NavBar'; // Ensure this is the correct path
import styles from './Header.module.css'; // Make sure this CSS module exists

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Wrap the logo with Link and use passHref for routing */}
        <Link href="/" passHref>
          <img src="/images/logo.png" alt="Pinecreek Logo" style={{ cursor: 'pointer' }} />
        </Link>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
