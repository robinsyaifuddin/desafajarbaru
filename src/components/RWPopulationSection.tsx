import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Home, ChevronRight, Eye } from 'lucide-react';

const RWPopulationSection = () => {
  const [selectedRW, setSelectedRW] = useState<number | null>(null);

  const rwData = [
    { 
      id: 1, 
      name: 'RW 01', 
      population: 380, 
      households: 95,
      color: '#059669',
      residents: [
        { name: 'Ahmad Suryanto', address: 'Jl. Mawar No. 1', family: 4 },
        { name: 'Siti Nurhaliza', address: 'Jl. Mawar No. 3', family: 3 },
        { name: 'Budi Hartono', address: 'Jl. Melati No. 5', family: 5 },
        { name: 'Dewi Sartika', address: 'Jl. Melati No. 7', family: 2 },
        { name: 'Rahman Ali', address: 'Jl. Kenanga No. 2', family: 6 }
      ]
    },
    { 
      id: 2, 
      name: 'RW 02', 
      population: 420, 
      households: 105,
      color: '#3b82f6',
      residents: [
        { name: 'Indira Sari', address: 'Jl. Anggrek No. 12', family: 4 },
        { name: 'Doni Pratama', address: 'Jl. Anggrek No. 15', family: 3 },
        { name: 'Maya Kusuma', address: 'Jl. Dahlia No. 8', family: 4 },
        { name: 'Eko Prasetyo', address: 'Jl. Dahlia No. 10', family: 5 },
        { name: 'Rina Wijaya', address: 'Jl. Tulip No. 4', family: 2 }
      ]
    },
    { 
      id: 3, 
      name: 'RW 03', 
      population: 350, 
      households: 87,
      color: '#f59e0b',
      residents: [
        { name: 'Fahmi Abdullah', address: 'Jl. Flamboyan No. 6', family: 3 },
        { name: 'Lestari Dewi', address: 'Jl. Flamboyan No. 9', family: 4 },
        { name: 'Agus Maulana', address: 'Jl. Sakura No. 11', family: 5 },
        { name: 'Nila Safitri', address: 'Jl. Sakura No. 13', family: 2 },
        { name: 'Yusuf Hasan', address: 'Jl. Cempaka No. 7', family: 6 }
      ]
    },
    { 
      id: 4, 
      name: 'RW 04', 
      population: 290, 
      households: 72,
      color: '#ef4444',
      residents: [
        { name: 'Ratna Sari', address: 'Jl. Seroja No. 3', family: 3 },
        { name: 'Bambang Irawan', address: 'Jl. Seroja No. 5', family: 4 },
        { name: 'Fitri Handayani', address: 'Jl. Teratai No. 8', family: 2 },
        { name: 'Dimas Pratama', address: 'Jl. Teratai No. 12', family: 5 },
        { name: 'Sari Indah', address: 'Jl. Kamboja No. 14', family: 3 }
      ]
    },
    { 
      id: 5, 
      name: 'RW 05', 
      population: 380, 
      households: 95,
      color: '#8b5cf6',
      residents: [
        { name: 'Hendra Gunawan', address: 'Jl. Palem No. 16', family: 4 },
        { name: 'Linda Maryati', address: 'Jl. Palem No. 18', family: 3 },
        { name: 'Rio Purnomo', address: 'Jl. Bambu No. 20', family: 5 },
        { name: 'Tari Maharani', address: 'Jl. Bambu No. 22', family: 2 },
        { name: 'Wisnu Saputra', address: 'Jl. Kelapa No. 9', family: 6 }
      ]
    },
    { 
      id: 6, 
      name: 'RW 06', 
      population: 310, 
      households: 77,
      color: '#06b6d4',
      residents: [
        { name: 'Mega Putri', address: 'Jl. Mangga No. 21', family: 3 },
        { name: 'Andi Setiawan', address: 'Jl. Mangga No. 23', family: 4 },
        { name: 'Novi Rahayu', address: 'Jl. Jeruk No. 25', family: 2 },
        { name: 'Irfan Hakim', address: 'Jl. Jeruk No. 27', family: 5 },
        { name: 'Putri Amelia', address: 'Jl. Apel No. 15', family: 4 }
      ]
    },
    { 
      id: 7, 
      name: 'RW 07', 
      population: 340, 
      households: 85,
      color: '#84cc16',
      residents: [
        { name: 'Galih Pratama', address: 'Jl. Durian No. 30', family: 3 },
        { name: 'Ayu Lestari', address: 'Jl. Durian No. 32', family: 4 },
        { name: 'Rudi Hermawan', address: 'Jl. Rambutan No. 18', family: 5 },
        { name: 'Sinta Dewi', address: 'Jl. Rambutan No. 20', family: 2 },
        { name: 'Ferry Wijaya', address: 'Jl. Nangka No. 24', family: 6 }
      ]
    },
    { 
      id: 8, 
      name: 'RW 08', 
      population: 377, 
      households: 94,
      color: '#f97316',
      residents: [
        { name: 'Dian Safitri', address: 'Jl. Salak No. 26', family: 4 },
        { name: 'Wahyu Nugroho', address: 'Jl. Salak No. 28', family: 3 },
        { name: 'Kartika Sari', address: 'Jl. Jambu No. 31', family: 4 },
        { name: 'Bayu Satria', address: 'Jl. Jambu No. 33', family: 5 },
        { name: 'Endah Permata', address: 'Jl. Belimbing No. 19', family: 2 }
      ]
    }
  ];

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Data Penduduk Berdasarkan RW
      </h3>
      
      {/* RW Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {rwData.map((rw) => (
          <Card 
            key={rw.id} 
            className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedRW === rw.id ? 'ring-2 ring-offset-2' : ''
            }`}
            style={{ 
              borderColor: selectedRW === rw.id ? rw.color : undefined,
              backgroundColor: selectedRW === rw.id ? `${rw.color}10` : undefined
            }}
            onClick={() => setSelectedRW(selectedRW === rw.id ? null : rw.id)}
          >
            <div className="text-center">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: rw.color }}
              >
                <span className="text-white font-bold">{rw.id}</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{rw.name}</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center justify-center gap-1">
                  <Users size={14} />
                  <span>{rw.population} jiwa</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Home size={14} />
                  <span>{rw.households} KK</span>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-2 text-xs"
                style={{ color: rw.color }}
              >
                <Eye size={12} className="mr-1" />
                {selectedRW === rw.id ? 'Tutup' : 'Lihat Detail'}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Resident Details */}
      {selectedRW && (
        <Card className="p-6 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: rwData.find(rw => rw.id === selectedRW)?.color }}
            >
              <span className="text-white font-bold text-sm">{selectedRW}</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">
              Data Penduduk {rwData.find(rw => rw.id === selectedRW)?.name}
            </h4>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rwData.find(rw => rw.id === selectedRW)?.residents.map((resident, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                <h5 className="font-semibold text-gray-800 mb-2">{resident.name}</h5>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={12} />
                    <span>{resident.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={12} />
                    <span>{resident.family} anggota keluarga</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Link to={`/rw-detail/${selectedRW}`}>
              <Button 
                variant="outline" 
                className="mr-3"
                style={{ borderColor: rwData.find(rw => rw.id === selectedRW)?.color }}
              >
                Lihat Semua Penduduk <ChevronRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link to="/village-map">
              <Button 
                style={{ backgroundColor: rwData.find(rw => rw.id === selectedRW)?.color }}
                className="text-white"
              >
                <MapPin size={16} className="mr-2" />
                Lihat di Peta
              </Button>
            </Link>
          </div>
        </Card>
      )}
    </div>
  );
};

export default RWPopulationSection;
