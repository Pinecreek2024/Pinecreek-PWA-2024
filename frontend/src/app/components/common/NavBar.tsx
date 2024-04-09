import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css'; // Ensure this CSS file exists for styling

const NavBar: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string): string => {
    return router.pathname === path ? styles.activeNavItem : '';
  };

  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={`${styles.navItem} ${isActive('/menu')}`}>
          <Link href="/menu" passHref><span>Menu</span></Link>
        </li>
        <li className={`${styles.navItem} ${isActive('/events')}`}>
          <Link href="/events" passHref><span>Events</span></Link>
        </li>
        <li className={`${styles.navItem} ${isActive('/farmstall')}`}>
          <Link href="/farmstall" passHref><span>Farmstall</span></Link>
        </li>
        <li className={`${styles.navItem} ${isActive('/contact')}`}>
          <Link href="/contact" passHref><span>Contact</span></Link>
        </li>
        {/* Add additional navigation links as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
