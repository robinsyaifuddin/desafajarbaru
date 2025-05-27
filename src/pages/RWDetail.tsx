
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Users, Home, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const RWDetail = () => {
  const { rwId } = useParams();
  
  // Extended resident data with KK information
  const rwDetailData: Record<string, any> = {
    '1': {
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
    },
    '2': {
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
        }
      ]
    }
  };

  const rwData = rwDetailData[rwId || '1'];

  if (!rwData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">RW Tidak Ditemukan</h1>
            <Link to="/infographics">
              <Button>
                <ArrowLeft size={16} className="mr-2" />
                Kembali ke Infografis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Link to="/infographics">
              <Button variant="outline" className="mb-4">
                <ArrowLeft size={16} className="mr-2" />
                Kembali ke Infografis
              </Button>
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: rwData.color }}
              >
                <span className="text-white font-bold text-xl">{rwId}</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{rwData.name}</h1>
                <p className="text-gray-600">Detail Data Penduduk Berdasarkan KK</p>
              </div>
            </div>
          </div>

          {/* RW Info */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-blue-500" size={24} />
                <h3 className="font-semibold">Total Penduduk</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{rwData.population}</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Home className="text-green-500" size={24} />
                <h3 className="font-semibold">Jumlah KK</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{rwData.households}</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-orange-500" size={24} />
                <h3 className="font-semibold">Wilayah</h3>
              </div>
              <p className="text-sm text-gray-600">{rwData.area}</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="text-purple-500" size={24} />
                <h3 className="font-semibold">Ketua RW</h3>
              </div>
              <p className="text-sm font-medium">{rwData.kepalaRW}</p>
              <p className="text-sm text-gray-600">{rwData.phone}</p>
            </Card>
          </div>

          {/* KK Data */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Data Kartu Keluarga</h2>
            
            <div className="space-y-8">
              {rwData.kkData.map((kk: any, index: number) => (
                <div key={index} className="border rounded-lg p-6 bg-white">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        KK: {kk.noKK}
                      </h3>
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
                      <p className="text-2xl font-bold" style={{ color: rwData.color }}>
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
          </Card>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/village-map">
              <Button 
                style={{ backgroundColor: rwData.color }}
                className="text-white"
              >
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RWDetail;
