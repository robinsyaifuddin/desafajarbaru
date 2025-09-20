
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import LoadingSpinner from '@/components/LoadingSpinner';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { admin, isLoading } = useAdmin();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!admin?.isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AdminSidebar />
          
          <div className="flex-1 flex flex-col">
            <AdminHeader />
            <main className="flex-1 p-4 sm:p-6 overflow-auto">
              <div className="animate-fade-in">
                {children}
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default AdminLayout;
