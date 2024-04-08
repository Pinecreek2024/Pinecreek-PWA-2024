// src/pages/index.tsx
import React from 'react';
import Header from '../app/components/common/Header';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Pinecreek Restaurant & Farmstall</h1>
        {/* Page content */}
      </main>
    </div>
  );
};

export default HomePage;
