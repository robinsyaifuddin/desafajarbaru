
import React from 'react';
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
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Increased padding top to prevent navbar overlap */}
      <div className="pt-20 lg:pt-24">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <StatisticsSidebar />
            
            <main className="flex-1 overflow-x-hidden">
              {/* Mobile sidebar trigger */}
              <div className="lg:hidden p-3 border-b bg-white sticky top-20 z-40 shadow-sm">
                <SidebarTrigger className="flex items-center space-x-2 text-sm">
                  <Menu size={18} />
                  <span>Menu Statistik</span>
                </SidebarTrigger>
              </div>
              
              <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
                <div className="mb-6 lg:mb-8">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-2 sm:mb-4 leading-tight">
                    {title}
                  </h1>
                  {description && (
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl leading-relaxed">
                      {description}
                    </p>
                  )}
                </div>
                
                <div className="w-full overflow-x-auto">
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
