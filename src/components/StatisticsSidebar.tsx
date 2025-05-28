
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
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
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
    <Sidebar className="w-80 border-r bg-white/95 backdrop-blur-sm">
      <SidebarContent>
        <div className="p-4">
          <Link to="/infographics" className="flex items-center space-x-2 text-lg font-semibold text-gray-800 hover:text-emerald-600 transition-colors">
            <BarChart3 size={20} />
            <span>Kembali ke Infografis</span>
          </Link>
        </div>
        
        {statisticMenus.map((group, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel className="text-sm font-semibold text-gray-700 px-4 py-2">
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
                            "flex items-center space-x-3 px-4 py-2 text-sm rounded-lg transition-all duration-200",
                            isActive 
                              ? "bg-emerald-100 text-emerald-700 font-medium" 
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          )}
                        >
                          <IconComponent size={16} />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
