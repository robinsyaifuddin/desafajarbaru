
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Infographics from "./pages/Infographics";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import VillageMap from "./pages/VillageMap";
import Login from "./pages/Login";
import DocumentRequest from "./pages/DocumentRequest";
import Budget from "./pages/Budget";
import RWDetail from "./pages/RWDetail";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/infographics" element={<Infographics />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/village-map" element={<VillageMap />} />
          <Route path="/login" element={<Login />} />
          <Route path="/document-request" element={<DocumentRequest />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/rw-detail/:rwId" element={<RWDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
