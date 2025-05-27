import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Camera, ChevronRight } from 'lucide-react';

const TourismSection = () => {
  const destinations = [
    {
      id: 1,
      name: 'Air Terjun Way Kandis',
      description: 'Air terjun alami yang memukau dengan ketinggian 25 meter, dikelilingi hutan hijau yang asri.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      category: 'Alam',
      distance: '2 km dari pusat desa',
      featured: true
    },
    {
      id: 2,
      name: 'Kebun Raya Fajar Baru',
      description: 'Taman wisata dengan koleksi flora langka dan spot foto Instagram yang menarik.',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      category: 'Edukasi',
      distance: '1.5 km dari pusat desa'
    },
    {
      id: 3,
      name: 'Sungai Way Kandis',
      description: 'Sungai jernih untuk aktivitas rafting dan tubing dengan pemandangan yang indah.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      category: 'Petualangan',
      distance: '500 m dari pusat desa'
    },
    {
      id: 4,
      name: 'Puncak Hijau Kandis',
      description: 'Spot sunrise terbaik dengan pemandangan 360 derajat ke seluruh Way Kandis.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      category: 'Alam',
      distance: '3 km dari pusat desa'
    }
  ];

  const activities = [
    { name: 'Trekking', icon: '🥾' },
    { name: 'Photography', icon: '📸' },
    { name: 'Rafting', icon: '🚣' },
    { name: 'Camping', icon: '⛺' },
    { name: 'Bird Watching', icon: '🦅' },
    { name: 'Cycling', icon: '🚴' }
  ];

  const facilities = [
    'Homestay Tradisional',
    'Warung Kuliner Lokal',
    'Pusat Informasi Wisata',
    'Tempat Parkir Luas',
    'Toilet dan Mushola',
    'Persewaan Alat Outdoor'
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Alam': 'bg-green-100 text-green-800',
      'Edukasi': 'bg-blue-100 text-blue-800',
      'Petualangan': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="tourism" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Wisata Desa Fajar Baru
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan keindahan alam Way Kandis dan nikmati pengalaman wisata yang tak terlupakan
            di destinasi unggulan Desa Fajar Baru.
          </p>
        </div>

        {/* Featured Destination */}
        <Card className="overflow-hidden mb-12 hover:shadow-xl transition-shadow duration-300">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-96">
              <img 
                src={destinations[0].image} 
                alt={destinations[0].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  UNGGULAN
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="ml-1 font-semibold">{destinations[0].rating}</span>
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(destinations[0].category)}`}>
                  {destinations[0].category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin size={14} className="mr-1" />
                  {destinations[0].distance}
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                {destinations[0].name}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {destinations[0].description}
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-village hover:opacity-90 text-white">
                  Lihat Detail <ChevronRight size={16} className="ml-2" />
                </Button>
                <Button variant="outline" className="border-village-green text-village-green hover:bg-village-green hover:text-white">
                  <Camera size={16} className="mr-2" /> Galeri Foto
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Other Destinations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Destinasi Lainnya</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {destinations.slice(1).map((destination, index) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(destination.category)}`}>
                      {destination.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="text-yellow-400 fill-current" size={12} />
                      <span className="ml-1 text-xs font-semibold">{destination.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {destination.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {destination.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <MapPin size={12} className="mr-1" />
                    <span>{destination.distance}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-village-green hover:text-village-green hover:bg-green-50 w-full">
                    Jelajahi <ChevronRight size={14} className="ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Activities & Facilities */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Activities */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Aktivitas Wisata</h3>
            <div className="grid grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-2xl">{activity.icon}</span>
                  <span className="font-medium text-gray-800">{activity.name}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Facilities */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Fasilitas Tersedia</h3>
            <div className="space-y-3">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-800">{facility}</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-village-green to-village-blue text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Rencanakan Kunjungan Anda</h3>
          <p className="mb-6 opacity-90">
            Butuh bantuan merencanakan perjalanan wisata? Tim kami siap membantu Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Hubungi Pemandu Wisata
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-village-green">
              Download Peta Wisata
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TourismSection;
