
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation as NavigationIcon, Home, Building, TreePine } from 'lucide-react';
import Footer from '@/components/Footer';

const VillageMap = () => {
  const mapLocations = [
    { name: 'Balai Desa', type: 'government', coordinates: { x: 45, y: 30 } },
    { name: 'Puskesmas', type: 'health', coordinates: { x: 60, y: 25 } },
    { name: 'SD Negeri 1', type: 'education', coordinates: { x: 35, y: 40 } },
    { name: 'Masjid Al-Ikhlas', type: 'religious', coordinates: { x: 50, y: 35 } },
    { name: 'Pasar Desa', type: 'economic', coordinates: { x: 55, y: 45 } },
    { name: 'Air Terjun Way Kandis', type: 'tourism', coordinates: { x: 70, y: 60 } },
    { name: 'Kebun Raya', type: 'tourism', coordinates: { x: 40, y: 55 } },
    { name: 'Pos Keamanan', type: 'security', coordinates: { x: 30, y: 20 } }
  ];

  const getLocationIcon = (type: string) => {
    switch (type) {
      case 'government': return Building;
      case 'health': return Home;
      case 'education': return Building;
      case 'religious': return Building;
      case 'economic': return Building;
      case 'tourism': return TreePine;
      case 'security': return Building;
      default: return MapPin;
    }
  };

  const getLocationColor = (type: string) => {
    switch (type) {
      case 'government': return 'bg-blue-500';
      case 'health': return 'bg-red-500';
      case 'education': return 'bg-green-500';
      case 'religious': return 'bg-purple-500';
      case 'economic': return 'bg-orange-500';
      case 'tourism': return 'bg-teal-500';
      case 'security': return 'bg-gray-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Peta Desa Fajar Baru
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Temukan lokasi fasilitas publik, tempat wisata, dan titik penting lainnya 
              di Desa Fajar Baru Way Kandis
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Peta Interaktif</h3>
                <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-96 overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                  
                  {mapLocations.map((location, index) => {
                    const Icon = getLocationIcon(location.type);
                    return (
                      <div
                        key={index}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                        style={{ 
                          left: `${location.coordinates.x}%`, 
                          top: `${location.coordinates.y}%` 
                        }}
                      >
                        <div className={`w-8 h-8 ${getLocationColor(location.type)} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                          <Icon size={16} />
                        </div>
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                          <p className="text-xs font-medium">{location.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 text-center">
                  <Button className="bg-gradient-village hover:opacity-90">
                    <NavigationIcon size={16} className="mr-2" />
                    Lihat Peta Lengkap
                  </Button>
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Legenda</h3>
                <div className="space-y-3">
                  {[
                    { type: 'government', label: 'Pemerintahan', color: 'bg-blue-500' },
                    { type: 'health', label: 'Kesehatan', color: 'bg-red-500' },
                    { type: 'education', label: 'Pendidikan', color: 'bg-green-500' },
                    { type: 'religious', label: 'Ibadah', color: 'bg-purple-500' },
                    { type: 'economic', label: 'Ekonomi', color: 'bg-orange-500' },
                    { type: 'tourism', label: 'Wisata', color: 'bg-teal-500' },
                    { type: 'security', label: 'Keamanan', color: 'bg-gray-500' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 ${item.color} rounded-full`}></div>
                      <span className="text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Informasi Lokasi</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p><strong>Koordinat:</strong> 5°22&apos;S, 105°16&apos;E</p>
                  <p><strong>Luas Wilayah:</strong> 847 Ha</p>
                  <p><strong>Ketinggian:</strong> 45-120 mdpl</p>
                  <p><strong>Jarak ke Pusat Kota:</strong> 15 km</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VillageMap;
