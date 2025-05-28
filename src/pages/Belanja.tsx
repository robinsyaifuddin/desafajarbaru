
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Building, Wrench, Users, BookOpen, Shield, Calendar } from 'lucide-react';

const Belanja = () => {
  const belanjaBidang = [
    {
      bidang: 'Penyelenggaraan Pemerintah Desa',
      anggaran: 825000000,
      realisasi: 618750000,
      persentase: 75.0,
      icon: Building,
      color: 'bg-blue-500',
      kegiatan: [
        { nama: 'Operasional Pemerintahan', anggaran: 450000000, realisasi: 337500000 },
        { nama: 'Honorarium Perangkat', anggaran: 300000000, realisasi: 225000000 },
        { nama: 'Perjalanan Dinas', anggaran: 75000000, realisasi: 56250000 }
      ]
    },
    {
      bidang: 'Pelaksanaan Pembangunan Desa',
      anggaran: 962500000,
      realisasi: 770000000,
      persentase: 80.0,
      icon: Wrench,
      color: 'bg-green-500',
      kegiatan: [
        { nama: 'Infrastruktur Jalan', anggaran: 500000000, realisasi: 400000000 },
        { nama: 'Saluran Drainase', anggaran: 250000000, realisasi: 200000000 },
        { nama: 'Fasilitas MCK', anggaran: 212500000, realisasi: 170000000 }
      ]
    },
    {
      bidang: 'Pembinaan Kemasyarakatan',
      anggaran: 412500000,
      realisasi: 309375000,
      persentase: 75.0,
      icon: Users,
      color: 'bg-purple-500',
      kegiatan: [
        { nama: 'Kegiatan Sosial', anggaran: 200000000, realisasi: 150000000 },
        { nama: 'Olahraga dan Seni', anggaran: 112500000, realisasi: 84375000 },
        { nama: 'Keamanan dan Ketertiban', anggaran: 100000000, realisasi: 75000000 }
      ]
    },
    {
      bidang: 'Pemberdayaan Masyarakat',
      anggaran: 275000000,
      realisasi: 220000000,
      persentase: 80.0,
      icon: BookOpen,
      color: 'bg-orange-500',
      kegiatan: [
        { nama: 'Pelatihan Keterampilan', anggaran: 150000000, realisasi: 120000000 },
        { nama: 'UMKM dan Koperasi', anggaran: 75000000, realisasi: 60000000 },
        { nama: 'Kelompok Tani', anggaran: 50000000, realisasi: 40000000 }
      ]
    },
    {
      bidang: 'Penanggulangan Bencana',
      anggaran: 137500000,
      realisasi: 68750000,
      persentase: 50.0,
      icon: Shield,
      color: 'bg-red-500',
      kegiatan: [
        { nama: 'Tanggap Darurat', anggaran: 75000000, realisasi: 37500000 },
        { nama: 'Mitigasi Bencana', anggaran: 62500000, realisasi: 31250000 }
      ]
    }
  ];

  const trendBelanja = [
    { tahun: '2020', belanja: 2100000000 },
    { tahun: '2021', belanja: 2350000000 },
    { tahun: '2022', belanja: 2500000000 },
    { tahun: '2023', belanja: 2650000000 },
    { tahun: '2024', belanja: 2750000000 }
  ];

  const realisasiBulanan = [
    { bulan: 'Jan', target: 8.3, realisasi: 6.2 },
    { bulan: 'Feb', target: 16.6, realisasi: 14.8 },
    { bulan: 'Mar', target: 25.0, realisasi: 22.1 },
    { bulan: 'Apr', target: 33.3, realisasi: 31.5 },
    { bulan: 'Mei', target: 41.6, realisasi: 39.8 },
    { bulan: 'Jun', target: 50.0, realisasi: 48.3 },
    { bulan: 'Jul', target: 58.3, realisasi: 56.7 },
    { bulan: 'Agt', target: 66.6, realisasi: 64.2 }
  ];

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka);
  };

  const totalAnggaran = belanjaBidang.reduce((sum, item) => sum + item.anggaran, 0);
  const totalRealisasi = belanjaBidang.reduce((sum, item) => sum + item.realisasi, 0);
  const persentaseTotal = (totalRealisasi / totalAnggaran) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Belanja Desa Fajar Baru
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Transparansi penggunaan anggaran belanja desa untuk pembangunan dan pelayanan 
              masyarakat Desa Fajar Baru tahun anggaran 2024
            </p>
          </div>

          {/* Summary Card */}
          <Card className="mb-8 bg-gradient-to-r from-village-green to-village-blue text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calendar className="mr-3" size={32} />
                Ringkasan Belanja 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-3xl font-bold">{formatRupiah(totalAnggaran)}</h3>
                  <p className="opacity-90">Total Anggaran</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{formatRupiah(totalRealisasi)}</h3>
                  <p className="opacity-90">Total Realisasi</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{persentaseTotal.toFixed(1)}%</h3>
                  <p className="opacity-90">Persentase Realisasi</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Spending by Field */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Belanja Per Bidang
            </h2>
            <div className="space-y-6">
              {belanjaBidang.map((bidang, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 ${bidang.color} rounded-full flex items-center justify-center mr-4`}>
                          <bidang.icon className="text-white" size={24} />
                        </div>
                        {bidang.bidang}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Realisasi</div>
                        <div className="font-bold text-lg">{bidang.persentase}%</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Anggaran</span>
                          <span className="font-semibold">{formatRupiah(bidang.anggaran)}</span>
                        </div>
                        <div className="flex justify-between mb-4">
                          <span className="text-gray-600">Realisasi</span>
                          <span className="font-semibold text-green-600">{formatRupiah(bidang.realisasi)}</span>
                        </div>
                        <Progress value={bidang.persentase} className="h-3" />
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Detail Kegiatan:</h4>
                        <div className="space-y-2">
                          {bidang.kegiatan.map((kegiatan, kegIndex) => (
                            <div key={kegIndex} className="flex justify-between text-sm">
                              <span className="text-gray-600">{kegiatan.nama}</span>
                              <span className="font-medium">{formatRupiah(kegiatan.realisasi)}</span>
                            </div>
                          ))}
                        </div>
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
                <CardTitle>Trend Belanja Desa (2020-2024)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendBelanja}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tahun" />
                    <YAxis tickFormatter={(value) => `${value / 1000000000}M`} />
                    <Tooltip formatter={(value) => [formatRupiah(value), 'Belanja']} />
                    <Line 
                      type="monotone" 
                      dataKey="belanja" 
                      stroke="#22C55E" 
                      strokeWidth={3}
                      dot={{ fill: '#22C55E', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Realisasi vs Target Bulanan (%)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={realisasiBulanan}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bulan" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}%`, '']} />
                    <Bar dataKey="target" fill="#94A3B8" name="Target" />
                    <Bar dataKey="realisasi" fill="#3B82F6" name="Realisasi" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Performance Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Analisis Kinerja Belanja</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-600">80%+</h3>
                  <p className="text-green-700">Bidang dengan realisasi baik</p>
                  <p className="text-sm text-green-600 mt-2">Pembangunan & Pemberdayaan</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-yellow-600">75%</h3>
                  <p className="text-yellow-700">Realisasi standar</p>
                  <p className="text-sm text-yellow-600 mt-2">Pemerintahan & Kemasyarakatan</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-red-600">50%</h3>
                  <p className="text-red-700">Perlu peningkatan</p>
                  <p className="text-sm text-red-600 mt-2">Penanggulangan Bencana</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600">75.1%</h3>
                  <p className="text-blue-700">Rata-rata realisasi</p>
                  <p className="text-sm text-blue-600 mt-2">Semua bidang</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Rekomendasi Perbaikan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-700">Penanggulangan Bencana</h4>
                  <p className="text-gray-600">Realisasi 50% menunjukkan perlu percepatan program mitigasi dan kesiapsiagaan bencana</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-700">Pembinaan Kemasyarakatan</h4>
                  <p className="text-gray-600">Tingkatkan partisipasi masyarakat dalam kegiatan sosial dan budaya</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700">Pembangunan Infrastruktur</h4>
                  <p className="text-gray-600">Realisasi 80% menunjukkan kinerja baik, pertahankan momentum pembangunan</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-700">Pemberdayaan Masyarakat</h4>
                  <p className="text-gray-600">Program pelatihan dan UMKM berjalan baik, tingkatkan variasi program</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Belanja;
