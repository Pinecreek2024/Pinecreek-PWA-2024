import React, { ReactNode } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import styles from './PageLayout.module.css';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
