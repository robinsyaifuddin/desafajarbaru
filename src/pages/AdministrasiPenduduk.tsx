
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, FileText, Baby, Heart, UserPlus, Home, Clock, CheckCircle } from 'lucide-react';

const AdministrasiPenduduk = () => {
  const statistikPenduduk = [
    { kategori: 'Total Penduduk', jumlah: '2.847', icon: Users, color: 'bg-blue-500' },
    { kategori: 'Kepala Keluarga', jumlah: '789', icon: Home, color: 'bg-green-500' },
    { kategori: 'Laki-laki', jumlah: '1.456', icon: Users, color: 'bg-indigo-500' },
    { kategori: 'Perempuan', jumlah: '1.391', icon: Users, color: 'bg-pink-500' }
  ];

  const layananAdministrasi = [
    {
      nama: 'Pembuatan KTP Baru',
      deskripsi: 'Layanan pembuatan Kartu Tanda Penduduk untuk penduduk yang belum memiliki',
      persyaratan: ['Surat Pengantar RT/RW', 'Kartu Keluarga', 'Akta Kelahiran', 'Pas Foto 4x6 (2 lembar)'],
      waktu: '14 hari kerja',
      biaya: 'Gratis',
      icon: UserPlus
    },
    {
      nama: 'Kartu Keluarga',
      deskripsi: 'Pembuatan, perubahan, dan pemutakhiran data Kartu Keluarga',
      persyaratan: ['Surat Pengantar RT/RW', 'KTP Kepala Keluarga', 'Akta Nikah/Akta Kelahiran', 'KK Lama (jika ada)'],
      waktu: '7 hari kerja',
      biaya: 'Gratis',
      icon: Home
    },
    {
      nama: 'Akta Kelahiran',
      deskripsi: 'Surat pengantar untuk pembuatan akta kelahiran di Disdukcapil',
      persyaratan: ['Surat Keterangan Lahir dari Bidan/RS', 'KTP Orang Tua', 'KK Orang Tua', 'Akta Nikah Orang Tua'],
      waktu: '3 hari kerja',
      biaya: 'Gratis',
      icon: Baby
    },
    {
      nama: 'Akta Kematian',
      deskripsi: 'Surat pengantar untuk pembuatan akta kematian di Disdukcapil',
      persyaratan: ['Surat Keterangan Kematian dari RS/Puskesmas', 'KTP Almarhum', 'KK Almarhum', 'KTP Pelapor'],
      waktu: '3 hari kerja',
      biaya: 'Gratis',
      icon: FileText
    }
  ];

  const demografiUsia = [
    { kelompok: '0-5 tahun', jumlah: 247, persentase: 8.7 },
    { kelompok: '6-17 tahun', jumlah: 512, persentase: 18.0 },
    { kelompok: '18-35 tahun', jumlah: 856, persentase: 30.1 },
    { kelompok: '36-55 tahun', jumlah: 789, persentase: 27.7 },
    { kelompok: '56+ tahun', jumlah: 443, persentase: 15.5 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Administrasi Kependudukan
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Layanan administrasi kependudukan untuk memudahkan pengurusan dokumen 
              dan data kependudukan masyarakat Desa Fajar Baru
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {statistikPenduduk.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mr-4`}>
                      <stat.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{stat.jumlah}</h3>
                      <p className="text-gray-600 text-sm">{stat.kategori}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Layanan Administrasi Kependudukan
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {layananAdministrasi.map((layanan, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-12 h-12 bg-village-green/20 rounded-full flex items-center justify-center mr-4">
                        <layanan.icon className="text-village-green" size={24} />
                      </div>
                      {layanan.nama}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{layanan.deskripsi}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Persyaratan:</h4>
                        <ul className="space-y-1">
                          {layanan.persyaratan.map((syarat, syaratIndex) => (
                            <li key={syaratIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle size={12} className="text-green-500 mr-2" />
                              {syarat}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t">
                        <div>
                          <span className="text-sm text-gray-500">Waktu Proses:</span>
                          <p className="font-semibold text-gray-800">{layanan.waktu}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Biaya:</span>
                          <p className="font-semibold text-green-600">{layanan.biaya}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4 bg-gradient-village hover:opacity-90">
                      Ajukan Permohonan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Demographics */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Demografi Berdasarkan Usia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {demografiUsia.map((demo, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">{demo.kelompok}</span>
                        <span className="font-semibold">{demo.jumlah} orang ({demo.persentase}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-village-green h-2 rounded-full" 
                          style={{ width: `${demo.persentase * 3}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-3 text-village-blue" size={24} />
                  Jam Pelayanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Lokasi Pelayanan</h4>
                    <p className="text-gray-600">Kantor Desa Fajar Baru<br />Jl. Way Kandis No. 123, Bandar Lampung</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Jam Operasional</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Senin - Kamis</span>
                        <span>08:00 - 15:00 WIB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Jumat</span>
                        <span>08:00 - 11:30 WIB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sabtu - Minggu</span>
                        <span>Tutup</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Kontak</h4>
                    <p className="text-gray-600">
                      Telepon: (0721) 123-4567<br />
                      Email: dukcapil@fajar-baru.desa.id
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Catatan Penting</h4>
                    <p className="text-yellow-700 text-sm">
                      Pastikan semua dokumen asli dan fotocopy sesuai persyaratan. 
                      Untuk dokumen yang diproses di Disdukcapil, waktu dapat lebih lama.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdministrasiPenduduk;
