
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Home, Users, Layers, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const VillageGISMap = () => {
  const [selectedRW, setSelectedRW] = useState<number | null>(null);
  const [showHouses, setShowHouses] = useState(true);
  const [zoom, setZoom] = useState(1);

  const rwAreas = [
    { id: 1, name: 'RW 01', color: '#059669', coordinates: { x: 20, y: 15, width: 15, height: 20 } },
    { id: 2, name: 'RW 02', color: '#3b82f6', coordinates: { x: 35, y: 15, width: 18, height: 20 } },
    { id: 3, name: 'RW 03', color: '#f59e0b', coordinates: { x: 53, y: 15, width: 15, height: 20 } },
    { id: 4, name: 'RW 04', color: '#ef4444', coordinates: { x: 68, y: 15, width: 12, height: 20 } },
    { id: 5, name: 'RW 05', color: '#8b5cf6', coordinates: { x: 20, y: 35, width: 18, height: 25 } },
    { id: 6, name: 'RW 06', color: '#06b6d4', coordinates: { x: 38, y: 35, width: 15, height: 25 } },
    { id: 7, name: 'RW 07', color: '#84cc16', coordinates: { x: 53, y: 35, width: 15, height: 25 } },
    { id: 8, name: 'RW 08', color: '#f97316', coordinates: { x: 68, y: 35, width: 12, height: 25 } }
  ];

  const houses = [
    { id: 1, rwId: 1, x: 22, y: 18, residents: 'Ahmad Suryanto (4 jiwa)' },
    { id: 2, rwId: 1, x: 25, y: 22, residents: 'Siti Nurhaliza (3 jiwa)' },
    { id: 3, rwId: 1, x: 28, y: 26, residents: 'Budi Hartono (5 jiwa)' },
    { id: 4, rwId: 2, x: 38, y: 18, residents: 'Indira Sari (4 jiwa)' },
    { id: 5, rwId: 2, x: 42, y: 22, residents: 'Doni Pratama (3 jiwa)' },
    { id: 6, rwId: 2, x: 46, y: 26, residents: 'Maya Kusuma (4 jiwa)' },
    { id: 7, rwId: 3, x: 56, y: 18, residents: 'Fahmi Abdullah (3 jiwa)' },
    { id: 8, rwId: 3, x: 60, y: 22, residents: 'Lestari Dewi (4 jiwa)' },
    { id: 9, rwId: 4, x: 70, y: 18, residents: 'Ratna Sari (3 jiwa)' },
    { id: 10, rwId: 4, x: 73, y: 22, residents: 'Bambang Irawan (4 jiwa)' },
    { id: 11, rwId: 5, x: 22, y: 38, residents: 'Hendra Gunawan (4 jiwa)' },
    { id: 12, rwId: 5, x: 26, y: 42, residents: 'Linda Maryati (3 jiwa)' },
    { id: 13, rwId: 5, x: 30, y: 46, residents: 'Rio Purnomo (5 jiwa)' },
    { id: 14, rwId: 6, x: 40, y: 38, residents: 'Mega Putri (3 jiwa)' },
    { id: 15, rwId: 6, x: 44, y: 42, residents: 'Andi Setiawan (4 jiwa)' },
    { id: 16, rwId: 7, x: 56, y: 38, residents: 'Galih Pratama (3 jiwa)' },
    { id: 17, rwId: 7, x: 60, y: 42, residents: 'Ayu Lestari (4 jiwa)' },
    { id: 18, rwId: 8, x: 70, y: 38, residents: 'Dian Safitri (4 jiwa)' },
    { id: 19, rwId: 8, x: 73, y: 42, residents: 'Wahyu Nugroho (3 jiwa)' }
  ];

  const landmarks = [
    { name: 'Balai Desa', x: 45, y: 28, icon: '🏛️' },
    { name: 'Masjid Al-Ikhlas', x: 50, y: 30, icon: '🕌' },
    { name: 'SD Negeri 1', x: 40, y: 32, icon: '🏫' },
    { name: 'Puskesmas', x: 55, y: 25, icon: '🏥' },
    { name: 'Pasar Desa', x: 35, y: 45, icon: '🏪' }
  ];

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Sistem Informasi Geografis (SIG) Desa Fajar Baru
      </h3>
      
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Map Controls */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="p-4">
            <h4 className="font-semibold text-gray-800 mb-3">Kontrol Peta</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setZoom(Math.min(zoom + 0.2, 2))}
                  className="flex-1"
                >
                  <ZoomIn size={14} className="mr-1" />
                  Zoom In
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setZoom(Math.max(zoom - 0.2, 0.8))}
                  className="flex-1"
                >
                  <ZoomOut size={14} className="mr-1" />
                  Zoom Out
                </Button>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => { setZoom(1); setSelectedRW(null); }}
                className="w-full"
              >
                <RotateCcw size={14} className="mr-1" />
                Reset
              </Button>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="showHouses"
                  checked={showHouses}
                  onChange={(e) => setShowHouses(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="showHouses" className="text-sm text-gray-700">
                  Tampilkan Rumah
                </label>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold text-gray-800 mb-3">Legenda RW</h4>
            <div className="space-y-2">
              {rwAreas.map((rw) => (
                <div
                  key={rw.id}
                  className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-50 ${
                    selectedRW === rw.id ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => setSelectedRW(selectedRW === rw.id ? null : rw.id)}
                >
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: rw.color }}
                  ></div>
                  <span className="text-sm font-medium">{rw.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Interactive Map */}
        <div className="lg:col-span-3">
          <Card className="p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Peta Interaktif Desa Fajar Baru
            </h4>
            <div 
              className="relative bg-gradient-to-br from-green-50 to-blue-50 rounded-lg overflow-hidden border-2 border-gray-200"
              style={{ 
                height: '500px',
                transform: `scale(${zoom})`,
                transformOrigin: 'center center',
                transition: 'transform 0.3s ease'
              }}
            >
              {/* RW Areas */}
              {rwAreas.map((rw) => (
                <div
                  key={rw.id}
                  className={`absolute border-2 rounded cursor-pointer transition-all duration-300 ${
                    selectedRW === rw.id ? 'border-gray-800 shadow-lg z-10' : 'border-white/50'
                  }`}
                  style={{
                    left: `${rw.coordinates.x}%`,
                    top: `${rw.coordinates.y}%`,
                    width: `${rw.coordinates.width}%`,
                    height: `${rw.coordinates.height}%`,
                    backgroundColor: selectedRW === rw.id ? rw.color : `${rw.color}40`,
                    opacity: selectedRW && selectedRW !== rw.id ? 0.3 : 1
                  }}
                  onClick={() => setSelectedRW(selectedRW === rw.id ? null : rw.id)}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-xs bg-black/50 px-2 py-1 rounded">
                      {rw.name}
                    </span>
                  </div>
                </div>
              ))}

              {/* Houses */}
              {showHouses && houses.map((house) => (
                <div
                  key={house.id}
                  className={`absolute w-3 h-3 cursor-pointer group ${
                    selectedRW && selectedRW !== house.rwId ? 'opacity-30' : ''
                  }`}
                  style={{
                    left: `${house.x}%`,
                    top: `${house.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="w-3 h-3 bg-red-600 rounded-sm border border-white shadow-sm hover:scale-150 transition-transform duration-200"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 text-xs">
                    <div className="font-medium">{house.residents}</div>
                  </div>
                </div>
              ))}

              {/* Landmarks */}
              {landmarks.map((landmark, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    left: `${landmark.x}%`,
                    top: `${landmark.y}%`,
                  }}
                >
                  <div className="text-2xl hover:scale-125 transition-transform duration-200">
                    {landmark.icon}
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 text-xs">
                    <div className="font-medium">{landmark.name}</div>
                  </div>
                </div>
              ))}

              {/* Compass */}
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                <div className="w-8 h-8 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-red-600">N</div>
                  <div className="absolute inset-0 border border-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Map Information */}
            {selectedRW && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">
                  Informasi {rwAreas.find(rw => rw.id === selectedRW)?.name}
                </h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-blue-600" />
                    <span>Penduduk: {selectedRW === 1 ? '380' : selectedRW === 2 ? '420' : selectedRW === 3 ? '350' : selectedRW === 4 ? '290' : selectedRW === 5 ? '380' : selectedRW === 6 ? '310' : selectedRW === 7 ? '340' : '377'} jiwa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home size={16} className="text-green-600" />
                    <span>Rumah: {houses.filter(h => h.rwId === selectedRW).length} unit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers size={16} className="text-purple-600" />
                    <span>Area: {rwAreas.find(rw => rw.id === selectedRW)?.coordinates.width}% x {rwAreas.find(rw => rw.id === selectedRW)?.coordinates.height}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-orange-600" />
                    <span>Koordinat: {rwAreas.find(rw => rw.id === selectedRW)?.coordinates.x}, {rwAreas.find(rw => rw.id === selectedRW)?.coordinates.y}</span>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VillageGISMap;
