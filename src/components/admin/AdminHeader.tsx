
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { LogOut, User, Bell, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';

const AdminHeader = () => {
  const { admin, logout } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-40 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <SidebarTrigger className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200">
            <Menu size={18} className="text-gray-600" />
          </SidebarTrigger>
          
          <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
              Panel Administrasi
            </h1>
            <p className="hidden sm:block text-xs text-gray-600">Kelola konten website desa</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Bell size={18} />
          </Button>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center">
              <User className="text-white" size={16} />
            </div>
            <div className="hidden lg:block">
              <p className="text-sm font-medium text-gray-800 max-w-32 truncate">{admin?.email}</p>
              <p className="text-xs text-gray-600">Administrator</p>
            </div>
          </div>

          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
          >
            <LogOut size={14} className="sm:size-4" />
            <span className="hidden sm:inline">Keluar</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
