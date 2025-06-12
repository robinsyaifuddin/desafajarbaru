
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Users, 
  UserCheck, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  Home,
  MoreVertical,
  Menu
} from 'lucide-react';

const StatisticsSidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const statisticsItems = [
    {
      title: 'Jenis Kelamin',
      path: '/infographics/gender',
      icon: Users,
      description: 'Data berdasarkan jenis kelamin'
    },
    {
      title: 'Rentang Usia',
      path: '/infographics/age-range',
      icon: Calendar,
      description: 'Distribusi usia penduduk'
    },
    {
      title: 'Kategori Usia',
      path: '/infographics/age-category',
      icon: UserCheck,
      description: 'Pengelompokan kategori usia'
    },
    {
      title: 'Status Perkawinan',
      path: '/infographics/marital-status',
      icon: Heart,
      description: 'Data status perkawinan'
    },
    {
      title: 'Pendidikan',
      path: '/infographics/education',
      icon: GraduationCap,
      description: 'Tingkat pendidikan penduduk'
    },
    {
      title: 'Pekerjaan',
      path: '/infographics/occupation',
      icon: Briefcase,
      description: 'Data pekerjaan penduduk'
    },
    {
      title: 'Agama',
      path: '/infographics/religion',
      icon: Home,
      description: 'Distribusi agama penduduk'
    },
    {
      title: 'Status Penduduk',
      path: '/infographics/resident-status',
      icon: UserCheck,
      description: 'Status kependudukan'
    },
    {
      title: 'Hubungan Keluarga',
      path: '/infographics/family-relation',
      icon: Users,
      description: 'Status dalam keluarga'
    }
  ];

  const isActivePath = (path: string) => location.pathname === path;

  const MobileDropdownMenu = () => (
    <div className="md:hidden fixed top-16 right-4 z-50">
      <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/95 backdrop-blur-sm border shadow-lg"
          >
            <MoreVertical size={18} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-64 bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-2xl p-2 mt-2 max-h-96 overflow-y-auto"
        >
          {statisticsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <DropdownMenuItem key={item.path} asChild>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 text-sm rounded-xl transition-all duration-300 group cursor-pointer ${
                    isActivePath(item.path)
                      ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border-l-4 border-emerald-500'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 hover:text-emerald-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <IconComponent 
                    size={16} 
                    className={`group-hover:scale-110 transition-transform duration-300 ${
                      isActivePath(item.path) ? 'text-emerald-600' : ''
                    }`} 
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{item.title}</p>
                    <p className="text-xs opacity-75 truncate">{item.description}</p>
                  </div>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  return (
    <>
      {/* Mobile Three-dot Menu */}
      <MobileDropdownMenu />

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-80 min-h-screen bg-gray-50 border-r border-gray-200 pt-20">
        <div className="sticky top-20 p-4 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <Card className="p-6 bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Statistik Penduduk</h3>
            <p className="text-sm text-gray-600">
              Jelajahi data demografi dan statistik kependudukan Desa Fajar Baru
            </p>
          </Card>

          <div className="space-y-2">
            {statisticsItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = isActivePath(item.path);
              
              return (
                <Link key={item.path} to={item.path}>
                  <Card className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-md group ${
                    isActive 
                      ? 'bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200 shadow-sm' 
                      : 'hover:bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg transition-colors duration-300 ${
                        isActive 
                          ? 'bg-emerald-100 text-emerald-600' 
                          : 'bg-gray-100 text-gray-600 group-hover:bg-emerald-100 group-hover:text-emerald-600'
                      }`}>
                        <IconComponent size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-semibold transition-colors duration-300 ${
                          isActive ? 'text-emerald-800' : 'text-gray-800 group-hover:text-emerald-800'
                        }`}>
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                      {isActive && (
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                      )}
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Active Tab Indicator */}
      <div className="md:hidden fixed top-16 left-4 z-40">
        <Card className="px-4 py-2 bg-white/95 backdrop-blur-sm shadow-lg">
          {statisticsItems.map((item) => {
            if (isActivePath(item.path)) {
              const IconComponent = item.icon;
              return (
                <div key={item.path} className="flex items-center space-x-2">
                  <IconComponent size={16} className="text-emerald-600" />
                  <span className="text-sm font-medium text-gray-800">{item.title}</span>
                </div>
              );
            }
            return null;
          })}
        </Card>
      </div>
    </>
  );
};

export default StatisticsSidebar;
