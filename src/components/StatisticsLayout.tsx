
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
      
      <div className="pt-32">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <StatisticsSidebar />
            
            <main className="flex-1">
              {/* Mobile sidebar trigger */}
              <div className="lg:hidden p-4 border-b bg-white">
                <SidebarTrigger className="flex items-center space-x-2">
                  <Menu size={20} />
                  <span>Menu Statistik</span>
                </SidebarTrigger>
              </div>
              
              <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {title}
                  </h1>
                  {description && (
                    <p className="text-lg text-gray-600 max-w-3xl">
                      {description}
                    </p>
                  )}
                </div>
                
                {children}
              </div>
            </main>
          </div>
        </SidebarProvider>
      </div>
      
      <Footer />
    </div>
  );
}
