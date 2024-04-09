// frontend/src/app/components/layout/SectionLayout.tsx
import React, { ReactNode } from 'react';
import styles from './SectionLayout.module.css'; // Ensure the corresponding CSS module exists

interface SectionLayoutProps {
  title?: string;
  description?: string;
  children: ReactNode; // ReactNode allows anything that React can render
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ title, description, children }) => {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
