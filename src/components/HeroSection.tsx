
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Users, Calendar, Star } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { label: 'Penduduk', value: '2,847', icon: Users },
    { label: 'RW', value: '8', icon: MapPin },
    { label: 'RT', value: '24', icon: MapPin },
    { label: 'Kegiatan/Bulan', value: '15+', icon: Calendar },
  ];

  const highlights = [
    {
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      title: 'Desa Digital Terdepan',
      description: 'Implementasi teknologi untuk pelayanan masyarakat'
    },
    {
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
      title: 'Wisata Alam',
      description: 'Destinasi wisata alam yang memukau'
    },
    {
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80',
      title: 'UMKM Berkembang',
      description: 'Produk lokal berkualitas tinggi'
    }
  ];

  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Temukan Keindahan
              <span className="bg-gradient-village bg-clip-text text-transparent"> Desa Fajar Baru</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Desa yang menggabungkan keindahan alam dengan kemajuan teknologi. 
              Nikmati pesona alam Way Kandis sambil merasakan pelayanan digital terdepan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-village hover:opacity-90 text-white px-8">
                Jelajahi Desa
              </Button>
              <Button variant="outline" size="lg" className="border-village-green text-village-green hover:bg-village-green hover:text-white">
                Lihat Galeri
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="w-12 h-12 bg-gradient-village rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Quick Access */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Akses Cepat</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['IDM', 'PPID', 'APB Desa', 'Bansos'].map((item, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="h-16 text-lg font-semibold border-2 border-village-green text-village-green hover:bg-village-green hover:text-white transition-all duration-300"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
