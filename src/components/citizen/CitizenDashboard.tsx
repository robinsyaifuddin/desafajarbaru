
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
import { User, FileText, MessageSquare, Bell, Settings, Logout } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header with Profile */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={citizen.profileImage} />
                <AvatarFallback className="bg-gradient-village text-white text-lg">
                  {citizen.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Selamat datang, {citizen.name}
                </h1>
                <p className="text-gray-600">Portal Layanan Masyarakat Desa Fajar Baru</p>
              </div>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <User className="h-4 w-4" />
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
                  <Logout className="mr-2 h-4 w-4" />
                  Keluar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Dashboard Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profil
              </TabsTrigger>
              <TabsTrigger value="services" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Layanan
              </TabsTrigger>
              <TabsTrigger value="complaints" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Pengaduan
              </TabsTrigger>
              <TabsTrigger value="info" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Info Desa
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notifikasi
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <CitizenProfile />
            </TabsContent>

            <TabsContent value="services">
              <PublicServices />
            </TabsContent>

            <TabsContent value="complaints">
              <Complaints />
            </TabsContent>

            <TabsContent value="info">
              <VillageInfo />
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notifikasi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <p className="font-medium text-blue-800">Pengajuan Surat Keterangan Domisili</p>
                      <p className="text-sm text-blue-600">Status: Sedang diproses</p>
                      <p className="text-xs text-gray-500">2 jam yang lalu</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <p className="font-medium text-green-800">Pengumuman Desa</p>
                      <p className="text-sm text-green-600">Jadwal gotong royong minggu depan</p>
                      <p className="text-xs text-gray-500">1 hari yang lalu</p>
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
