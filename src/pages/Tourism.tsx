import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Camera, Clock, Car, Ticket, Mountain, TreePine, Waves } from 'lucide-react';
import Footer from '@/components/Footer';

const Tourism = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Alam', 'Budaya', 'Kuliner', 'Edukasi'];

  const destinations = [
    {
      id: 1,
      name: 'Air Terjun Way Kandis',
      category: 'Alam',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      location: 'Way Kandis, 5 km dari pusat desa',
      description: 'Air terjun dengan ketinggian 25 meter yang dikelilingi hutan tropis. Tempat yang sempurna untuk menikmati keindahan alam dan berenang di kolam alami.',
      facilities: ['Area Parkir', 'Toilet', 'Warung Makan', 'Gazebo'],
      openTime: '06:00 - 18:00 WIB',
      ticketPrice: 'Rp 10.000',
      activities: ['Berenang', 'Fotografi', 'Trekking']
    },
    {
      id: 2,
      name: 'Kebun Raya Fajar Baru',
      category: 'Alam',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      location: 'Pusat Desa Fajar Baru',
      description: 'Kebun raya dengan koleksi flora langka dan tanaman obat tradisional. Spot favorit untuk bersantai dan belajar tentang keanekaragaman hayati.',
      facilities: ['Jalur Jogging', 'Taman Bermain', 'Musholla', 'Perpustakaan Mini'],
      openTime: '05:00 - 19:00 WIB',
      ticketPrice: 'Gratis',
      activities: ['Jogging', 'Edukasi', 'Piknik']
    },
    {
      id: 3,
      name: 'Desa Wisata Budaya',
      category: 'Budaya',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      location: 'RW 03, Desa Fajar Baru',
      description: 'Pengalaman budaya Lampung yang autentik dengan pertunjukan tari tradisional, kerajinan tangan, dan rumah adat.',
      facilities: ['Rumah Adat', 'Sanggar Seni', 'Galeri Kerajinan', 'Homestay'],
      openTime: '08:00 - 17:00 WIB',
      ticketPrice: 'Rp 25.000',
      activities: ['Workshop Batik', 'Tari Tradisional', 'Membuat Kerajinan']
    },
    {
      id: 4,
      name: 'Agrowisata Durian',
      category: 'Edukasi',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&w=800&q=80',
      rating: 4.5,
      location: 'Perkebunan Durian, 3 km dari desa',
      description: 'Wisata edukasi perkebunan durian dengan berbagai varietas unggul. Pengunjung dapat belajar tentang budidaya dan memetik langsung.',
      facilities: ['Gazebo Kebun', 'Toilet', 'Tempat Cuci Tangan', 'Area Istirahat'],
      openTime: '07:00 - 16:00 WIB',
      ticketPrice: 'Rp 15.000',
      activities: ['Petik Durian', 'Edukasi Pertanian', 'Fotografi']
    },
    {
      id: 5,
      name: 'Warung Kuliner Tradisional',
      category: 'Kuliner',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      location: 'Pasar Desa Fajar Baru',
      description: 'Pusat kuliner tradisional dengan berbagai makanan khas Lampung seperti gulai ikan patin, tempoyak, dan seruit.',
      facilities: ['Area Makan', 'Toilet', 'Parkir', 'Musholla'],
      openTime: '06:00 - 21:00 WIB',
      ticketPrice: 'Gratis Masuk',
      activities: ['Kuliner Tour', 'Cooking Class', 'Food Photography']
    },
    {
      id: 6,
      name: 'Tracking Bukit Fajar',
      category: 'Alam',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      rating: 4.4,
      location: 'Bukit Fajar, 7 km dari desa',
      description: 'Jalur trekking dengan pemandangan sunset terbaik di Way Kandis. Cocok untuk hiking dan camping.',
      facilities: ['Pos Istirahat', 'Area Camping', 'Toilet', 'Sumber Air'],
      openTime: '05:00 - 19:00 WIB',
      ticketPrice: 'Rp 20.000',
      activities: ['Hiking', 'Camping', 'Sunrise/Sunset Viewing']
    }
  ];

  const filteredDestinations = selectedCategory === 'Semua' 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  const tourPackages = [
    {
      name: 'Paket Wisata Alam',
      duration: '1 Hari',
      price: 'Rp 150.000',
      includes: ['Air Terjun Way Kandis', 'Kebun Raya', 'Makan Siang', 'Transportasi']
    },
    {
      name: 'Paket Wisata Budaya',
      duration: '2 Hari 1 Malam',
      price: 'Rp 350.000',
      includes: ['Desa Wisata Budaya', 'Workshop Batik', 'Homestay', 'Makan 3x']
    },
    {
      name: 'Paket Agrowisata',
      duration: '1 Hari',
      price: 'Rp 125.000',
      includes: ['Agrowisata Durian', 'Kuliner Tour', 'Guide', 'Transportasi']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Wisata Desa Fajar Baru
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Jelajahi keindahan alam, budaya, dan kuliner khas Desa Fajar Baru Way Kandis. 
              Temukan pengalaman wisata yang tak terlupakan di tengah pesona alam Lampung.
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

          {/* Destinations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredDestinations.map((destination, index) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-village-green text-white px-3 py-1 rounded-full text-xs font-medium">
                      {destination.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="text-yellow-400 fill-current" size={12} />
                      <span className="ml-1 text-xs font-semibold">{destination.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {destination.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin size={14} className="mr-1" />
                    <span>{destination.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {destination.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1 text-village-green" />
                        <span className="text-gray-600">{destination.openTime}</span>
                      </div>
                      <div className="flex items-center">
                        <Ticket size={14} className="mr-1 text-village-blue" />
                        <span className="font-semibold text-village-green">{destination.ticketPrice}</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Aktivitas:</p>
                      <div className="flex flex-wrap gap-1">
                        {destination.activities.slice(0, 3).map((activity, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-village hover:opacity-90 text-white">
                      <Camera size={14} className="mr-2" />
                      Detail
                    </Button>
                    <Button variant="outline" size="sm" className="border-village-green text-village-green hover:bg-village-green hover:text-white">
                      <MapPin size={14} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Tour Packages */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Paket Wisata</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {tourPackages.map((pkg, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-village-green mb-2">{pkg.price}</div>
                  <div className="text-sm text-gray-500 mb-4">{pkg.duration}</div>
                  <div className="space-y-2 mb-6">
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-village-green rounded-full mr-3"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-village hover:opacity-90">
                    Pesan Sekarang
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Tourism Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Mountain className="w-12 h-12 text-village-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">6</h3>
              <p className="text-gray-600 text-sm">Destinasi Wisata</p>
            </Card>
            <Card className="p-6 text-center">
              <TreePine className="w-12 h-12 text-village-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">3</h3>
              <p className="text-gray-600 text-sm">Wisata Alam</p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="w-12 h-12 text-village-orange mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">4.7</h3>
              <p className="text-gray-600 text-sm">Rating Rata-rata</p>
            </Card>
            <Card className="p-6 text-center">
              <Camera className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">1.2K</h3>
              <p className="text-gray-600 text-sm">Pengunjung/Bulan</p>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="p-8 bg-gradient-to-r from-village-green to-village-blue text-white text-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Siap Menjelajahi Desa Fajar Baru?</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Nikmati pengalaman wisata yang tak terlupakan dengan pemandangan alam yang indah, 
              budaya yang kaya, dan kuliner yang lezat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/village-map">
                <Button variant="secondary" size="lg">
                  <MapPin size={16} className="mr-2" />
                  Lihat Peta Wisata
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-village-green">
                Hubungi Guide
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tourism;
