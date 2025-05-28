
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Heart, Users, Baby, GraduationCap, Home, Utensils, Shield, CheckCircle } from 'lucide-react';

const Bansos = () => {
  const programBansos = [
    {
      nama: 'Program Keluarga Harapan (PKH)',
      penerima: 156,
      anggaran: 234000000,
      realisasi: 175500000,
      persentase: 75.0,
      deskripsi: 'Bantuan tunai bersyarat untuk keluarga miskin',
      icon: Heart,
      color: 'bg-red-500',
      kriteria: ['Keluarga sangat miskin', 'Memiliki anak balita/sekolah', 'Ibu hamil/menyusui']
    },
    {
      nama: 'Bantuan Pangan Non Tunai (BPNT)',
      penerima: 203,
      anggaran: 152250000,
      realisasi: 152250000,
      persentase: 100.0,
      deskripsi: 'Bantuan beras dan telur untuk keluarga miskin',
      icon: Utensils,
      color: 'bg-green-500',
      kriteria: ['Terdaftar di DTKS', 'Keluarga miskin', 'Punya KTP dan KK']
    },
    {
      nama: 'Program Indonesia Pintar (PIP)',
      penerima: 89,
      anggaran: 89000000,
      realisasi: 71200000,
      persentase: 80.0,
      deskripsi: 'Bantuan pendidikan untuk anak sekolah',
      icon: GraduationCap,
      color: 'bg-blue-500',
      kriteria: ['Siswa dari keluarga miskin', 'Usia sekolah 6-21 tahun', 'Terdaftar di sekolah']
    },
    {
      nama: 'Bantuan Iuran JKN (BI-JKN)',
      penerima: 445,
      anggaran: 133500000,
      realisasi: 133500000,
      persentase: 100.0,
      deskripsi: 'Bantuan iuran BPJS Kesehatan',
      icon: Shield,
      color: 'bg-purple-500',
      kriteria: ['Tidak mampu bayar iuran', 'WNI', 'Terdaftar di DTKS']
    },
    {
      nama: 'Bantuan Stimulan Perumahan Swadaya (BSPS)',
      penerima: 12,
      anggaran: 180000000,
      realisasi: 144000000,
      persentase: 80.0,
      deskripsi: 'Bantuan perbaikan rumah tidak layak huni',
      icon: Home,
      color: 'bg-orange-500',
      kriteria: ['Rumah tidak layak huni', 'Keluarga miskin', 'Luas tanah minimum 60m²']
    },
    {
      nama: 'Bantuan Sosial Lansia',
      penerima: 67,
      anggaran: 80400000,
      realisasi: 60300000,
      persentase: 75.0,
      deskripsi: 'Bantuan untuk lansia terlantar',
      icon: Users,
      color: 'bg-indigo-500',
      kriteria: ['Usia 60 tahun ke atas', 'Tidak ada yang menanggung', 'Kondisi terlantar']
    }
  ];

  const distribusiPenerima = [
    { kategori: 'RT 01', jumlah: 145, persentase: 15.8 },
    { kategori: 'RT 02', jumlah: 132, persentase: 14.4 },
    { kategori: 'RT 03', jumlah: 158, persentase: 17.2 },
    { kategori: 'RT 04', jumlah: 121, persentase: 13.2 },
    { kategori: 'RT 05', jumlah: 167, persentase: 18.2 },
    { kategori: 'RT 06', jumlah: 134, persentase: 14.6 },
    { kategori: 'RT 07', jumlah: 61, persentase: 6.6 }
  ];

  const trendBansos = [
    { tahun: '2020', total: 678, anggaran: 750000000 },
    { tahun: '2021', total: 756, anggaran: 845000000 },
    { tahun: '2022', total: 834, anggaran: 920000000 },
    { tahun: '2023', total: 912, anggaran: 1050000000 },
    { tahun: '2024', total: 972, anggaran: 1169150000 }
  ];

  const COLORS = ['#EF4444', '#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#6366F1'];

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka);
  };

  const totalPenerima = programBansos.reduce((sum, program) => sum + program.penerima, 0);
  const totalAnggaran = programBansos.reduce((sum, program) => sum + program.anggaran, 0);
  const totalRealisasi = programBansos.reduce((sum, program) => sum + program.realisasi, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Bantuan Sosial Desa Fajar Baru
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Transparansi penyaluran bantuan sosial untuk masyarakat kurang mampu 
              dalam rangka peningkatan kesejahteraan dan pengentasan kemiskinan
            </p>
          </div>

          {/* Summary Card */}
          <Card className="mb-8 bg-gradient-to-r from-red-500 to-pink-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Heart className="mr-3" size={32} />
                Ringkasan Bansos 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-3xl font-bold">{totalPenerima.toLocaleString()}</h3>
                  <p className="opacity-90">Total Penerima</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{formatRupiah(totalAnggaran)}</h3>
                  <p className="opacity-90">Total Anggaran</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{((totalRealisasi/totalAnggaran)*100).toFixed(1)}%</h3>
                  <p className="opacity-90">Tingkat Realisasi</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Program Bantuan Sosial
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {programBansos.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className={`w-12 h-12 ${program.color} rounded-full flex items-center justify-center mr-4`}>
                        <program.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg">{program.nama}</h3>
                        <p className="text-sm text-gray-500">{program.deskripsi}</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-800">{program.penerima}</h4>
                          <p className="text-sm text-gray-600">Penerima</p>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-green-600">{program.persentase}%</h4>
                          <p className="text-sm text-gray-600">Realisasi</p>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Anggaran</span>
                          <span className="font-semibold">{formatRupiah(program.anggaran)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Realisasi</span>
                          <span className="font-semibold text-green-600">{formatRupiah(program.realisasi)}</span>
                        </div>
                        <Progress value={program.persentase} className="h-2" />
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Kriteria Penerima:</h4>
                        <ul className="space-y-1">
                          {program.kriteria.map((kriteria, kriteriaIndex) => (
                            <li key={kriteriaIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle size={12} className="text-green-500 mr-2" />
                              {kriteria}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Distribusi Penerima Per RT</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={distribusiPenerima}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ kategori, persentase }) => `${kategori}: ${persentase}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="jumlah"
                    >
                      {distribusiPenerima.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  {distribusiPenerima.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <span>{item.kategori}: {item.jumlah} KK</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trend Bantuan Sosial</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={trendBansos}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tahun" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value/1000000000}M`} />
                    <Tooltip 
                      formatter={(value, name) => {
                        if (name === 'total') return [value.toLocaleString(), 'Penerima'];
                        return [formatRupiah(value), 'Anggaran'];
                      }}
                    />
                    <Bar yAxisId="left" dataKey="total" fill="#EF4444" name="total" />
                    <Bar yAxisId="right" dataKey="anggaran" fill="#3B82F6" name="anggaran" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Process Information */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Baby className="mr-3 text-village-green" size={24} />
                  Alur Pendaftaran Bansos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="bg-village-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <div>
                      <h4 className="font-semibold">Pendataan</h4>
                      <p className="text-sm text-gray-600">RT/RW melakukan pendataan calon penerima</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-village-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <div>
                      <h4 className="font-semibold">Verifikasi</h4>
                      <p className="text-sm text-gray-600">Perangkat desa melakukan verifikasi data</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-village-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <div>
                      <h4 className="font-semibold">Penetapan</h4>
                      <p className="text-sm text-gray-600">Kepala desa menetapkan daftar penerima</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-village-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <div>
                      <h4 className="font-semibold">Penyaluran</h4>
                      <p className="text-sm text-gray-600">Bantuan disalurkan sesuai jadwal</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-village-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    <div>
                      <h4 className="font-semibold">Monitoring</h4>
                      <p className="text-sm text-gray-600">Evaluasi dan monitoring penerima</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-3 text-village-blue" size={24} />
                  Kontak & Informasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Penanggung Jawab Bansos</h4>
                  <p className="text-gray-600">Ibu Sari Dewi, S.Sos</p>
                  <p className="text-sm text-gray-500">Seksi Kesejahteraan</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Lokasi Pendaftaran</h4>
                  <p className="text-gray-600">Kantor Desa Fajar Baru<br />Jl. Way Kandis No. 123, Bandar Lampung</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Jam Pelayanan</h4>
                  <p className="text-gray-600">
                    Senin - Kamis: 08:00 - 15:00 WIB<br />
                    Jumat: 08:00 - 11:30 WIB
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Kontak</h4>
                  <p className="text-gray-600">
                    Telepon: (0721) 123-4567<br />
                    WhatsApp: 0812-3456-7890<br />
                    Email: bansos@fajar-baru.desa.id
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Pengaduan</h4>
                  <p className="text-blue-700 text-sm">
                    Jika ada keluhan atau masukan tentang penyaluran bantuan sosial, 
                    silakan hubungi nomor pengaduan di atas atau datang langsung ke kantor desa.
                  </p>
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

export default Bansos;
