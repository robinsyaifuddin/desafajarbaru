
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Clock, Eye, Users, Shield, Phone, Mail } from 'lucide-react';

const PPID = () => {
  const informasiPublik = [
    {
      kategori: 'Profil Desa',
      dokumen: [
        { nama: 'Sejarah Desa Fajar Baru', ukuran: '2.3 MB', format: 'PDF' },
        { nama: 'Visi Misi Desa', ukuran: '1.2 MB', format: 'PDF' },
        { nama: 'Struktur Organisasi', ukuran: '3.1 MB', format: 'PDF' }
      ]
    },
    {
      kategori: 'Peraturan Desa',
      dokumen: [
        { nama: 'Perdes No. 1/2024 tentang APB Desa', ukuran: '4.5 MB', format: 'PDF' },
        { nama: 'Perdes No. 2/2024 tentang Retribusi', ukuran: '2.8 MB', format: 'PDF' },
        { nama: 'SK Kepala Desa tentang BPD', ukuran: '1.9 MB', format: 'PDF' }
      ]
    },
    {
      kategori: 'Laporan Keuangan',
      dokumen: [
        { nama: 'Laporan Realisasi APB Desa 2023', ukuran: '5.2 MB', format: 'PDF' },
        { nama: 'Laporan Keuangan Semester I 2024', ukuran: '3.7 MB', format: 'PDF' },
        { nama: 'Laporan Aset Desa 2023', ukuran: '2.1 MB', format: 'PDF' }
      ]
    }
  ];

  const layananPPID = [
    {
      nama: 'Permohonan Informasi Rutin',
      deskripsi: 'Informasi yang wajib disediakan dan diumumkan secara berkala',
      waktu: '1-3 hari kerja',
      biaya: 'Gratis',
      icon: Clock
    },
    {
      nama: 'Permohonan Informasi Serta Merta',
      deskripsi: 'Informasi yang dapat mengancam hajat hidup orang banyak',
      waktu: 'Segera',
      biaya: 'Gratis',
      icon: Eye
    },
    {
      nama: 'Permohonan Informasi Setiap Saat',
      deskripsi: 'Informasi yang harus disediakan oleh badan publik di luar informasi berkala',
      waktu: '10-14 hari kerja',
      biaya: 'Sesuai tarif',
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              PPID - Pejabat Pengelola Informasi dan Dokumentasi
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Portal transparansi informasi publik Desa Fajar Baru sesuai dengan 
              Undang-Undang No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik
            </p>
          </div>

          {/* PPID Info Card */}
          <Card className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Shield className="mr-3" size={32} />
                Komitmen Keterbukaan Informasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users size={32} className="mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">Transparansi</h3>
                  <p className="opacity-90">Keterbukaan informasi untuk masyarakat</p>
                </div>
                <div className="text-center">
                  <FileText size={32} className="mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">Akuntabilitas</h3>
                  <p className="opacity-90">Pertanggungjawaban penggunaan dana</p>
                </div>
                <div className="text-center">
                  <Shield size={32} className="mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">Partisipasi</h3>
                  <p className="opacity-90">Keterlibatan masyarakat dalam pembangunan</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Layanan Informasi Publik
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {layananPPID.map((layanan, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <layanan.icon className="text-blue-600" size={24} />
                      </div>
                      <h3 className="font-semibold text-gray-800">{layanan.nama}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{layanan.deskripsi}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Waktu Proses:</span>
                        <span className="font-medium">{layanan.waktu}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Biaya:</span>
                        <span className="font-medium text-green-600">{layanan.biaya}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Document Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Informasi Publik yang Tersedia
            </h2>
            <div className="space-y-6">
              {informasiPublik.map((kategori, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800">{kategori.kategori}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {kategori.dokumen.map((dok, docIndex) => (
                        <div key={docIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="text-blue-600" size={20} />
                            <div>
                              <h4 className="font-medium text-gray-800">{dok.nama}</h4>
                              <p className="text-sm text-gray-500">{dok.format} • {dok.ukuran}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye size={16} className="mr-1" />
                              Lihat
                            </Button>
                            <Button size="sm" className="bg-village-green hover:bg-village-green/90">
                              <Download size={16} className="mr-1" />
                              Unduh
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-3 text-village-green" size={24} />
                  Kontak PPID
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Pejabat Pengelola Informasi dan Dokumentasi</h4>
                  <p className="text-gray-600">Budi Santoso, S.Sos</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Alamat</h4>
                  <p className="text-gray-600">Kantor Desa Fajar Baru<br />Jl. Way Kandis No. 123, Bandar Lampung</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Kontak</h4>
                  <p className="text-gray-600">Telepon: (0721) 123-4567</p>
                  <p className="text-gray-600">Email: ppid@fajar-baru.desa.id</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Jam Layanan</h4>
                  <p className="text-gray-600">Senin - Kamis: 08:00 - 15:00 WIB<br />Jumat: 08:00 - 11:30 WIB</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-3 text-village-blue" size={24} />
                  Cara Mengajukan Permohonan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex">
                    <span className="bg-village-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <span>Isi formulir permohonan informasi yang tersedia di kantor desa</span>
                  </li>
                  <li className="flex">
                    <span className="bg-village-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <span>Lampirkan fotocopy KTP dan dokumen pendukung lainnya</span>
                  </li>
                  <li className="flex">
                    <span className="bg-village-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <span>Serahkan ke petugas PPID di kantor desa</span>
                  </li>
                  <li className="flex">
                    <span className="bg-village-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <span>Tunggu proses sesuai jenis informasi yang diminta</span>
                  </li>
                  <li className="flex">
                    <span className="bg-village-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    <span>Ambil informasi yang diminta sesuai jadwal yang diberikan</span>
                  </li>
                </ol>
                <Button className="w-full mt-6 bg-gradient-village hover:opacity-90">
                  Download Formulir Permohonan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PPID;
