
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, Building, Users, FileText, Download } from 'lucide-react';

const APBDesa = () => {
  const ringkasanAPB = {
    totalPendapatan: 2850000000,
    totalBelanja: 2750000000,
    sisaLebih: 100000000
  };

  const pendapatanData = [
    { sumber: 'Dana Desa', jumlah: 1200000000, persentase: 42.1, color: '#3B82F6' },
    { sumber: 'Alokasi Dana Desa', jumlah: 850000000, persentase: 29.8, color: '#10B981' },
    { sumber: 'Bagi Hasil Pajak', jumlah: 450000000, persentase: 15.8, color: '#F59E0B' },
    { sumber: 'PADesa', jumlah: 200000000, persentase: 7.0, color: '#EF4444' },
    { sumber: 'Bantuan Provinsi', jumlah: 150000000, persentase: 5.3, color: '#8B5CF6' }
  ];

  const belanjaData = [
    { bidang: 'Penyelenggaraan Pemerintah Desa', jumlah: 825000000, persentase: 30.0 },
    { bidang: 'Pelaksanaan Pembangunan Desa', jumlah: 962500000, persentase: 35.0 },
    { bidang: 'Pembinaan Kemasyarakatan', jumlah: 412500000, persentase: 15.0 },
    { bidang: 'Pemberdayaan Masyarakat', jumlah: 275000000, persentase: 10.0 },
    { bidang: 'Penanggulangan Bencana', jumlah: 137500000, persentase: 5.0 },
    { bidang: 'Tak Terduga', jumlah: 137500000, persentase: 5.0 }
  ];

  const realisasiData = [
    { bulan: 'Jan', pendapatan: 15, belanja: 12 },
    { bulan: 'Feb', pendapatan: 25, belanja: 18 },
    { bulan: 'Mar', pendapatan: 35, belanja: 28 },
    { bulan: 'Apr', pendapatan: 45, belanja: 38 },
    { bulan: 'Mei', pendapatan: 55, belanja: 48 },
    { bulan: 'Jun', pendapatan: 65, belanja: 58 },
    { bulan: 'Jul', pendapatan: 72, belanja: 65 },
    { bulan: 'Agt', pendapatan: 78, belanja: 72 }
  ];

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              APB Desa - Anggaran Pendapatan dan Belanja Desa
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Transparansi pengelolaan keuangan Desa Fajar Baru tahun anggaran 2024 
              untuk mewujudkan tata kelola pemerintahan yang baik dan akuntabel
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold opacity-90">Total Pendapatan</h3>
                    <p className="text-3xl font-bold">{formatRupiah(ringkasanAPB.totalPendapatan)}</p>
                  </div>
                  <TrendingUp size={48} className="opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold opacity-90">Total Belanja</h3>
                    <p className="text-3xl font-bold">{formatRupiah(ringkasanAPB.totalBelanja)}</p>
                  </div>
                  <DollarSign size={48} className="opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold opacity-90">Sisa Lebih</h3>
                    <p className="text-3xl font-bold">{formatRupiah(ringkasanAPB.sisaLebih)}</p>
                  </div>
                  <Building size={48} className="opacity-80" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Revenue Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Komposisi Pendapatan Desa 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pendapatanData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ sumber, persentase }) => `${sumber}: ${persentase}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="jumlah"
                    >
                      {pendapatanData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => formatRupiah(value)} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {pendapatanData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-sm text-gray-600">{item.sumber}</span>
                      </div>
                      <span className="text-sm font-semibold">{formatRupiah(item.jumlah)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Spending by Category */}
            <Card>
              <CardHeader>
                <CardTitle>Belanja Desa Per Bidang</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {belanjaData.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">{item.bidang}</span>
                        <span className="text-sm font-semibold">{formatRupiah(item.jumlah)}</span>
                      </div>
                      <Progress value={item.persentase} className="h-2" />
                      <div className="text-right text-xs text-gray-500 mt-1">{item.persentase}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Realization Chart */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Realisasi Pendapatan dan Belanja (% Kumulatif)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={realisasiData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="bulan" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, '']} />
                  <Bar dataKey="pendapatan" fill="#10B981" name="Pendapatan" />
                  <Bar dataKey="belanja" fill="#3B82F6" name="Belanja" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Documents */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-3 text-village-green" size={24} />
                  Dokumen APB Desa 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { nama: 'Peraturan Desa tentang APB Desa 2024', ukuran: '4.2 MB' },
                    { nama: 'Rencana Kerja Pemerintah Desa 2024', ukuran: '3.8 MB' },
                    { nama: 'Laporan Realisasi APB Desa Semester I', ukuran: '2.1 MB' },
                    { nama: 'Laporan Pertanggungjawaban Kepala Desa', ukuran: '5.3 MB' }
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-800">{doc.nama}</h4>
                        <p className="text-sm text-gray-500">PDF • {doc.ukuran}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-village-green hover:bg-village-green hover:text-white rounded transition-colors">
                          <Download size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-3 text-village-blue" size={24} />
                  Tim Pengelola Keuangan Desa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-800">Kepala Desa</h4>
                    <p className="text-gray-600">Ahmad Fauzi, S.Sos</p>
                    <p className="text-sm text-gray-500">Penanggung Jawab</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-800">Sekretaris Desa</h4>
                    <p className="text-gray-600">Siti Nurhaliza, S.AP</p>
                    <p className="text-sm text-gray-500">Koordinator Pelaksana</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-800">Bendahara Desa</h4>
                    <p className="text-gray-600">Bambang Wijaya, S.E</p>
                    <p className="text-sm text-gray-500">Pengelola Keuangan</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ketua BPD</h4>
                    <p className="text-gray-600">Hendra Kurniawan</p>
                    <p className="text-sm text-gray-500">Pengawas</p>
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

export default APBDesa;
