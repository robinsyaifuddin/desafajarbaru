
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
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
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
  Shield,
  ChevronRight,
  Home
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  const { state } = useSidebar();
  const currentPath = location.pathname;

  const mainMenuItems = [
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
  ];

  const dataMenuItems = [
    {
      title: 'Statistik',
      icon: BarChart3,
      href: '/admin/statistics',
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
  ];

  const systemMenuItems = [
    {
      title: 'Pengaturan',
      icon: Settings,
      href: '/admin/settings',
    },
  ];

  const isActive = (path: string) => currentPath === path;
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="text-white" size={20} />
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <h2 className="font-bold text-gray-800 text-sm lg:text-base truncate">Admin CMS</h2>
              <p className="text-xs text-gray-600 truncate">Desa Fajar Baru</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="py-4">
        {/* Main Menu */}
        <SidebarGroup>
          <SidebarGroupLabel className={cn("px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider", isCollapsed && "sr-only")}>
            Menu Utama
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg transition-all duration-200 group",
                        isActive(item.href)
                          ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      )}
                    >
                      <item.icon 
                        size={18} 
                        className={cn(
                          "flex-shrink-0",
                          isActive(item.href) ? "text-white" : "text-gray-500 group-hover:text-gray-700"
                        )} 
                      />
                      {!isCollapsed && (
                        <span className="font-medium text-sm truncate">{item.title}</span>
                      )}
                      {isActive(item.href) && !isCollapsed && (
                        <ChevronRight size={14} className="ml-auto text-white/80" />
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Data Management */}
        <SidebarGroup>
          <SidebarGroupLabel className={cn("px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider", isCollapsed && "sr-only")}>
            Kelola Data
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dataMenuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg transition-all duration-200 group",
                        isActive(item.href)
                          ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      )}
                    >
                      <item.icon 
                        size={18} 
                        className={cn(
                          "flex-shrink-0",
                          isActive(item.href) ? "text-white" : "text-gray-500 group-hover:text-gray-700"
                        )} 
                      />
                      {!isCollapsed && (
                        <span className="font-medium text-sm truncate">{item.title}</span>
                      )}
                      {isActive(item.href) && !isCollapsed && (
                        <ChevronRight size={14} className="ml-auto text-white/80" />
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* System Settings */}
        <SidebarGroup>
          <SidebarGroupLabel className={cn("px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider", isCollapsed && "sr-only")}>
            Sistem
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemMenuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg transition-all duration-200 group",
                        isActive(item.href)
                          ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      )}
                    >
                      <item.icon 
                        size={18} 
                        className={cn(
                          "flex-shrink-0",
                          isActive(item.href) ? "text-white" : "text-gray-500 group-hover:text-gray-700"
                        )} 
                      />
                      {!isCollapsed && (
                        <span className="font-medium text-sm truncate">{item.title}</span>
                      )}
                      {isActive(item.href) && !isCollapsed && (
                        <ChevronRight size={14} className="ml-auto text-white/80" />
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200">
        <SidebarMenuButton asChild tooltip="Kembali ke Website">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900 group"
          >
            <Home size={18} className="flex-shrink-0 text-gray-500 group-hover:text-gray-700" />
            {!isCollapsed && (
              <span className="font-medium text-sm">Kembali ke Website</span>
            )}
          </Link>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
