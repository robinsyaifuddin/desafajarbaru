import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MapPin, Users, Home, ChevronRight, Eye, Phone, Mail, Calendar } from 'lucide-react';

const RWPopulationSection = () => {
  const [selectedRW, setSelectedRW] = useState<number | null>(null);
  
  const rwData = [
    {
      id: 1,
      name: 'RW 01',
      population: 380,
      households: 95,
      color: '#059669',
      area: 'Jl. Mawar, Jl. Melati, Jl. Kenanga',
      rt: ['RT 01', 'RT 02', 'RT 03'],
      kepalaRW: 'H. Ahmad Suryanto',
      phone: '0812-3456-7890',
      kkData: [
        {
          noKK: '3271010101230001',
          kepalaKeluarga: 'Ahmad Suryanto',
          address: 'Jl. Mawar No. 1',
          rt: 'RT 01',
          anggota: [
            { nama: 'Ahmad Suryanto', hubungan: 'Kepala Keluarga', umur: 45, pekerjaan: 'Petani', pendidikan: 'SMA' },
            { nama: 'Siti Nurhaliza', hubungan: 'Istri', umur: 42, pekerjaan: 'Ibu Rumah Tangga', pendidikan: 'SMP' },
            { nama: 'Budi Suryanto', hubungan: 'Anak', umur: 20, pekerjaan: 'Mahasiswa', pendidikan: 'SMA' },
            { nama: 'Dewi Suryanto', hubungan: 'Anak', umur: 16, pekerjaan: 'Pelajar', pendidikan: 'SMP' }
          ]
        },
        {
          noKK: '3271010101230002',
          kepalaKeluarga: 'Budi Hartono',
          address: 'Jl. Melati No. 5',
          rt: 'RT 01',
          anggota: [
            { nama: 'Budi Hartono', hubungan: 'Kepala Keluarga', umur: 38, pekerjaan: 'Pedagang', pendidikan: 'SMA' },
            { nama: 'Rina Hartono', hubungan: 'Istri', umur: 35, pekerjaan: 'Guru', pendidikan: 'S1' },
            { nama: 'Andi Hartono', hubungan: 'Anak', umur: 12, pekerjaan: 'Pelajar', pendidikan: 'SD' },
            { nama: 'Sari Hartono', hubungan: 'Anak', umur: 8, pekerjaan: 'Pelajar', pendidikan: 'SD' },
            { nama: 'Dono Hartono', hubungan: 'Anak', umur: 5, pekerjaan: '-', pendidikan: 'TK' }
          ]
        },
        {
          noKK: '3271010101230003',
          kepalaKeluarga: 'Dewi Sartika',
          address: 'Jl. Melati No. 7',
          rt: 'RT 02',
          anggota: [
            { nama: 'Dewi Sartika', hubungan: 'Kepala Keluarga', umur: 40, pekerjaan: 'Wiraswasta', pendidikan: 'SMA' },
            { nama: 'Maya Sartika', hubungan: 'Anak', umur: 18, pekerjaan: 'Mahasiswa', pendidikan: 'SMA' }
          ]
        }
      ]
    }, {
      id: 2,
      name: 'RW 02',
      population: 420,
      households: 105,
      color: '#3b82f6',
      area: 'Jl. Anggrek, Jl. Dahlia, Jl. Tulip',
      rt: ['RT 01', 'RT 02', 'RT 03', 'RT 04'],
      kepalaRW: 'Drs. Indira Sari',
      phone: '0813-9876-5432',
      kkData: [
        {
          noKK: '3271010101230004',
          kepalaKeluarga: 'Indira Sari',
          address: 'Jl. Anggrek No. 12',
          rt: 'RT 01',
          anggota: [
            { nama: 'Indira Sari', hubungan: 'Kepala Keluarga', umur: 48, pekerjaan: 'PNS', pendidikan: 'S1' },
            { nama: 'Doni Pratama', hubungan: 'Suami', umur: 50, pekerjaan: 'TNI', pendidikan: 'S1' },
            { nama: 'Maya Pratama', hubungan: 'Anak', umur: 22, pekerjaan: 'Fresh Graduate', pendidikan: 'S1' },
            { nama: 'Eko Pratama', hubungan: 'Anak', umur: 19, pekerjaan: 'Mahasiswa', pendidikan: 'SMA' }
          ]
        },
        {
          noKK: '3271010101230005',
          kepalaKeluarga: 'Maya Kusuma',
          address: 'Jl. Dahlia No. 8',
          rt: 'RT 02',
          anggota: [
            { nama: 'Maya Kusuma', hubungan: 'Kepala Keluarga', umur: 35, pekerjaan: 'Dokter', pendidikan: 'S1' },
            { nama: 'Eko Prasetyo', hubungan: 'Suami', umur: 38, pekerjaan: 'Engineer', pendidikan: 'S1' },
            { nama: 'Rina Kusuma', hubungan: 'Anak', umur: 12, pekerjaan: 'Pelajar', pendidikan: 'SD' },
            { nama: 'Dina Kusuma', hubungan: 'Anak', umur: 8, pekerjaan: 'Pelajar', pendidikan: 'SD' }
          ]
        }
      ]
    }, {
      id: 3,
      name: 'RW 03',
      population: 350,
      households: 87,
      color: '#f59e0b',
      area: 'Jl. Flamboyan, Jl. Sakura, Jl. Cempaka',
      rt: ['RT 01', 'RT 02', 'RT 03'],
      kepalaRW: 'Hj. Fahmi Abdullah',
      phone: '0811-2233-4455',
      kkData: [
        {
          noKK: '3271010101230006',
          kepalaKeluarga: 'Fahmi Abdullah',
          address: 'Jl. Flamboyan No. 6',
          rt: 'RT 01',
          anggota: [
            { nama: 'Fahmi Abdullah', hubungan: 'Kepala Keluarga', umur: 42, pekerjaan: 'Pengusaha', pendidikan: 'S1' },
            { nama: 'Lestari Dewi', hubungan: 'Istri', umur: 39, pekerjaan: 'Ibu Rumah Tangga', pendidikan: 'SMA' },
            { nama: 'Agus Abdullah', hubungan: 'Anak', umur: 15, pekerjaan: 'Pelajar', pendidikan: 'SMP' },
            { nama: 'Nila Abdullah', hubungan: 'Anak', umur: 10, pekerjaan: 'Pelajar', pendidikan: 'SD' }
          ]
        }
      ]
    }, {
      id: 4,
      name: 'RW 04',
      population: 290,
      households: 72,
      color: '#ef4444',
      area: 'Jl. Seroja, Jl. Teratai, Jl. Kamboja',
      rt: ['RT 01', 'RT 02'],
      kepalaRW: 'Bpk. Ratna Sari',
      phone: '0821-5566-7788',
      kkData: [
        {
          noKK: '3271010101230007',
          kepalaKeluarga: 'Ratna Sari',
          address: 'Jl. Seroja No. 3',
          rt: 'RT 01',
          anggota: [
            { nama: 'Ratna Sari', hubungan: 'Kepala Keluarga', umur: 45, pekerjaan: 'Guru', pendidikan: 'S1' },
            { nama: 'Bambang Irawan', hubungan: 'Suami', umur: 48, pekerjaan: 'PNS', pendidikan: 'S1' },
            { nama: 'Fitri Irawan', hubungan: 'Anak', umur: 17, pekerjaan: 'Pelajar', pendidikan: 'SMA' }
          ]
        }
      ]
    }, {
      id: 5,
      name: 'RW 05',
      population: 380,
      households: 95,
      color: '#8b5cf6',
      area: 'Jl. Palem, Jl. Bambu, Jl. Kelapa',
      rt: ['RT 01', 'RT 02', 'RT 03'],
      kepalaRW: 'Ibu Hendra Gunawan',
      phone: '0852-1122-3344',
      kkData: [
        {
          noKK: '3271010101230008',
          kepalaKeluarga: 'Hendra Gunawan',
          address: 'Jl. Palem No. 16',
          rt: 'RT 01',
          anggota: [
            { nama: 'Hendra Gunawan', hubungan: 'Kepala Keluarga', umur: 50, pekerjaan: 'Wiraswasta', pendidikan: 'S1' },
            { nama: 'Linda Maryati', hubungan: 'Istri', umur: 47, pekerjaan: 'Ibu Rumah Tangga', pendidikan: 'SMA' },
            { nama: 'Rio Gunawan', hubungan: 'Anak', umur: 24, pekerjaan: 'Karyawan Swasta', pendidikan: 'S1' },
            { nama: 'Tari Gunawan', hubungan: 'Anak', umur: 21, pekerjaan: 'Mahasiswa', pendidikan: 'S1' }
          ]
        }
      ]
    }, {
      id: 6,
      name: 'RW 06',
      population: 310,
      households: 77,
      color: '#06b6d4',
      area: 'Jl. Mangga, Jl. Jeruk, Jl. Apel',
      rt: ['RT 01', 'RT 02'],
      kepalaRW: 'Bpk. Mega Putri',
      phone: '0878-4455-6677',
      kkData: [
        {
          noKK: '3271010101230009',
          kepalaKeluarga: 'Mega Putri',
          address: 'Jl. Mangga No. 21',
          rt: 'RT 01',
          anggota: [
            { nama: 'Mega Putri', hubungan: 'Kepala Keluarga', umur: 38, pekerjaan: 'Pedagang', pendidikan: 'SMA' },
            { nama: 'Andi Setiawan', hubungan: 'Suami', umur: 40, pekerjaan: 'Buruh', pendidikan: 'SMA' },
            { nama: 'Novi Setiawan', hubungan: 'Anak', umur: 13, pekerjaan: 'Pelajar', pendidikan: 'SMP' }
          ]
        }
      ]
    }, {
      id: 7,
      name: 'RW 07',
      population: 340,
      households: 85,
      color: '#84cc16',
      area: 'Jl. Durian, Jl. Rambutan, Jl. Nangka',
      rt: ['RT 01', 'RT 02', 'RT 03'],
      kepalaRW: 'Ibu Galih Pratama',
      phone: '0896-7788-9900',
      kkData: [
        {
          noKK: '3271010101230010',
          kepalaKeluarga: 'Galih Pratama',
          address: 'Jl. Durian No. 30',
          rt: 'RT 01',
          anggota: [
            { nama: 'Galih Pratama', hubungan: 'Kepala Keluarga', umur: 41, pekerjaan: 'Karyawan Swasta', pendidikan: 'S1' },
            { nama: 'Ayu Lestari', hubungan: 'Istri', umur: 38, pekerjaan: 'Ibu Rumah Tangga', pendidikan: 'SMA' },
            { nama: 'Rudi Pratama', hubungan: 'Anak', umur: 16, pekerjaan: 'Pelajar', pendidikan: 'SMA' },
            { nama: 'Sinta Pratama', hubungan: 'Anak', umur: 12, pekerjaan: 'Pelajar', pendidikan: 'SD' }
          ]
        }
      ]
    }, {
      id: 8,
      name: 'RW 08',
      population: 377,
      households: 94,
      color: '#f97316',
      area: 'Jl. Salak, Jl. Jambu, Jl. Belimbing',
      rt: ['RT 01', 'RT 02', 'RT 03'],
      kepalaRW: 'Bpk. Dian Safitri',
      phone: '0838-9900-1122',
      kkData: [
        {
          noKK: '3271010101230011',
          kepalaKeluarga: 'Dian Safitri',
          address: 'Jl. Salak No. 26',
          rt: 'RT 01',
          anggota: [
            { nama: 'Dian Safitri', hubungan: 'Kepala Keluarga', umur: 43, pekerjaan: 'PNS', pendidikan: 'S1' },
            { nama: 'Wahyu Nugroho', hubungan: 'Suami', umur: 45, pekerjaan: 'Dosen', pendidikan: 'S2' },
            { nama: 'Kartika Nugroho', hubungan: 'Anak', umur: 19, pekerjaan: 'Mahasiswa', pendidikan: 'SMA' },
            { nama: 'Bayu Nugroho', hubungan: 'Anak', umur: 15, pekerjaan: 'Pelajar', pendidikan: 'SMP' }
          ]
        }
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
        {rwData.map(rw => (
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
              <Link to={`/rw-detail/${rw.id}`}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-2 text-xs"
                  style={{ color: rw.color }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Eye size={12} className="mr-1" />
                  Lihat Detail
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* Detailed Resident Data */}
      {selectedRW && (
        <Card className="p-6 animate-fade-in">
          {(() => {
            const selectedRwData = rwData.find(rw => rw.id === selectedRW);
            if (!selectedRwData) return null;

            return (
              <>
                {/* RW Header Info */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: selectedRwData.color }}
                    >
                      <span className="text-white font-bold text-xl">{selectedRW}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{selectedRwData.name}</h2>
                      <p className="text-gray-600">Detail Data Penduduk Berdasarkan KK</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Users className="text-blue-500" size={24} />
                      <div>
                        <p className="text-sm text-gray-600">Total Penduduk</p>
                        <p className="text-xl font-bold text-gray-800">{selectedRwData.population}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Home className="text-green-500" size={24} />
                      <div>
                        <p className="text-sm text-gray-600">Jumlah KK</p>
                        <p className="text-xl font-bold text-gray-800">{selectedRwData.households}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <MapPin className="text-orange-500" size={24} />
                      <div>
                        <p className="text-sm text-gray-600">Wilayah</p>
                        <p className="text-sm text-gray-800">{selectedRwData.area}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Phone className="text-purple-500" size={24} />
                      <div>
                        <p className="text-sm text-gray-600">Ketua RW</p>
                        <p className="text-sm font-medium text-gray-800">{selectedRwData.kepalaRW}</p>
                        <p className="text-xs text-gray-600">{selectedRwData.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* KK Data */}
                <h3 className="text-xl font-bold text-gray-800 mb-6">Data Kartu Keluarga</h3>
                
                <div className="space-y-6">
                  {selectedRwData.kkData.map((kk: any, index: number) => (
                    <div key={index} className="border rounded-lg p-6 bg-white shadow-sm">
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">
                            KK: {kk.noKK}
                          </h4>
                          <p className="text-gray-600">Kepala Keluarga: {kk.kepalaKeluarga}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {kk.address}
                            </span>
                            <Badge variant="outline">{kk.rt}</Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Jumlah Anggota</p>
                          <p className="text-2xl font-bold" style={{ color: selectedRwData.color }}>
                            {kk.anggota.length}
                          </p>
                        </div>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Nama</TableHead>
                              <TableHead>Hubungan</TableHead>
                              <TableHead>Umur</TableHead>
                              <TableHead>Pekerjaan</TableHead>
                              <TableHead>Pendidikan</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {kk.anggota.map((anggota: any, idx: number) => (
                              <TableRow key={idx}>
                                <TableCell className="font-medium">{anggota.nama}</TableCell>
                                <TableCell>{anggota.hubungan}</TableCell>
                                <TableCell>{anggota.umur} tahun</TableCell>
                                <TableCell>{anggota.pekerjaan}</TableCell>
                                <TableCell>{anggota.pendidikan}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Link to={`/rw-detail/${selectedRW}`}>
                    <Button 
                      style={{ backgroundColor: selectedRwData.color }}
                      className="text-white"
                    >
                      <ChevronRight size={16} className="mr-2" />
                      Lihat Detail Lengkap
                    </Button>
                  </Link>
                  <Link to="/village-map">
                    <Button variant="outline">
                      <MapPin size={16} className="mr-2" />
                      Lihat di Peta GIS
                    </Button>
                  </Link>
                  <Button variant="outline">
                    <Calendar size={16} className="mr-2" />
                    Cetak Laporan
                  </Button>
                  <Button variant="outline">
                    <Mail size={16} className="mr-2" />
                    Kirim Data
                  </Button>
                </div>
              </>
            );
          })()}
        </Card>
      )}
    </div>
  );
};

export default RWPopulationSection;
