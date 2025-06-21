
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CitizenDashboard from '@/components/citizen/CitizenDashboard';

const CitizenDashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20">
        <CitizenDashboard />
      </div>
      <Footer />
    </div>
  );
};

export default CitizenDashboardPage;
