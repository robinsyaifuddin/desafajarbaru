
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

interface BackNavigationProps {
  title?: string;
  showHomeButton?: boolean;
  customBackAction?: () => void;
}

const BackNavigation: React.FC<BackNavigationProps> = ({ 
  title, 
  showHomeButton = true,
  customBackAction 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (customBackAction) {
      customBackAction();
    } else {
      navigate(-1);
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  // Don't show on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleBack}
              className="hover:bg-gray-100 p-2 h-auto"
            >
              <ArrowLeft size={20} className="text-gray-600" />
              <span className="ml-2 text-gray-700 hidden sm:inline">Kembali</span>
            </Button>
            
            {title && (
              <h1 className="text-lg md:text-xl font-semibold text-gray-800 truncate">
                {title}
              </h1>
            )}
          </div>

          {showHomeButton && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleHome}
              className="hover:bg-gray-50 p-2 h-auto"
            >
              <Home size={18} className="text-gray-600" />
              <span className="ml-2 text-gray-700 hidden sm:inline">Beranda</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackNavigation;
