// frontend/src/pages/index.tsx
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import MenuSection from '@/components/sections/MenuSection';
import EventsSection from '@/components/sections/EventsSection';
import FarmstallSection from '@/components/sections/FarmstallSection';
import RetailGoodsSection from '@/components/sections/RetailGoodsSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import SpecialOffersSection from '@/components/sections/SpecialOffersSection';

const HomePage: React.FC = () => {
  return (
    <PageLayout title="Welcome to Pinecreek Restaurant & Farmstall" description="Discover our menu, events, and more">
      <MenuSection />
      <EventsSection />
      <FarmstallSection />
      <RetailGoodsSection />
      <ReviewsSection />
      <SpecialOffersSection />
      {/* Include additional sections or components as needed */}
    </PageLayout>
  );
};

export default HomePage;
