import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <Image src="/images/logo.png" alt="Pinecreek Logo" width={150} height={50} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/menu">Our Menu</Link></li>
          <li><Link href="/reservations">Reservations</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
