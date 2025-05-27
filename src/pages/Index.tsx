
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VillageProfile from '@/components/VillageProfile';
import ServicesSection from '@/components/ServicesSection';
import NewsSection from '@/components/NewsSection';
import TourismSection from '@/components/TourismSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VillageProfile />
      <ServicesSection />
      <NewsSection />
      <TourismSection />
      <Footer />
    </div>
  );
};

export default Index;
