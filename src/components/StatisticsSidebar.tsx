
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { 
  Users, 
  Calendar,
  GraduationCap,
  Briefcase,
  Heart,
  MapPin,
  User,
  Home as HomeIcon,
  Activity,
  Droplets,
  Eye,
  Globe,
  TrendingUp,
  Gift,
  BarChart3
} from 'lucide-react';

const statisticMenus = [
  {
    title: 'Statistik Penduduk',
    items: [
      { title: 'Rentang Umur', url: '/infographics/age-range', icon: Calendar },
      { title: 'Kategori Umur', url: '/infographics/age-category', icon: Users },
      { title: 'Pendidikan Dalam KK', url: '/infographics/education', icon: GraduationCap },
      { title: 'Pekerjaan', url: '/infographics/occupation', icon: Briefcase },
      { title: 'Status Perkawinan', url: '/infographics/marital-status', icon: Heart },
      { title: 'Agama', url: '/infographics/religion', icon: Globe },
      { title: 'Jenis Kelamin', url: '/infographics/gender', icon: User },
      { title: 'Hubungan Dalam KK', url: '/infographics/family-relation', icon: HomeIcon },
      { title: 'Status Penduduk', url: '/infographics/resident-status', icon: MapPin },
      { title: 'Golongan Darah', url: '/infographics/blood-type', icon: Droplets },
      { title: 'Penyandang Cacat', url: '/infographics/disability', icon: Eye },
      { title: 'Suku / Etnis', url: '/infographics/ethnicity', icon: Activity },
    ]
  },
  {
    title: 'Statistik Keluarga',
    items: [
      { title: 'Kelas Sosial', url: '/infographics/social-class', icon: TrendingUp },
    ]
  },
  {
    title: 'Statistik Bantuan',
    items: [
      { title: 'Penerima Bantuan Penduduk', url: '/infographics/individual-aid', icon: Gift },
      { title: 'Penerima Bantuan Keluarga', url: '/infographics/family-aid', icon: HomeIcon },
    ]
  },
  {
    title: 'Statistik Lainnya',
    items: [
      { title: 'Populasi Per Wilayah', url: '/infographics/population-per-area', icon: BarChart3 },
    ]
  }
];

export function StatisticsSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Sidebar className="w-64 sm:w-72 lg:w-80 border-r bg-white/95 backdrop-blur-sm fixed lg:relative top-20 lg:top-0 h-[calc(100vh-5rem)] lg:h-auto z-30">
      <SidebarContent className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 h-full">
        <div className="p-3 sm:p-4 border-b bg-white sticky top-0 z-10">
          <Link 
            to="/infographics" 
            className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg font-semibold text-gray-800 hover:text-emerald-600 transition-colors"
          >
            <BarChart3 size={18} className="sm:size-5" />
            <span className="truncate">Kembali ke Infografis</span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {statisticMenus.map((group, index) => (
            <SidebarGroup key={index} className="px-2 sm:px-3">
              <SidebarGroupLabel className="text-xs sm:text-sm font-semibold text-gray-700 px-2 py-2 mb-1 sticky top-0 bg-white/90 backdrop-blur-sm z-5">
                {group.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = currentPath === item.url;
                    
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link
                            to={item.url}
                            className={cn(
                              "flex items-center space-x-3 px-3 py-2.5 text-xs sm:text-sm rounded-lg transition-all duration-200 group hover:scale-[1.02]",
                              isActive 
                                ? "bg-emerald-100 text-emerald-700 font-medium shadow-sm border border-emerald-200" 
                                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            )}
                          >
                            <IconComponent 
                              size={14} 
                              className={cn(
                                "flex-shrink-0 transition-colors",
                                isActive ? "text-emerald-600" : "text-gray-500 group-hover:text-gray-700"
                              )}
                            />
                            <span className="truncate leading-tight">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </div>
        
        <div className="p-3 sm:p-4 border-t bg-gray-50 sticky bottom-0">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Data statistik terkini Desa Fajar Baru Way Kandis
          </p>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
