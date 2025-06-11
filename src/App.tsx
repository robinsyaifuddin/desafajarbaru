
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminProvider } from "@/contexts/AdminContext";
import { AuthProvider } from "@/contexts/AuthContext";
import AdminLayout from "@/components/admin/AdminLayout";
import Index from "./pages/Index";
import Infographics from "./pages/Infographics";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Profile from "./pages/Profile";
import VillageMap from "./pages/VillageMap";
import Login from "./pages/Login";
import DocumentRequest from "./pages/DocumentRequest";
import Budget from "./pages/Budget";
import RWDetail from "./pages/RWDetail";
import Gallery from "./pages/Gallery";
import IDM from "./pages/IDM";
import PPID from "./pages/PPID";
import AdministrasiPenduduk from "./pages/AdministrasiPenduduk";
import APBDesa from "./pages/APBDesa";
import Belanja from "./pages/Belanja";
import Bansos from "./pages/Bansos";
import NotFound from "./pages/NotFound";

// Admin pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminNews from "./pages/admin/AdminNews";
import AdminResidents from "./pages/admin/AdminResidents";
import AdminGallery from "./pages/admin/AdminGallery";
import AdminStatistics from "./pages/admin/AdminStatistics";
import AdminMap from "./pages/admin/AdminMap";
import AdminFinance from "./pages/admin/AdminFinance";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminSettings from "./pages/admin/AdminSettings";

// Statistics pages
import AgeRange from "./pages/statistics/AgeRange";
import AgeCategory from "./pages/statistics/AgeCategory";
import Education from "./pages/statistics/Education";
import Occupation from "./pages/statistics/Occupation";
import MaritalStatus from "./pages/statistics/MaritalStatus";
import Religion from "./pages/statistics/Religion";
import Gender from "./pages/statistics/Gender";
import FamilyRelation from "./pages/statistics/FamilyRelation";
import ResidentStatus from "./pages/statistics/ResidentStatus";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AdminProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/infographics" element={<Infographics />} />
              
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
              
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/services/idm" element={<IDM />} />
              <Route path="/services/ppid" element={<PPID />} />
              <Route path="/services/administrasi-penduduk" element={<AdministrasiPenduduk />} />
              <Route path="/services/apb-desa" element={<APBDesa />} />
              <Route path="/services/belanja" element={<Belanja />} />
              <Route path="/services/bansos" element={<Bansos />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/village-map" element={<VillageMap />} />
              <Route path="/login" element={<Login />} />
              <Route path="/document-request" element={<DocumentRequest />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/rw-detail/:rwId" element={<RWDetail />} />
              <Route path="/gallery" element={<Gallery />} />

              {/* Admin routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
              <Route path="/admin/news" element={<AdminLayout><AdminNews /></AdminLayout>} />
              <Route path="/admin/residents" element={<AdminLayout><AdminResidents /></AdminLayout>} />
              <Route path="/admin/gallery" element={<AdminLayout><AdminGallery /></AdminLayout>} />
              <Route path="/admin/statistics" element={<AdminLayout><AdminStatistics /></AdminLayout>} />
              <Route path="/admin/map" element={<AdminLayout><AdminMap /></AdminLayout>} />
              <Route path="/admin/finance" element={<AdminLayout><AdminFinance /></AdminLayout>} />
              <Route path="/admin/events" element={<AdminLayout><AdminEvents /></AdminLayout>} />
              <Route path="/admin/settings" element={<AdminLayout><AdminSettings /></AdminLayout>} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AdminProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
