
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Edit, 
  Save, 
  Upload,
  Download,
  Layers,
  Navigation,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

const AdminMap = () => {
  const [isEditing, setIsEditing] = useState(false);

  const mapLayers = [
    { id: 1, name: 'Batas Wilayah', type: 'polygon', visible: true, color: '#3b82f6' },
    { id: 2, name: 'Jalan Utama', type: 'line', visible: true, color: '#ef4444' },
    { id: 3, name: 'Sungai', type: 'line', visible: true, color: '#06b6d4' },
    { id: 4, name: 'Fasilitas Umum', type: 'point', visible: true, color: '#10b981' },
    { id: 5, name: 'Pemukiman', type: 'polygon', visible: false, color: '#f59e0b' },
    { id: 6, name: 'Lahan Pertanian', type: 'polygon', visible: true, color: '#84cc16' }
  ];

  const facilities = [
    { id: 1, name: 'Kantor Desa', type: 'Pemerintahan', lat: -6.2088, lng: 106.8456, status: 'Active' },
    { id: 2, name: 'Puskesmas', type: 'Kesehatan', lat: -6.2095, lng: 106.8465, status: 'Active' },
    { id: 3, name: 'SD Fajar Baru', type: 'Pendidikan', lat: -6.2078, lng: 106.8445, status: 'Active' },
    { id: 4, name: 'Masjid Al-Ikhlas', type: 'Ibadah', lat: -6.2085, lng: 106.8450, status: 'Active' },
    { id: 5, name: 'Pasar Desa', type: 'Ekonomi', lat: -6.2090, lng: 106.8460, status: 'Active' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Peta Desa</h2>
          <p className="text-gray-600">Kelola peta digital dan informasi geografis desa</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload size={20} className="mr-2" />
            Import Data
          </Button>
          <Button variant="outline">
            <Download size={20} className="mr-2" />
            Export Map
          </Button>
          <Button 
            className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? <Save size={20} className="mr-2" /> : <Edit size={20} className="mr-2" />}
            {isEditing ? 'Simpan' : 'Edit Peta'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Controls */}
        <div className="space-y-4">
          <Card className="p-4">
            <h3 className="font-bold text-gray-800 mb-3">Kontrol Peta</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <ZoomIn size={16} className="mr-2" />
                Zoom In
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ZoomOut size={16} className="mr-2" />
                Zoom Out
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Navigation size={16} className="mr-2" />
                Fit to Bounds
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <RotateCcw size={16} className="mr-2" />
                Reset View
              </Button>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold text-gray-800 mb-3">Layer Peta</h3>
            <div className="space-y-3">
              {mapLayers.map((layer) => (
                <div key={layer.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: layer.color }}
                    />
                    <span className="text-sm text-gray-700">{layer.name}</span>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={layer.visible}
                    className="rounded"
                  />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold text-gray-800 mb-3">Statistik Wilayah</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Luas Total</span>
                <span className="font-medium">12.5 km²</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Jumlah RW</span>
                <span className="font-medium">6 RW</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Jumlah RT</span>
                <span className="font-medium">24 RT</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Fasilitas Umum</span>
                <span className="font-medium">15 lokasi</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Map Area */}
        <div className="lg:col-span-3">
          <Card className="p-4 h-[600px]">
            <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 h-16 w-16 text-gray-400" />
                <p className="text-gray-600 mb-2">Peta Interaktif Desa Fajar Baru</p>
                <p className="text-sm text-gray-500">Area peta akan ditampilkan di sini</p>
              </div>
              
              {/* Map Overlay Info */}
              <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                <p className="text-sm font-medium text-gray-800">Koordinat: -6.2088, 106.8456</p>
                <p className="text-xs text-gray-600">Zoom Level: 15</p>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md">
                <h4 className="text-sm font-medium text-gray-800 mb-2">Legenda</h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>Batas Wilayah</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span>Jalan Utama</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>Fasilitas Umum</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Facilities Management */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Kelola Fasilitas</h3>
          <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
            <MapPin size={16} className="mr-2" />
            Tambah Fasilitas
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Nama Fasilitas</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Kategori</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Koordinat</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {facilities.map((facility) => (
                <tr key={facility.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">{facility.name}</td>
                  <td className="py-4 px-4 text-gray-600">{facility.type}</td>
                  <td className="py-4 px-4 text-gray-600 font-mono text-sm">
                    {facility.lat}, {facility.lng}
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {facility.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MapPin size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminMap;
