
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCitizen } from '@/contexts/CitizenContext';
import { User, FileText, MessageSquare, Bell, Settings, LogOut } from 'lucide-react';
import CitizenProfile from './CitizenProfile';
import PublicServices from './PublicServices';
import Complaints from './Complaints';
import VillageInfo from './VillageInfo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CitizenDashboard = () => {
  const { citizen, logout } = useCitizen();
  const [activeTab, setActiveTab] = useState('profile');

  if (!citizen) {
    return null;
  }

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header with Profile */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 bg-white rounded-xl p-6 shadow-lg animate-fade-in">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="h-20 w-20 ring-4 ring-blue-100">
                <AvatarImage src={citizen.profileImage} />
                <AvatarFallback className="bg-gradient-village text-white text-xl">
                  {citizen.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Selamat datang, {citizen.name}
                </h1>
                <p className="text-gray-600 text-lg">Portal Layanan Masyarakat Desa Fajar Baru</p>
                <div className="mt-2 text-sm text-gray-500">
                  NIK: {citizen.nik}
                </div>
              </div>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="mt-4 md:mt-0">
                  <Settings className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => setActiveTab('profile')}>
                  <User className="mr-2 h-4 w-4" />
                  Profil Saya
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Pengaturan
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Keluar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Dashboard Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="bg-white rounded-xl p-4 shadow-lg animate-fade-in">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-gray-100 p-2 rounded-lg">
                <TabsTrigger 
                  value="profile" 
                  className="flex flex-col md:flex-row items-center gap-2 p-3 text-xs md:text-sm transition-all duration-200 data-[state=active]:bg-gradient-village data-[state=active]:text-white"
                >
                  <User className="h-4 w-4" />
                  <span>Profil</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="services" 
                  className="flex flex-col md:flex-row items-center gap-2 p-3 text-xs md:text-sm transition-all duration-200 data-[state=active]:bg-gradient-village data-[state=active]:text-white"
                >
                  <FileText className="h-4 w-4" />
                  <span>Layanan</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="complaints" 
                  className="flex flex-col md:flex-row items-center gap-2 p-3 text-xs md:text-sm transition-all duration-200 data-[state=active]:bg-gradient-village data-[state=active]:text-white"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Pengaduan</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="info" 
                  className="flex flex-col md:flex-row items-center gap-2 p-3 text-xs md:text-sm transition-all duration-200 data-[state=active]:bg-gradient-village data-[state=active]:text-white"
                >
                  <Bell className="h-4 w-4" />
                  <span>Info Desa</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="notifications" 
                  className="flex flex-col md:flex-row items-center gap-2 p-3 text-xs md:text-sm transition-all duration-200 data-[state=active]:bg-gradient-village data-[state=active]:text-white"
                >
                  <Bell className="h-4 w-4" />
                  <span>Notifikasi</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="profile" className="animate-fade-in">
              <CitizenProfile />
            </TabsContent>

            <TabsContent value="services" className="animate-fade-in">
              <PublicServices />
            </TabsContent>

            <TabsContent value="complaints" className="animate-fade-in">
              <Complaints />
            </TabsContent>

            <TabsContent value="info" className="animate-fade-in">
              <VillageInfo />
            </TabsContent>

            <TabsContent value="notifications" className="animate-fade-in">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-village text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notifikasi
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                      <p className="font-medium text-blue-800">Pengajuan Surat Keterangan Domisili</p>
                      <p className="text-sm text-blue-600 mt-1">Status: Sedang diproses</p>
                      <p className="text-xs text-gray-500 mt-2">2 jam yang lalu</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400 hover:shadow-md transition-shadow">
                      <p className="font-medium text-green-800">Pengumuman Desa</p>
                      <p className="text-sm text-green-600 mt-1">Jadwal gotong royong minggu depan</p>
                      <p className="text-xs text-gray-500 mt-2">1 hari yang lalu</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 hover:shadow-md transition-shadow">
                      <p className="font-medium text-yellow-800">Reminder Pembayaran</p>
                      <p className="text-sm text-yellow-600 mt-1">Jangan lupa bayar PBB bulan ini</p>
                      <p className="text-xs text-gray-500 mt-2">3 hari yang lalu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CitizenDashboard;
