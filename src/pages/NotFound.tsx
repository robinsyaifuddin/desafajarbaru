
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import BackNavigation from "@/components/BackNavigation";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <BackNavigation title="Halaman Tidak Ditemukan" showHomeButton={false} />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle size={40} className="text-red-500" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
            Silakan kembali ke beranda atau gunakan navigasi untuk menjelajahi situs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Kembali
            </Button>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-gradient-village hover:opacity-90 w-full sm:w-auto"
            >
              <Home size={16} className="mr-2" />
              Ke Beranda
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
