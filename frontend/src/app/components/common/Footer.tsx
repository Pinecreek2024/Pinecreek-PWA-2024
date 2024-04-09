import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/sitemap">Sitemap</Link></li>
          </ul>
        </div>

        <div className={styles.contactInfo}>
          <h3>Contact Information</h3>
          <p>Bookings: 043 732 1101</p>
          <p>Email: bookings@pinecreek.co.za</p>
          <p>Location: A1 Farm, Holm Hill, Beacon Bay, East London, 5241</p>
        </div>

        <div className={styles.usefulLinks}>
          <h3>Useful Links</h3>
          <ul>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/cookies">Cookie Policy</Link></li>
            <li><Link href="/paia">PAIA Manual</Link></li>
            <li><Link href="/order">Order Now</Link></li>
            <li><Link href="/register">Create New Account</Link></li>
            <li><Link href="/login">Customer Login</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.copyRight}>
        <p>© {new Date().getFullYear()} Pinecreek Restaurant & Farmstall</p>
      </div>
    </footer>
  );
};

export default Footer;
