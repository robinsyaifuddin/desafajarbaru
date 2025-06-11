
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, TrendingUp, Store, FileText, Megaphone } from 'lucide-react';

const VillageInfo = () => {
  const news = [
    {
      id: 1,
      title: 'Program Bantuan Pupuk Bersubsidi',
      excerpt: 'Pemerintah desa menyalurkan bantuan pupuk bersubsidi untuk petani',
      date: '2024-01-20',
      category: 'Pertanian'
    },
    {
      id: 2,
      title: 'Pembangunan Jembatan Baru',
      excerpt: 'Pembangunan jembatan penghubung antar RT akan dimulai bulan depan',
      date: '2024-01-18',
      category: 'Infrastruktur'
    }
  ];

  const announcements = [
    {
      id: 1,
      title: 'Jadwal Gotong Royong Bulanan',
      content: 'Gotong royong pembersihan lingkungan akan dilaksanakan setiap Minggu pertama di bulan ini',
      date: '2024-01-15',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Pendaftaran Bantuan Sosial',
      content: 'Dibuka pendaftaran bantuan sosial untuk keluarga kurang mampu hingga akhir bulan',
      date: '2024-01-12',
      priority: 'medium'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Pelatihan UMKM Digital',
      date: '2024-01-25',
      time: '09:00 - 12:00',
      location: 'Balai Desa',
      participants: 25,
      maxParticipants: 30
    },
    {
      id: 2,
      title: 'Lomba 17 Agustus',
      date: '2024-08-17',
      time: '08:00 - 16:00',
      location: 'Lapangan Desa',
      participants: 150,
      maxParticipants: 200
    }
  ];

  const umkm = [
    {
      name: 'Warung Makan Bu Sari',
      category: 'Kuliner',
      owner: 'Sari Rahayu',
      contact: '081234567890',
      address: 'RT 02/RW 03'
    },
    {
      name: 'Toko Sembako Berkah',
      category: 'Retail',
      owner: 'Ahmad Susanto',
      contact: '081234567891',
      address: 'RT 01/RW 02'
    }
  ];

  const budget = {
    totalBudget: 2500000000,
    used: 1800000000,
    categories: [
      { name: 'Belanja Pegawai', amount: 800000000, percentage: 32 },
      { name: 'Belanja Barang/Jasa', amount: 600000000, percentage: 24 },
      { name: 'Belanja Modal', amount: 400000000, percentage: 16 },
      { name: 'Bantuan Sosial', amount: 700000000, percentage: 28 }
    ]
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="news" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="news">Berita</TabsTrigger>
          <TabsTrigger value="announcements">Pengumuman</TabsTrigger>
          <TabsTrigger value="events">Agenda</TabsTrigger>
          <TabsTrigger value="umkm">UMKM</TabsTrigger>
          <TabsTrigger value="budget">Keuangan</TabsTrigger>
        </TabsList>

        <TabsContent value="news">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Berita Desa Terbaru
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {news.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{item.title}</h4>
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.excerpt}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(item.date).toLocaleDateString('id-ID')}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="announcements">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="h-5 w-5" />
                Pengumuman Desa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{item.title}</h4>
                      <Badge variant={item.priority === 'high' ? 'destructive' : 'secondary'}>
                        {item.priority === 'high' ? 'Penting' : 'Normal'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.content}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(item.date).toLocaleDateString('id-ID')}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Agenda Kegiatan Desa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">{event.title}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString('id-ID')}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Peserta: {event.participants}/{event.maxParticipants}
                      </span>
                      <Button size="sm" variant="outline">
                        Daftar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="umkm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="h-5 w-5" />
                UMKM Desa Fajar Baru
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {umkm.map((business, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{business.name}</h4>
                      <Badge variant="outline">{business.category}</Badge>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Pemilik: {business.owner}</p>
                      <p>Kontak: {business.contact}</p>
                      <p>Alamat: {business.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Transparansi Keuangan Desa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800">Total Anggaran</h4>
                    <p className="text-2xl font-bold text-blue-900">
                      Rp {(budget.totalBudget / 1000000).toFixed(0)}M
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800">Terpakai</h4>
                    <p className="text-2xl font-bold text-green-900">
                      Rp {(budget.used / 1000000).toFixed(0)}M
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-medium text-orange-800">Sisa</h4>
                    <p className="text-2xl font-bold text-orange-900">
                      Rp {((budget.totalBudget - budget.used) / 1000000).toFixed(0)}M
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Realisasi per Kategori</h4>
                  {budget.categories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{category.name}</span>
                        <span>Rp {(category.amount / 1000000).toFixed(0)}M ({category.percentage}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-village h-2 rounded-full" 
                          style={{ width: `${category.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VillageInfo;
