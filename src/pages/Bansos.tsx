import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Heart, 
  Users, 
  Baby, 
  GraduationCap, 
  Home,
  Utensils,
  Shield,
  TrendingUp,
  Calendar,
  Search,
  Filter,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  MapPin,
  Phone,
  Eye
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const Bansos = () => {
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('2024');
  const [searchQuery, setSearchQuery] = useState('');

  const bansosStats = {
    totalPenerima: 847,
    totalAnggaran: 2450000000,
    totalRealisasi: 2156000000,
    persentaseRealisasi: 88.0,
    jumlahProgram: 8,
    keluargaPenerima: 542
  };

  const programBansos = [
    {
      nama: 'Program Keluarga Harapan (PKH)',
      kode: 'PKH',
      sasaran: 'Keluarga Miskin',
      penerima: 156,
      anggaran: 468000000,
      realisasi: 421200000,
      persentase: 90.0,
      color: 'bg-blue-500',
      icon: Heart,
      periode: 'Bulanan',
      status: 'aktif',
      deskripsi: 'Bantuan tunai bersyarat untuk keluarga sangat miskin dengan komponen kesehatan, pendidikan, dan kesejahteraan sosial'
    },
    {
      nama: 'Bantuan Pangan Non Tunai (BPNT)',
      kode: 'BPNT',
      sasaran: 'Keluarga Penerima Manfaat',
      penerima: 234,
      anggaran: 561600000,
      realisasi: 561600000,
      persentase: 100.0,
      color: 'bg-green-500',
      icon: Utensils,
      periode: 'Bulanan',
      status: 'aktif',
      deskripsi: 'Bantuan pangan dalam bentuk non tunai untuk memenuhi sebagian kebutuhan pangan pokok'
    },
    {
      nama: 'Bantuan Langsung Tunai Dana Desa (BLT-DD)',
      kode: 'BLT-DD',
      sasaran: 'Keluarga Miskin',
      penerima: 198,
      anggaran: 594000000,
      realisasi: 475200000,
      persentase: 80.0,
      color: 'bg-orange-500',
      icon: Home,
      periode: 'Bulanan',
      status: 'aktif',
      deskripsi: 'Bantuan langsung tunai dari dana desa untuk mengurangi dampak ekonomi dan meningkatkan daya beli masyarakat miskin'
    },
    {
      nama: 'Program Indonesia Pintar (PIP)',
      kode: 'PIP',
      sasaran: 'Anak Sekolah',
      penerima: 89,
      anggaran: 267000000,
      realisasi: 240300000,
      persentase: 90.0,
      color: 'bg-purple-500',
      icon: GraduationCap,
      periode: 'Semester',
      status: 'aktif',
      deskripsi: 'Bantuan biaya personal pendidikan untuk anak usia sekolah dari keluarga miskin atau rentan miskin'
    },
    {
      nama: 'Jaminan Kesehatan Nasional (JKN-KIS)',
      kode: 'JKN-KIS',
      sasaran: 'Masyarakat Miskin',
      penerima: 412,
      anggaran: 0, // Ditanggung pemerintah pusat
      realisasi: 0,
      persentase: 100.0,
      color: 'bg-red-500',
      icon: Shield,
      periode: 'Tahunan',
      status: 'aktif',
      deskripsi: 'Jaminan kesehatan untuk masyarakat miskin dan tidak mampu yang dikelola oleh BPJS Kesehatan'
    },
    {
      nama: 'Bantuan Ibu Hamil dan Balita',
      kode: 'BUMIL-BALITA',
      sasaran: 'Ibu Hamil & Balita',
      penerima: 67,
      anggaran: 134000000,
      realisasi: 107200000,
      persentase: 80.0,
      color: 'bg-pink-500',
      icon: Baby,
      periode: 'Bulanan',
      status: 'aktif',
      deskripsi: 'Bantuan khusus untuk ibu hamil dan balita guna meningkatkan status gizi dan kesehatan'
    }
  ];

  const trendPenerima = [
    { tahun: 2020, penerima: 623 },
    { tahun: 2021, penerima: 732 },
    { tahun: 2022, penerima: 789 },
    { tahun: 2023, penerima: 812 },
    { tahun: 2024, penerima: 847 }
  ];

  const distribusiPerWilayah = [
    { wilayah: 'RT 01', penerima: 87, persentase: 10.3 },
    { wilayah: 'RT 02', penerima: 94, persentase: 11.1 },
    { wilayah: 'RT 03', penerima: 76, persentase: 9.0 },
    { wilayah: 'RT 04', penerima: 112, persentase: 13.2 },
    { wilayah: 'RT 05', penerima: 89, persentase: 10.5 },
    { wilayah: 'RT 06', penerima: 103, persentase: 12.2 },
    { wilayah: 'RT 07', penerima: 92, persentase: 10.9 },
    { wilayah: 'RT 08', penerima: 98, persentase: 11.6 },
    { wilayah: 'RT 09', penerima: 71, persentase: 8.4 },
    { wilayah: 'RT 10', penerima: 25, persentase: 2.9 }
  ];

  const penyaluranTerbaru = [
    {
      id: 'PENY-2024-001',
      program: 'PKH',
      tanggal: '2024-11-25',
      penerima: 156,
      totalNominal: 93600000,
      status: 'selesai',
      periode: 'November 2024'
    },
    {
      id: 'PENY-2024-002',
      program: 'BPNT',
      tanggal: '2024-11-20',
      penerima: 234,
      totalNominal: 46800000,
      status: 'selesai',
      periode: 'November 2024'
    },
    {
      id: 'PENY-2024-003',
      program: 'BLT-DD',
      tanggal: '2024-11-15',
      penerima: 198,
      totalNominal: 59400000,
      status: 'proses',
      periode: 'November 2024'
    },
    {
      id: 'PENY-2024-004',
      program: 'PIP',
      tanggal: '2024-11-10',
      penerima: 89,
      totalNominal: 44500000,
      status: 'selesai',
      periode: 'Semester II 2024'
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'selesai':
        return <Badge className="bg-green-100 text-green-800">Selesai</Badge>;
      case 'proses':
        return <Badge className="bg-blue-100 text-blue-800">Proses</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'aktif':
        return <Badge className="bg-green-100 text-green-800">Aktif</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const COLORS = ['#3b82f6', '#22c55e', '#f59e0b', '#8b5cf6', '#ef4444', '#ec4899'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Bantuan Sosial (Bansos)
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Program bantuan sosial untuk meningkatkan kesejahteraan masyarakat miskin dan rentan 
              serta mengurangi kesenjangan sosial di Desa Fajar Baru
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Total Penerima</h3>
                    <p className="text-2xl font-bold text-gray-800">
                      {bansosStats.totalPenerima.toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Keluarga Penerima</h3>
                    <p className="text-2xl font-bold text-gray-800">
                      {bansosStats.keluargaPenerima}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Shield className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Jumlah Program</h3>
                    <p className="text-2xl font-bold text-gray-800">
                      {bansosStats.jumlahProgram}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Total Anggaran</h3>
                    <p className="text-xl font-bold text-gray-800">
                      {formatCurrency(bansosStats.totalAnggaran)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Realisasi</h3>
                    <p className="text-xl font-bold text-gray-800">
                      {formatCurrency(bansosStats.totalRealisasi)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">% Realisasi</h3>
                    <p className="text-2xl font-bold text-gray-800">
                      {bansosStats.persentaseRealisasi}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="programs" className="space-y-8">
            <TabsList className="grid w-full lg:w-fit lg:grid-cols-5 bg-white border rounded-lg p-1">
              <TabsTrigger value="programs" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Program
              </TabsTrigger>
              <TabsTrigger value="recipients" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Penerima
              </TabsTrigger>
              <TabsTrigger value="distribution" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Penyaluran
              </TabsTrigger>
              <TabsTrigger value="statistics" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Statistik
              </TabsTrigger>
              <TabsTrigger value="reports" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Laporan
              </TabsTrigger>
            </TabsList>

            {/* Programs Tab */}
            <TabsContent value="programs" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="mr-3 text-village-green" size={24} />
                    Program Bantuan Sosial Aktif
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {programBansos.map((program, index) => (
                      <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 ${program.color} rounded-full flex items-center justify-center`}>
                            <program.icon className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-800">{program.nama}</h3>
                                <p className="text-sm text-gray-500">
                                  {program.kode} • Sasaran: {program.sasaran} • {program.periode}
                                </p>
                              </div>
                              <div className="flex space-x-2">
                                {getStatusBadge(program.status)}
                                <Badge variant="secondary">{program.penerima} penerima</Badge>
                              </div>
                            </div>
                            
                            <p className="text-gray-600 text-sm mb-4">{program.deskripsi}</p>
                            
                            {program.anggaran > 0 && (
                              <>
                                <div className="grid md:grid-cols-3 gap-4 mb-4">
                                  <div>
                                    <span className="text-sm text-gray-500">Anggaran</span>
                                    <p className="text-lg font-semibold text-gray-800">
                                      {formatCurrency(program.anggaran)}
                                    </p>
                                  </div>
                                  <div>
                                    <span className="text-sm text-gray-500">Realisasi</span>
                                    <p className="text-lg font-semibold text-green-600">
                                      {formatCurrency(program.realisasi)}
                                    </p>
                                  </div>
                                  <div>
                                    <span className="text-sm text-gray-500">Sisa Anggaran</span>
                                    <p className="text-lg font-semibold text-orange-600">
                                      {formatCurrency(program.anggaran - program.realisasi)}
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm font-medium text-gray-700">Progress Realisasi</span>
                                  <span className="text-sm font-medium">
                                    {((program.realisasi / program.anggaran) * 100).toFixed(1)}%
                                  </span>
                                </div>
                                <Progress 
                                  value={(program.realisasi / program.anggaran) * 100} 
                                  className="h-2"
                                />
                              </>
                            )}
                            
                            {program.anggaran === 0 && (
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-blue-800 text-sm">
                                  <Shield className="inline mr-2" size={16} />
                                  Program ini dibiayai langsung oleh pemerintah pusat melalui BPJS
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Recipients Tab */}
            <TabsContent value="recipients" className="space-y-8">
              {/* Filters */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                          placeholder="Cari nama penerima..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                      <SelectTrigger className="w-full md:w-[200px]">
                        <SelectValue placeholder="Pilih Program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Semua Program</SelectItem>
                        {programBansos.map((program) => (
                          <SelectItem key={program.kode} value={program.kode}>
                            {program.nama}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button variant="outline">
                      <Filter size={16} className="mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Distribution by Area */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-3 text-village-blue" size={24} />
                    Distribusi Penerima per Wilayah
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={distribusiPerWilayah}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="wilayah" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="penerima" fill="#22c55e" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-800 mb-4">Rincian per RT</h3>
                      {distribusiPerWilayah.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-800">{item.wilayah}</span>
                          <div className="flex items-center space-x-4">
                            <span className="text-lg font-semibold text-gray-800">
                              {item.penerima} orang
                            </span>
                            <Badge variant="secondary">{item.persentase}%</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recipients Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Penerima Bantuan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <AlertCircle className="text-yellow-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-yellow-800 mb-2">Akses Data Penerima</h3>
                        <p className="text-yellow-700 text-sm mb-4">
                          Data penerima bantuan sosial bersifat rahasia dan dilindungi sesuai dengan 
                          peraturan perlindungan data pribadi. Akses data hanya dapat dilakukan oleh 
                          pihak yang berwenang dan untuk kepentingan yang sah.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button variant="outline" className="text-yellow-800 border-yellow-300">
                            <Phone size={16} className="mr-2" />
                            Hubungi Petugas
                          </Button>
                          <Button variant="outline" className="text-yellow-800 border-yellow-300">
                            <Eye size={16} className="mr-2" />
                            Verifikasi Status
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Distribution Tab */}
            <TabsContent value="distribution" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-3 text-village-orange" size={24} />
                    Penyaluran Bantuan Terbaru
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {penyaluranTerbaru.map((penyaluran, index) => (
                      <div key={index} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-1">
                              Penyaluran {penyaluran.program} - {penyaluran.periode}
                            </h3>
                            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                              <span>ID: {penyaluran.id}</span>
                              <span>•</span>
                              <span>{penyaluran.tanggal}</span>
                              <span>•</span>
                              <span>{penyaluran.penerima} penerima</span>
                            </div>
                          </div>
                          <div className="flex flex-col md:items-end mt-2 md:mt-0">
                            <div className="text-xl font-bold text-gray-800 mb-1">
                              {formatCurrency(penyaluran.totalNominal)}
                            </div>
                            {getStatusBadge(penyaluran.status)}
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Nominal per Penerima:</span>
                            <p className="font-medium text-gray-800">
                              {formatCurrency(penyaluran.totalNominal / penyaluran.penerima)}
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-500">Jumlah Penerima:</span>
                            <p className="font-medium text-gray-800">{penyaluran.penerima} orang</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Status:</span>
                            <p className="font-medium text-gray-800 capitalize">{penyaluran.status}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button variant="outline">
                      Lihat Semua Penyaluran
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Distribution Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-3 text-village-green" size={24} />
                    Jadwal Penyaluran Bantuan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-4">Jadwal Reguler</h3>
                      <div className="space-y-3">
                        {[
                          { program: 'PKH', jadwal: 'Setiap tanggal 25', status: 'Aktif' },
                          { program: 'BPNT', jadwal: 'Setiap tanggal 20', status: 'Aktif' },
                          { program: 'BLT-DD', jadwal: 'Setiap tanggal 15', status: 'Aktif' },
                          { program: 'PIP', jadwal: 'Awal Semester', status: 'Aktif' }
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                              <span className="font-medium text-gray-800">{item.program}</span>
                              <p className="text-sm text-gray-500">{item.jadwal}</p>
                            </div>
                            <Badge className="bg-green-100 text-green-800">{item.status}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-4">Penyaluran Mendatang</h3>
                      <div className="space-y-3">
                        {[
                          { program: 'PKH Desember', tanggal: '25 Desember 2024', estimasi: 'Rp 93.6 Juta' },
                          { program: 'BPNT Desember', tanggal: '20 Desember 2024', estimasi: 'Rp 46.8 Juta' },
                          { program: 'BLT-DD Desember', tanggal: '15 Desember 2024', estimasi: 'Rp 59.4 Juta' },
                          { program: 'Bonus Tahun Baru', tanggal: '30 Desember 2024', estimasi: 'Rp 25.0 Juta' }
                        ].map((item, index) => (
                          <div key={index} className="p-3 border rounded-lg">
                            <div className="flex justify-between items-start">
                              <div>
                                <span className="font-medium text-gray-800">{item.program}</span>
                                <p className="text-sm text-gray-500">{item.tanggal}</p>
                              </div>
                              <span className="text-sm font-semibold text-village-green">{item.estimasi}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Statistics Tab */}
            <TabsContent value="statistics" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Tren Jumlah Penerima</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={trendPenerima}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="tahun" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="penerima" 
                          stroke="#22c55e" 
                          strokeWidth={3}
                          dot={{ fill: '#22c55e', strokeWidth: 2, r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Distribusi Program Bantuan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={programBansos.filter(p => p.anggaran > 0)}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="anggaran"
                          nameKey="kode"
                        >
                          {programBansos.filter(p => p.anggaran > 0).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      {programBansos.filter(p => p.anggaran > 0).map((program, index) => (
                        <div key={index} className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded mr-2" 
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                          ></div>
                          <span>{program.kode}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Impact Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Dampak Program Bantuan Sosial</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl text-center">
                      <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-blue-800">Cakupan Penerima</h3>
                      <p className="text-3xl font-bold text-blue-600 mt-2">65.2%</p>
                      <p className="text-sm text-blue-700">dari keluarga miskin</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl text-center">
                      <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-green-800">Peningkatan Ekonomi</h3>
                      <p className="text-3xl font-bold text-green-600 mt-2">23.4%</p>
                      <p className="text-sm text-green-700">daya beli masyarakat</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl text-center">
                      <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-orange-800">Kepuasan</h3>
                      <p className="text-3xl font-bold text-orange-600 mt-2">87.5%</p>
                      <p className="text-sm text-orange-700">penerima puas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-3 text-village-green" size={24} />
                    Laporan Program Bantuan Sosial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { nama: 'Laporan Penyaluran Bansos November 2024', ukuran: '2.1 MB', tanggal: '30 Nov 2024', kategori: 'Bulanan' },
                      { nama: 'Evaluasi Program PKH Triwulan IV 2024', ukuran: '3.5 MB', tanggal: '25 Nov 2024', kategori: 'Evaluasi' },
                      { nama: 'Data Penerima BPNT Semester II 2024', ukuran: '1.8 MB', tanggal: '20 Nov 2024', kategori: 'Data' },
                      { nama: 'Laporan BLT-DD Tahun 2024', ukuran: '4.2 MB', tanggal: '15 Nov 2024', kategori: 'Tahunan' },
                      { nama: 'Analisis Dampak Program Bansos 2024', ukuran: '5.1 MB', tanggal: '10 Nov 2024', kategori: 'Analisis' },
                      { nama: 'Verifikasi Data Penerima PIP 2024', ukuran: '2.7 MB', tanggal: '05 Nov 2024', kategori: 'Verifikasi' }
                    ].map((laporan, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-3">
                          <FileText className="text-red-600" size={20} />
                          <div>
                            <h4 className="font-medium text-gray-800">{laporan.nama}</h4>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Badge variant="outline" className="text-xs">{laporan.kategori}</Badge>
                              <span>{laporan.ukuran}</span>
                              <span>•</span>
                              <span>{laporan.tanggal}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Unduh
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-green-50 rounded-xl">
                    <div className="flex items-start space-x-4">
                      <Shield className="text-green-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-green-800 mb-2">Komitmen Transparansi Bantuan Sosial</h3>
                        <p className="text-green-700 text-sm mb-4">
                          Desa Fajar Baru berkomitmen untuk menjalankan program bantuan sosial secara 
                          transparan, akuntabel, dan tepat sasaran. Semua data dan laporan dapat diakses 
                          oleh masyarakat sesuai dengan ketentuan perlindungan data pribadi.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center">
                            <CheckCircle className="text-green-600 mr-2" size={16} />
                            <span>Data Terverifikasi</span>
                          </div>
                          <div className="flex items-center">
                            <Shield className="text-green-600 mr-2" size={16} />
                            <span>Perlindungan Data</span>
                          </div>
                          <div className="flex items-center">
                            <Heart className="text-green-600 mr-2" size={16} />
                            <span>Tepat Sasaran</span>
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

export default Bansos;
