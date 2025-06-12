
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users,
  Image,
  FileText,
  ChevronRight,
  Star
} from 'lucide-react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Peringatan HUT RI ke-79',
      date: '2024-08-17',
      time: '08:00 WIB',
      location: 'Lapangan Desa Fajar Baru',
      category: 'nasional',
      description: 'Upacara bendera dan berbagai lomba tradisional dalam rangka memperingati kemerdekaan Indonesia.',
      image: '/placeholder.svg',
      participants: 500,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Gotong Royong Bersih Desa',
      date: '2024-07-20',
      time: '06:00 WIB',
      location: 'Seluruh Wilayah Desa',
      category: 'sosial',
      description: 'Kegiatan gotong royong membersihkan lingkungan desa dan penanaman pohon.',
      image: '/placeholder.svg',
      participants: 200,
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Festival Kuliner Desa',
      date: '2024-07-25',
      time: '16:00 WIB',
      location: 'Balai Desa',
      category: 'budaya',
      description: 'Pameran dan festival kuliner khas daerah dengan berbagai makanan tradisional.',
      image: '/placeholder.svg',
      participants: 300,
      status: 'upcoming'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Musyawarah Desa 2024',
      date: '2024-06-15',
      time: '09:00 WIB',
      location: 'Balai Desa',
      category: 'pemerintahan',
      description: 'Musyawarah perencanaan pembangunan desa tahun 2024 dengan partisipasi seluruh RT/RW.',
      image: '/placeholder.svg',
      participants: 150,
      status: 'completed'
    },
    {
      id: 5,
      title: 'Bakti Sosial Kesehatan',
      date: '2024-06-01',
      time: '08:00 WIB',
      location: 'Posyandu Melati',
      category: 'kesehatan',
      description: 'Pemeriksaan kesehatan gratis dan pembagian vitamin untuk lansia dan anak-anak.',
      image: '/placeholder.svg',
      participants: 120,
      status: 'completed'
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua', color: 'bg-gray-500' },
    { id: 'nasional', name: 'Nasional', color: 'bg-red-500' },
    { id: 'sosial', name: 'Sosial', color: 'bg-green-500' },
    { id: 'budaya', name: 'Budaya', color: 'bg-purple-500' },
    { id: 'pemerintahan', name: 'Pemerintahan', color: 'bg-blue-500' },
    { id: 'kesehatan', name: 'Kesehatan', color: 'bg-orange-500' }
  ];

  const filterEvents = (events: any[]) => {
    if (selectedCategory === 'all') return events;
    return events.filter(event => event.category === selectedCategory);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const EventCard = ({ event }: { event: any }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-4 left-4">
          <Badge className={`${categories.find(c => c.id === event.category)?.color} text-white`}>
            {categories.find(c => c.id === event.category)?.name}
          </Badge>
        </div>
        {event.status === 'completed' && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-gray-800 text-white">
              Selesai
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2 text-village-green" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-2 text-village-green" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-2 text-village-green" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2 text-village-green" />
            {event.participants} peserta
          </div>
        </div>
        
        <Button variant="outline" className="w-full">
          {event.status === 'upcoming' ? 'Daftar Sekarang' : 'Lihat Dokumentasi'}
          <ChevronRight size={16} className="ml-2" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Kegiatan & Acara Desa
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Ikuti berbagai kegiatan dan acara yang diselenggarakan oleh Desa Fajar Baru 
              untuk mempererat tali silaturahmi dan membangun desa bersama.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-gradient-village" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upcoming">Kegiatan Mendatang</TabsTrigger>
              <TabsTrigger value="past">Kegiatan Selesai</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterEvents(upcomingEvents).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
              
              {filterEvents(upcomingEvents).length === 0 && (
                <div className="text-center py-12">
                  <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">Tidak ada kegiatan mendatang untuk kategori ini.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="past">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterEvents(pastEvents).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
              
              {filterEvents(pastEvents).length === 0 && (
                <div className="text-center py-12">
                  <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">Tidak ada kegiatan selesai untuk kategori ini.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Event Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">24</h3>
              <p className="text-gray-600">Kegiatan Tahun Ini</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">1,250</h3>
              <p className="text-gray-600">Total Peserta</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">95%</h3>
              <p className="text-gray-600">Tingkat Kepuasan</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">150+</h3>
              <p className="text-gray-600">Dokumentasi</p>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="mt-12 p-8 bg-gradient-to-r from-village-green to-village-blue text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Punya Ide Kegiatan?</h3>
            <p className="mb-6 opacity-90">
              Kami terbuka untuk saran dan ide kegiatan yang dapat memajukan desa. 
              Sampaikan usulan Anda kepada kami!
            </p>
            <Button variant="secondary">
              <FileText size={16} className="mr-2" />
              Kirim Usulan
            </Button>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
