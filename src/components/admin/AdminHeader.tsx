
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { LogOut, User, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const { admin, logout } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Panel Administrasi
        </h1>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell size={20} />
          </Button>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center">
              <User className="text-white" size={16} />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-800">{admin?.email}</p>
              <p className="text-xs text-gray-600">Administrator</p>
            </div>
          </div>

          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut size={16} />
            <span className="hidden md:inline">Keluar</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
