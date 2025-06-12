import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import News from '@/pages/News';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import Budget from '@/pages/Budget';
import Infographics from '@/pages/Infographics';
import Events from '@/pages/Events';
import NotFound from '@/pages/NotFound';
import AdminLogin from '@/pages/admin/AdminLogin';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminNews from '@/pages/admin/AdminNews';
import AdminResidents from '@/pages/admin/AdminResidents';
import AdminGallery from '@/pages/admin/AdminGallery';
import AdminStatistics from '@/pages/admin/AdminStatistics';
import AdminMap from '@/pages/admin/AdminMap';
import AdminFinance from '@/pages/admin/AdminFinance';
import AdminEvents from '@/pages/admin/AdminEvents';
import AdminSettings from '@/pages/admin/AdminSettings';
import AdminLayout from '@/components/admin/AdminLayout';
import AgeRange from '@/pages/statistics/AgeRange';
import AgeCategory from '@/pages/statistics/AgeCategory';
import Education from '@/pages/statistics/Education';
import Occupation from '@/pages/statistics/Occupation';
import MaritalStatus from '@/pages/statistics/MaritalStatus';
import Religion from '@/pages/statistics/Religion';
import Gender from '@/pages/statistics/Gender';
import FamilyRelation from '@/pages/statistics/FamilyRelation';
import ResidentStatus from '@/pages/statistics/ResidentStatus';
import { AdminProvider } from '@/contexts/AdminContext';
import BloodType from '@/pages/statistics/BloodType';
import Disability from '@/pages/statistics/Disability';
import Ethnicity from '@/pages/statistics/Ethnicity';
import SocialClass from '@/pages/statistics/SocialClass';
import IndividualAid from '@/pages/statistics/IndividualAid';
import FamilyAid from '@/pages/statistics/FamilyAid';
import PopulationPerArea from '@/pages/statistics/PopulationPerArea';
import AdminStatisticsManagement from '@/pages/admin/AdminStatisticsManagement';

function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/infographics" element={<Infographics />} />
          <Route path="/events" element={<Events />} />
          
          {/* Statistics routes */}
          <Route path="/infographics/age-range" element={<AgeRange />} />
          <Route path="/infographics/age-category" element={<AgeCategory />} />
          <Route path="/infographics/education" element={<Education />} />
          <Route path="/infographics/occupation" element={<Occupation />} />
          <Route path="/infographics/marital-status" element={<MaritalStatus />} />
          <Route path="/infographics/religion" element={<Religion />} />
          <Route path="/infographics/gender" element={<Gender />} />
          <Route path="/infographics/family-relation" element={<FamilyRelation />} />
          <Route path="/infographics/resident-status" element={<ResidentStatus />} />
          <Route path="/infographics/blood-type" element={<BloodType />} />
          <Route path="/infographics/disability" element={<Disability />} />
          <Route path="/infographics/ethnicity" element={<Ethnicity />} />
          <Route path="/infographics/social-class" element={<SocialClass />} />
          <Route path="/infographics/individual-aid" element={<IndividualAid />} />
          <Route path="/infographics/family-aid" element={<FamilyAid />} />
          <Route path="/infographics/population-per-area" element={<PopulationPerArea />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
          <Route path="/admin/news" element={<AdminLayout><AdminNews /></AdminLayout>} />
          <Route path="/admin/residents" element={<AdminLayout><AdminResidents /></AdminLayout>} />
          <Route path="/admin/gallery" element={<AdminLayout><AdminGallery /></AdminLayout>} />
          <Route path="/admin/statistics" element={<AdminLayout><AdminStatistics /></AdminLayout>} />
          <Route path="/admin/statistics-management" element={<AdminLayout><AdminStatisticsManagement /></AdminLayout>} />
          <Route path="/admin/map" element={<AdminLayout><AdminMap /></AdminLayout>} />
          <Route path="/admin/finance" element={<AdminLayout><AdminFinance /></AdminLayout>} />
          <Route path="/admin/events" element={<AdminLayout><AdminEvents /></AdminLayout>} />
          <Route path="/admin/settings" element={<AdminLayout><AdminSettings /></AdminLayout>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
}

export default App;
