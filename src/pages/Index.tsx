
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VillageProfile from '@/components/VillageProfile';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VillageProfile />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
