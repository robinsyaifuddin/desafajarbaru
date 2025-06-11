
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, FileText, MessageSquare, Vote, Bell, HelpCircle, LogOut, MoreVertical } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import CitizenProfile from './CitizenProfile';
import CitizenServices from './CitizenServices';
import CitizenComplaints from './CitizenComplaints';
import CitizenParticipation from './CitizenParticipation';
import CitizenNotifications from './CitizenNotifications';
import CitizenHelp from './CitizenHelp';

const CitizenDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const tabs = [
    { id: 'profile', label: 'Profil Saya', icon: User, component: CitizenProfile },
    { id: 'services', label: 'Layanan Publik', icon: FileText, component: CitizenServices },
    { id: 'complaints', label: 'Pengaduan & Aspirasi', icon: MessageSquare, component: CitizenComplaints },
    { id: 'participation', label: 'Partisipasi', icon: Vote, component: CitizenParticipation },
    { id: 'notifications', label: 'Notifikasi', icon: Bell, component: CitizenNotifications },
    { id: 'help', label: 'Bantuan/FAQ', icon: HelpCircle, component: CitizenHelp },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Card className="p-6 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Selamat Datang, {user?.name}
                </h1>
                <p className="text-emerald-100">
                  Portal Digital Desa Fajar Baru - Akses Layanan & Informasi
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-4 md:mt-0">
                {/* Mobile Menu - Titik 3 */}
                <div className="md:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white"
                      >
                        <MoreVertical size={18} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="end" 
                      className="w-56 bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-2xl p-2 mt-2"
                    >
                      {tabs.map((tab) => {
                        const IconComponent = tab.icon;
                        return (
                          <DropdownMenuItem
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 hover:text-emerald-700 rounded-xl transition-all duration-300 group cursor-pointer"
                          >
                            <IconComponent size={16} className="group-hover:scale-110 transition-transform duration-300" />
                            <span>{tab.label}</span>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  <LogOut size={16} />
                  <span>Keluar</span>
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Dashboard Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Desktop Tab Navigation */}
          <div className="hidden md:block">
            <TabsList className="grid grid-cols-6 gap-2 p-2 bg-white rounded-xl shadow-sm">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex items-center space-x-2 p-4 rounded-lg transition-all duration-300"
                  >
                    <IconComponent size={18} />
                    <span>{tab.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Active Tab Indicator for Mobile */}
          <div className="md:hidden">
            <Card className="p-4 bg-white shadow-sm">
              {tabs.map((tab) => {
                if (tab.id === activeTab) {
                  const IconComponent = tab.icon;
                  return (
                    <div key={tab.id} className="flex items-center space-x-3">
                      <IconComponent size={20} className="text-emerald-600" />
                      <h2 className="text-lg font-semibold text-gray-800">{tab.label}</h2>
                    </div>
                  );
                }
                return null;
              })}
            </Card>
          </div>

          {/* Tab Content */}
          {tabs.map((tab) => {
            const ComponentToRender = tab.component;
            return (
              <TabsContent key={tab.id} value={tab.id} className="mt-6">
                <ComponentToRender />
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default CitizenDashboard;
