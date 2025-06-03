
import React, { useEffect } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { StatisticsSidebar } from './StatisticsSidebar';
import Navigation from './Navigation';
import Footer from './Footer';
import { Menu } from 'lucide-react';

interface StatisticsLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export function StatisticsLayout({ children, title, description }: StatisticsLayoutProps) {
  // Scroll to top when layout mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 lg:pt-24">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <StatisticsSidebar />
            
            <main className="flex-1 relative">
              {/* Mobile sidebar trigger */}
              <div className="lg:hidden p-4 border-b bg-white/95 backdrop-blur-sm sticky top-20 z-20">
                <SidebarTrigger className="flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200 p-2 rounded-lg">
                  <Menu size={20} />
                  <span className="text-sm font-medium">Menu Statistik</span>
                </SidebarTrigger>
              </div>
              
              <div className="container mx-auto px-4 py-6 lg:py-8">
                <div className="mb-6 lg:mb-8">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 lg:mb-4">
                    {title}
                  </h1>
                  {description && (
                    <p className="text-base lg:text-lg text-gray-600 max-w-3xl leading-relaxed">
                      {description}
                    </p>
                  )}
                </div>
                
                <div className="min-h-[80vh]">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </div>
      
      <Footer />
    </div>
  );
}
