
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Index from '@/pages/Index';
import News from '@/pages/News';
import Gallery from '@/pages/Gallery';
import Budget from '@/pages/Budget';
import Infographics from '@/pages/Infographics';
import NotFound from '@/pages/NotFound';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import Events from '@/pages/Events';
import Profile from '@/pages/Profile';
import DocumentRequest from '@/pages/DocumentRequest';
import AdministrasiPenduduk from '@/pages/AdministrasiPenduduk';
import IDM from '@/pages/IDM';
import PPID from '@/pages/PPID';
import APBDesa from '@/pages/APBDesa';
import Belanja from '@/pages/Belanja';
import Bansos from '@/pages/Bansos';
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
import { AuthProvider } from '@/contexts/AuthContext';
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
    <AuthProvider>
      <AdminProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/infographics" element={<Infographics />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/document-request" element={<DocumentRequest />} />
            <Route path="/administrasi-penduduk" element={<AdministrasiPenduduk />} />
            
            {/* Service submenu routes */}
            <Route path="/services/idm" element={<IDM />} />
            <Route path="/services/ppid" element={<PPID />} />
            <Route path="/services/administrasi-penduduk" element={<AdministrasiPenduduk />} />
            <Route path="/services/apb-desa" element={<APBDesa />} />
            <Route path="/services/belanja" element={<Belanja />} />
            <Route path="/services/bansos" element={<Bansos />} />
            
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
    </AuthProvider>
  );
}

export default App;
