
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Calendar, MapPin, Eye } from 'lucide-react';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Kegiatan Desa', 'Infrastruktur', 'Wisata', 'UMKM', 'Budaya'];

  const galleryItems = [
    {
      id: 1,
      title: 'Gotong Royong Pembersihan Sungai',
      category: 'Kegiatan Desa',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
      date: '15 Januari 2024',
      location: 'Sungai Way Kandis',
      description: 'Kegiatan bersama masyarakat membersihkan sungai utama desa'
    },
    {
      id: 2,
      title: 'Pembangunan Jalan Desa',
      category: 'Infrastruktur',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      date: '10 Januari 2024',
      location: 'Jalan Utama Desa',
      description: 'Proses pembangunan infrastruktur jalan untuk akses yang lebih baik'
    },
    {
      id: 3,
      title: 'Festival Budaya Lampung',
      category: 'Budaya',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
      date: '8 Januari 2024',
      location: 'Balai Desa',
      description: 'Pertunjukan tari tradisional dalam festival budaya tahunan'
    },
    {
      id: 4,
      title: 'Air Terjun Way Kandis',
      category: 'Wisata',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      date: '5 Januari 2024',
      location: 'Way Kandis',
      description: 'Keindahan alam air terjun yang menjadi daya tarik wisata'
    },
    {
      id: 5,
      title: 'Pasar UMKM Desa',
      category: 'UMKM',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80',
      date: '3 Januari 2024',
      location: 'Pasar Desa',
      description: 'Produk-produk UMKM lokal yang dipamerkan di pasar desa'
    },
    {
      id: 6,
      title: 'Musyawarah Desa',
      category: 'Kegiatan Desa',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
      date: '1 Januari 2024',
      location: 'Balai Desa',
      description: 'Rapat koordinasi perencanaan pembangunan desa 2024'
    },
    {
      id: 7,
      title: 'Pos Keamanan Desa',
      category: 'Infrastruktur',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      date: '28 Desember 2023',
      location: 'Pintu Masuk Desa',
      description: 'Pembangunan pos keamanan untuk ketertiban desa'
    },
    {
      id: 8,
      title: 'Kebun Raya Fajar Baru',
      category: 'Wisata',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      date: '25 Desember 2023',
      location: 'Kebun Raya Desa',
      description: 'Koleksi flora langka dan spot foto menarik'
    }
  ];

  const filteredItems = selectedCategory === 'Semua' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Galeri Desa Fajar Baru
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dokumentasi visual kegiatan, pembangunan, dan keindahan alam 
              Desa Fajar Baru Way Kandis
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-village hover:opacity-90" 
                  : "hover:bg-village-green hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredItems.map((item, index) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative group">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-village-green text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={12} className="mr-1" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Camera className="w-12 h-12 text-village-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">150+</h3>
              <p className="text-gray-600 text-sm">Total Foto</p>
            </Card>
            <Card className="p-6 text-center">
              <Calendar className="w-12 h-12 text-village-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">25</h3>
              <p className="text-gray-600 text-sm">Event Terdokumentasi</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="w-12 h-12 text-village-orange mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">8</h3>
              <p className="text-gray-600 text-sm">Lokasi Berbeda</p>
            </Card>
            <Card className="p-6 text-center">
              <Eye className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2.5K</h3>
              <p className="text-gray-600 text-sm">Total Views</p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
