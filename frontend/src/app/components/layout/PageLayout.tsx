// frontend/src/app/components/layout/PageLayout.tsx
import React, { ReactNode } from 'react';
import Header from '@/components/common/Header'; // Adjust the import path as needed
import Footer from '@/components/common/Footer'; // Adjust the import path as needed
import { NextSeo } from 'next-seo';
import styles from './PageLayout.module.css'; // Ensure the corresponding CSS module exists

interface PageLayoutProps {
  title?: string;
  description?: string;
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title = 'Default Title', // Provide default title
  description = 'Default description', // Provide default description
  children,
  showHeader = true,
  showFooter = true
}) => {
  return (
    <div className={styles.pageLayout}>
      <NextSeo title={title} description={description} />

      {showHeader && <Header />}
      <main className={styles.mainContent}>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
