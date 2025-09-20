
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Image, 
  Settings, 
  BarChart3,
  MapPin,
  DollarSign,
  Calendar,
  Shield
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      href: '/admin/dashboard',
    },
    {
      title: 'Kelola Berita',
      icon: FileText,
      href: '/admin/news',
    },
    {
      title: 'Kelola Penduduk',
      icon: Users,
      href: '/admin/residents',
    },
    {
      title: 'Galeri',
      icon: Image,
      href: '/admin/gallery',
    },
    {
      title: 'Statistik',
      icon: BarChart3,
      href: '/admin/statistics',
    },
    {
      title: 'Kelola Statistik',
      icon: BarChart3,
      href: '/admin/statistics-management',
    },
    {
      title: 'Peta Desa',
      icon: MapPin,
      href: '/admin/map',
    },
    {
      title: 'Keuangan',
      icon: DollarSign,
      href: '/admin/finance',
    },
    {
      title: 'Event',
      icon: Calendar,
      href: '/admin/events',
    },
    {
      title: 'Pengaturan',
      icon: Settings,
      href: '/admin/settings',
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Shield className="text-white" size={20} />
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Admin CMS</h2>
            <p className="text-sm text-gray-600">Desa Fajar Baru</p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                    isActive
                      ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
