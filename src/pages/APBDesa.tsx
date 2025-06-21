
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { 
  DollarSign, 
  TrendingUp, 
  FileText, 
  Download, 
  Building, 
  Users, 
  Leaf,
  GraduationCap,
  Heart,
  Shield,
  Calendar,
  PiggyBank,
  Calculator,
  Target
} from 'lucide-react';

const APBDesa = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  
  const budgetSummary = {
    totalPendapatan: 2847500000,
    totalBelanja: 2689200000,
    sisaAnggaran: 158300000,
    realisasiPendapatan: 85.6,
    realisasiBelanja: 78.3
  };

  const pendapatanData = [
    { 
      kategori: 'Dana Desa', 
      anggaran: 1200000000, 
      realisasi: 1080000000, 
      persentase: 42.1,
      color: '#22c55e',
      sumber: 'APBN'
    },
    { 
      kategori: 'Alokasi Dana Desa', 
      anggaran: 850000000, 
      realisasi: 765000000, 
      persentase: 29.9,
      color: '#3b82f6',
      sumber: 'APBD Kabupaten'
    },
    { 
      kategori: 'Bagi Hasil Pajak', 
      anggaran: 420000000, 
      realisasi: 378000000, 
      persentase: 14.7,
      color: '#f59e0b',
      sumber: 'APBD Kabupaten'
    },
    { 
      kategori: 'PAD', 
      anggaran: 277500000, 
      realisasi: 234000000, 
      persentase: 9.7,
      color: '#ef4444',
      sumber: 'Desa'
    },
    { 
      kategori: 'Lain-lain', 
      anggaran: 100000000, 
      realisasi: 78000000, 
      persentase: 3.6,
      color: '#8b5cf6',
      sumber: 'Hibah/Bantuan'
    }
  ];

  const belanjaData = [
    {
      bidang: 'Pembangunan',
      anggaran: 1075000000,
      realisasi: 834000000,
      persentase: 40.0,
      color: '#22c55e',
      kegiatan: [
        'Pembangunan Jalan Desa',
        'Pembangunan Jembatan',
        'Rehabilitasi Fasilitas Umum'
      ]
    },
    {
      bidang: 'Pemberdayaan Masyarakat',
      anggaran: 538000000,
      realisasi: 456000000,
      persentase: 20.0,
      color: '#3b82f6',
      kegiatan: [
        'Pelatihan UMKM',
        'Bantuan Modal Usaha',
        'Program Keterampilan'
      ]
    },
    {
      bidang: 'Penyelenggaraan Pemerintahan',
      anggaran: 484000000,
      realisasi: 421000000,
      persentase: 18.0,
      color: '#f59e0b',
      kegiatan: [
        'Operasional Pemerintahan',
        'Honorarium Perangkat',
        'Administrasi Umum'
      ]
    },
    {
      bidang: 'Kemasyarakatan',
      anggaran: 323000000,
      realisasi: 267000000,
      persentase: 12.0,
      color: '#ef4444',
      kegiatan: [
        'Kegiatan Sosial',
        'Olahraga dan Seni',
        'Keagamaan'
      ]
    },
    {
      bidang: 'Pembinaan',
      anggaran: 269000000,
      realisasi: 198000000,
      persentase: 10.0,
      color: '#8b5cf6',
      kegiatan: [
        'Pembinaan BPD',
        'Pembinaan RT/RW',
        'Pembinaan Kelembagaan'
      ]
    }
  ];

  const trendData = [
    { tahun: 2020, pendapatan: 2100000000, belanja: 1980000000 },
    { tahun: 2021, pendapatan: 2350000000, belanja: 2180000000 },
    { tahun: 2022, pendapatan: 2580000000, belanja: 2420000000 },
    { tahun: 2023, pendapatan: 2720000000, belanja: 2580000000 },
    { tahun: 2024, pendapatan: 2847500000, belanja: 2689200000 }
  ];

  const programUnggulan = [
    {
      nama: 'Pembangunan Jalan Desa Berkelanjutan',
      anggaran: 450000000,
      realisasi: 378000000,
      progress: 84,
      status: 'Berjalan',
      target: 'Q4 2024',
      icon: Building
    },
    {
      nama: 'Program Pemberdayaan UMKM Terpadu',
      anggaran: 320000000,
      realisasi: 256000000,
      progress: 80,
      status: 'Berjalan',
      target: 'Q4 2024',
      icon: Users
    },
    {
      nama: 'Konservasi Lingkungan Hidup',
      anggaran: 180000000,
      realisasi: 162000000,
      progress: 90,
      status: 'Berjalan',
      target: 'Q3 2024',
      icon: Leaf
    },
    {
      nama: 'Peningkatan Kualitas Pendidikan',
      anggaran: 240000000,
      realisasi: 192000000,
      progress: 80,
      status: 'Berjalan',
      target: 'Q4 2024',
      icon: GraduationCap
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
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
              Transparansi pengelolaan keuangan desa untuk pembangunan berkelanjutan 
              dan kesejahteraan masyarakat Desa Fajar Baru
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Total Pendapatan</h3>
                    <p className="text-2xl font-bold text-gray-800">
                      {formatCurrency(budgetSummary.totalPendapatan)}
                    </p>
                    <p className="text-xs text-green-600">
                      Realisasi: {budgetSummary.realisasiPendapatan}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <DollarSign className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Total Belanja</h3>
                    <p className="text-2xl font-bold text-gray-800">
                      {formatCurrency(budgetSummary.totalBelanja)}
                    </p>
                    <p className="text-xs text-blue-600">
                      Realisasi: {budgetSummary.realisasiBelanja}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <PiggyBank className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Sisa Anggaran</h3>
                    <p className="text-2xl font-bold text-gray-800">
                      {formatCurrency(budgetSummary.sisaAnggaran)}
                    </p>
                    <p className="text-xs text-orange-600">
                      5.6% dari total
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Target className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Efisiensi</h3>
                    <p className="text-2xl font-bold text-gray-800">94.4%</p>
                    <p className="text-xs text-purple-600">
                      Penggunaan anggaran
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full lg:w-fit lg:grid-cols-5 bg-white border rounded-lg p-1">
              <TabsTrigger value="overview" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Ringkasan
              </TabsTrigger>
              <TabsTrigger value="income" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Pendapatan
              </TabsTrigger>
              <TabsTrigger value="expenses" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Belanja
              </TabsTrigger>
              <TabsTrigger value="programs" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Program
              </TabsTrigger>
              <TabsTrigger value="reports" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Laporan
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Tren Anggaran 5 Tahun Terakhir</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={trendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="tahun" />
                        <YAxis />
                        <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                        <Line 
                          type="monotone" 
                          dataKey="pendapatan" 
                          stroke="#22c55e" 
                          strokeWidth={3}
                          name="Pendapatan"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="belanja" 
                          stroke="#3b82f6" 
                          strokeWidth={3}
                          name="Belanja"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Komposisi Pendapatan 2024</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={pendapatanData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="anggaran"
                        >
                          {pendapatanData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="mt-4 space-y-2">
                      {pendapatanData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded mr-2" 
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <span>{item.kategori}</span>
                          </div>
                          <span className="font-medium">{item.persentase}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Income Tab */}
            <TabsContent value="income" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="mr-3 text-village-green" size={24} />
                    Rincian Pendapatan Desa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {pendapatanData.map((item, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">{item.kategori}</h3>
                            <p className="text-sm text-gray-500">Sumber: {item.sumber}</p>
                          </div>
                          <Badge variant="secondary">{item.persentase}%</Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <span className="text-sm text-gray-500">Anggaran</span>
                            <p className="text-lg font-semibold text-gray-800">
                              {formatCurrency(item.anggaran)}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Realisasi</span>
                            <p className="text-lg font-semibold text-green-600">
                              {formatCurrency(item.realisasi)}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Capaian</span>
                            <p className="text-lg font-semibold text-blue-600">
                              {((item.realisasi / item.anggaran) * 100).toFixed(1)}%
                            </p>
                          </div>
                        </div>
                        
                        <Progress 
                          value={(item.realisasi / item.anggaran) * 100} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Expenses Tab */}
            <TabsContent value="expenses" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-3 text-village-blue" size={24} />
                    Rincian Belanja Desa per Bidang
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {belanjaData.map((item, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">{item.bidang}</h3>
                            <p className="text-sm text-gray-500">
                              {item.kegiatan.length} program kegiatan
                            </p>
                          </div>
                          <Badge variant="secondary">{item.persentase}%</Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <span className="text-sm text-gray-500">Anggaran</span>
                            <p className="text-lg font-semibold text-gray-800">
                              {formatCurrency(item.anggaran)}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Realisasi</span>
                            <p className="text-lg font-semibold text-green-600">
                              {formatCurrency(item.realisasi)}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Sisa</span>
                            <p className="text-lg font-semibold text-orange-600">
                              {formatCurrency(item.anggaran - item.realisasi)}
                            </p>
                          </div>
                        </div>
                        
                        <Progress 
                          value={(item.realisasi / item.anggaran) * 100} 
                          className="h-2 mb-4"
                        />
                        
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Kegiatan Utama:</h4>
                          <div className="grid md:grid-cols-3 gap-2">
                            {item.kegiatan.map((kegiatan, kegIndex) => (
                              <div key={kegIndex} className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                                {kegiatan}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Programs Tab */}
            <TabsContent value="programs" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-3 text-village-orange" size={24} />
                    Program Unggulan Tahun 2024
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-6">
                    {programUnggulan.map((program, index) => (
                      <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-village-green/20 rounded-full flex items-center justify-center">
                            <program.icon className="text-village-green" size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-semibold text-gray-800">{program.nama}</h3>
                              <Badge variant={
                                program.status === 'Selesai' ? 'default' : 
                                program.status === 'Berjalan' ? 'secondary' : 'outline'
                              }>
                                {program.status}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                              <div>
                                <span className="text-gray-500">Anggaran:</span>
                                <p className="font-semibold">{formatCurrency(program.anggaran)}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Realisasi:</span>
                                <p className="font-semibold text-green-600">
                                  {formatCurrency(program.realisasi)}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700">Progress</span>
                              <span className="text-sm font-medium">{program.progress}%</span>
                            </div>
                            <Progress value={program.progress} className="mb-3" />
                            
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-500">Target Selesai:</span>
                              <span className="font-medium text-village-blue">{program.target}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="mr-3 text-village-green" size={24} />
                    Laporan dan Dokumen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-800 mb-4">Laporan Keuangan</h3>
                      {[
                        { nama: 'Laporan Realisasi APB Desa 2024', ukuran: '2.3 MB', tanggal: '15 Nov 2024' },
                        { nama: 'Laporan Semester I 2024', ukuran: '1.8 MB', tanggal: '30 Jun 2024' },
                        { nama: 'Laporan Tahunan 2023', ukuran: '3.2 MB', tanggal: '31 Des 2023' },
                        { nama: 'Audit Keuangan 2023', ukuran: '1.5 MB', tanggal: '15 Mar 2024' }
                      ].map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-center space-x-3">
                            <FileText className="text-red-600" size={20} />
                            <div>
                              <h4 className="font-medium text-gray-800">{doc.nama}</h4>
                              <p className="text-sm text-gray-500">{doc.ukuran} • {doc.tanggal}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download size={16} className="mr-1" />
                            Unduh
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-800 mb-4">Dokumen Perencanaan</h3>
                      {[
                        { nama: 'RKP Desa 2024', ukuran: '4.1 MB', tanggal: '20 Des 2023' },
                        { nama: 'RPJM Desa 2022-2028', ukuran: '5.2 MB', tanggal: '15 Jan 2022' },
                        { nama: 'Perdes APB Desa 2024', ukuran: '2.8 MB', tanggal: '30 Des 2023' },
                        { nama: 'Evaluasi Pelaksanaan 2023', ukuran: '3.5 MB', tanggal: '25 Feb 2024' }
                      ].map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-center space-x-3">
                            <FileText className="text-blue-600" size={20} />
                            <div>
                              <h4 className="font-medium text-gray-800">{doc.nama}</h4>
                              <p className="text-sm text-gray-500">{doc.ukuran} • {doc.tanggal}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download size={16} className="mr-1" />
                            Unduh
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                    <div className="flex items-start space-x-4">
                      <Shield className="text-blue-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-blue-800 mb-2">Komitmen Transparansi</h3>
                        <p className="text-blue-700 text-sm mb-4">
                          Desa Fajar Baru berkomitmen untuk memberikan transparansi penuh dalam pengelolaan 
                          keuangan desa. Semua laporan keuangan dapat diakses oleh masyarakat sesuai dengan 
                          ketentuan yang berlaku.
                        </p>
                        <div className="flex space-x-4 text-sm">
                          <div className="flex items-center">
                            <Calendar className="text-blue-600 mr-2" size={16} />
                            <span>Update Bulanan</span>
                          </div>
                          <div className="flex items-center">
                            <Shield className="text-blue-600 mr-2" size={16} />
                            <span>Audit Independen</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default APBDesa;
