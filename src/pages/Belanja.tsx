
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
  ShoppingCart, 
  TrendingUp, 
  Calendar, 
  Filter, 
  Search,
  Building, 
  Users, 
  Leaf,
  GraduationCap,
  Heart,
  Shield,
  Truck,
  Package,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

const Belanja = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const belanjaStats = {
    totalBelanja: 2689200000,
    totalRealisasi: 2106540000,
    persentaseRealisasi: 78.3,
    jumlahTransaksi: 342,
    rataRataPerBulan: 224120000
  };

  const kategoriBelanja = [
    {
      nama: 'Pembangunan Infrastruktur',
      kode: 'INFRA',
      anggaran: 1075000000,
      realisasi: 834000000,
      persentase: 40.0,
      color: 'bg-blue-500',
      icon: Building,
      transaksi: 89,
      status: 'aktif'
    },
    {
      nama: 'Pemberdayaan Masyarakat',
      kode: 'PEMBERDAYAAN',
      anggaran: 538000000,
      realisasi: 456000000,
      persentase: 20.0,
      color: 'bg-green-500',
      icon: Users,
      transaksi: 67,
      status: 'aktif'
    },
    {
      nama: 'Operasional Pemerintahan',
      kode: 'OPERASIONAL',
      anggaran: 484000000,
      realisasi: 421000000,
      persentase: 18.0,
      color: 'bg-orange-500',
      icon: Shield,
      transaksi: 124,
      status: 'aktif'
    },
    {
      nama: 'Kegiatan Kemasyarakatan',
      kode: 'KEMASYARAKATAN',
      anggaran: 323000000,
      realisasi: 267000000,
      persentase: 12.0,
      color: 'bg-purple-500',
      icon: Heart,
      transaksi: 45,
      status: 'aktif'
    },
    {
      nama: 'Pembinaan Kelembagaan',
      kode: 'PEMBINAAN',
      anggaran: 269000000,
      realisasi: 198000000,
      persentase: 10.0,
      color: 'bg-indigo-500',
      icon: GraduationCap,
      transaksi: 17,
      status: 'aktif'
    }
  ];

  const transaksiTerbaru = [
    {
      id: 'TRX-2024-001',
      tanggal: '2024-11-20',
      deskripsi: 'Pembayaran Material Jalan Desa Blok A',
      kategori: 'Pembangunan Infrastruktur',
      jumlah: 125000000,
      status: 'selesai',
      vendor: 'CV. Maju Bersama',
      noSPK: 'SPK/001/2024'
    },
    {
      id: 'TRX-2024-002',
      tanggal: '2024-11-19',
      deskripsi: 'Pelatihan UMKM Batch 3',
      kategori: 'Pemberdayaan Masyarakat',
      jumlah: 15000000,
      status: 'selesai',
      vendor: 'Lembaga Pelatihan Karya',
      noSPK: 'SPK/045/2024'
    },
    {
      id: 'TRX-2024-003',
      tanggal: '2024-11-18',
      deskripsi: 'Honorarium Perangkat Desa November',
      kategori: 'Operasional Pemerintahan',
      jumlah: 32000000,
      status: 'proses',
      vendor: 'Internal',
      noSPK: '-'
    },
    {
      id: 'TRX-2024-004',
      tanggal: '2024-11-17',
      deskripsi: 'Kegiatan Posyandu Balita',
      kategori: 'Kegiatan Kemasyarakatan',
      jumlah: 3500000,
      status: 'selesai',
      vendor: 'Kader Posyandu',
      noSPK: 'SPK/078/2024'
    },
    {
      id: 'TRX-2024-005',
      tanggal: '2024-11-16',
      deskripsi: 'Pembinaan BPD Triwulan IV',
      kategori: 'Pembinaan Kelembagaan',
      jumlah: 8500000,
      status: 'pending',
      vendor: 'Fasilitator BPD',
      noSPK: 'SPK/089/2024'
    }
  ];

  const rencanaBelanjaUnggulan = [
    {
      nama: 'Pembangunan Balai Desa',
      anggaran: 450000000,
      periode: 'Q1-Q2 2025',
      kategori: 'Pembangunan Infrastruktur',
      progress: 15,
      status: 'perencanaan',
      prioritas: 'tinggi'
    },
    {
      nama: 'Program Wirausaha Digital',
      anggaran: 180000000,
      periode: 'Q1 2025',
      kategori: 'Pemberdayaan Masyarakat',
      progress: 5,
      status: 'perencanaan',
      prioritas: 'sedang'
    },
    {
      nama: 'Sistem Informasi Desa',
      anggaran: 95000000,
      periode: 'Q2 2025',
      kategori: 'Operasional Pemerintahan',
      progress: 10,
      status: 'perencanaan',
      prioritas: 'tinggi'
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
      case 'perencanaan':
        return <Badge className="bg-gray-100 text-gray-800">Perencanaan</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'tinggi':
        return <Badge className="bg-red-100 text-red-800">Prioritas Tinggi</Badge>;
      case 'sedang':
        return <Badge className="bg-orange-100 text-orange-800">Prioritas Sedang</Badge>;
      case 'rendah':
        return <Badge className="bg-green-100 text-green-800">Prioritas Rendah</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Belanja Desa
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Transparansi dan akuntabilitas pengeluaran desa untuk pembangunan 
              infrastruktur, pemberdayaan masyarakat, dan operasional pemerintahan
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <ShoppingCart className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Total Belanja</h3>
                    <p className="text-xl font-bold text-gray-800">
                      {formatCurrency(belanjaStats.totalBelanja)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Realisasi</h3>
                    <p className="text-xl font-bold text-gray-800">
                      {formatCurrency(belanjaStats.totalRealisasi)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Package className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">% Realisasi</h3>
                    <p className="text-xl font-bold text-gray-800">
                      {belanjaStats.persentaseRealisasi}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <FileText className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Transaksi</h3>
                    <p className="text-xl font-bold text-gray-800">
                      {belanjaStats.jumlahTransaksi}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Rata-rata/Bulan</h3>
                    <p className="text-xl font-bold text-gray-800">
                      {formatCurrency(belanjaStats.rataRataPerBulan)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full lg:w-fit lg:grid-cols-4 bg-white border rounded-lg p-1">
              <TabsTrigger value="overview" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Kategori Belanja
              </TabsTrigger>
              <TabsTrigger value="transactions" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Transaksi
              </TabsTrigger>
              <TabsTrigger value="planning" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Perencanaan
              </TabsTrigger>
              <TabsTrigger value="reports" className="data-[state=active]:bg-village-green data-[state=active]:text-white">
                Laporan
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="mr-3 text-village-green" size={24} />
                    Kategori Belanja Desa 2024
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {kategoriBelanja.map((kategori, index) => (
                      <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 ${kategori.color} rounded-full flex items-center justify-center`}>
                            <kategori.icon className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-800">{kategori.nama}</h3>
                                <p className="text-sm text-gray-500">
                                  Kode: {kategori.kode} • {kategori.transaksi} transaksi
                                </p>
                              </div>
                              <Badge variant="secondary">{kategori.persentase}%</Badge>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-4 mb-4">
                              <div>
                                <span className="text-sm text-gray-500">Anggaran</span>
                                <p className="text-lg font-semibold text-gray-800">
                                  {formatCurrency(kategori.anggaran)}
                                </p>
                              </div>
                              <div>
                                <span className="text-sm text-gray-500">Realisasi</span>
                                <p className="text-lg font-semibold text-green-600">
                                  {formatCurrency(kategori.realisasi)}
                                </p>
                              </div>
                              <div>
                                <span className="text-sm text-gray-500">Sisa Anggaran</span>
                                <p className="text-lg font-semibold text-orange-600">
                                  {formatCurrency(kategori.anggaran - kategori.realisasi)}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700">Progress Realisasi</span>
                              <span className="text-sm font-medium">
                                {((kategori.realisasi / kategori.anggaran) * 100).toFixed(1)}%
                              </span>
                            </div>
                            <Progress 
                              value={(kategori.realisasi / kategori.anggaran) * 100} 
                              className="h-2"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Transactions Tab */}
            <TabsContent value="transactions" className="space-y-8">
              {/* Filters */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                          placeholder="Cari transaksi..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full md:w-[200px]">
                        <SelectValue placeholder="Pilih Kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Semua Kategori</SelectItem>
                        {kategoriBelanja.map((kategori) => (
                          <SelectItem key={kategori.kode} value={kategori.kode}>
                            {kategori.nama}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                      <SelectTrigger className="w-full md:w-[150px]">
                        <SelectValue placeholder="Periode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Transactions List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="mr-3 text-village-blue" size={24} />
                    Transaksi Belanja Terbaru
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transaksiTerbaru.map((transaksi, index) => (
                      <div key={index} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-1">{transaksi.deskripsi}</h3>
                            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                              <span>ID: {transaksi.id}</span>
                              <span>•</span>
                              <span>{transaksi.tanggal}</span>
                              <span>•</span>
                              <span>{transaksi.kategori}</span>
                            </div>
                          </div>
                          <div className="flex flex-col md:items-end mt-2 md:mt-0">
                            <div className="text-xl font-bold text-gray-800 mb-1">
                              {formatCurrency(transaksi.jumlah)}
                            </div>
                            {getStatusBadge(transaksi.status)}
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Vendor/Penerima:</span>
                            <p className="font-medium text-gray-800">{transaksi.vendor}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">No. SPK:</span>
                            <p className="font-medium text-gray-800">{transaksi.noSPK || '-'}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button variant="outline">
                      Lihat Semua Transaksi
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Planning Tab */}
            <TabsContent value="planning" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-3 text-village-orange" size={24} />
                    Rencana Belanja Unggulan 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {rencanaBelanjaUnggulan.map((rencana, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{rencana.nama}</h3>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">{rencana.kategori}</Badge>
                              {getPriorityBadge(rencana.prioritas)}
                              {getStatusBadge(rencana.status)}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-gray-800">
                              {formatCurrency(rencana.anggaran)}
                            </div>
                            <div className="text-sm text-gray-500">{rencana.periode}</div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Progress Perencanaan</span>
                          <span className="text-sm font-medium">{rencana.progress}%</span>
                        </div>
                        <Progress value={rencana.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Proyeksi Belanja per Kategori 2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl text-center">
                      <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-blue-800">Infrastruktur</h3>
                      <p className="text-2xl font-bold text-blue-600 mt-2">45%</p>
                      <p className="text-sm text-blue-700">dari total anggaran</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl text-center">
                      <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-green-800">Pemberdayaan</h3>
                      <p className="text-2xl font-bold text-green-600 mt-2">25%</p>
                      <p className="text-sm text-green-700">dari total anggaran</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl text-center">
                      <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-orange-800">Operasional</h3>
                      <p className="text-2xl font-bold text-orange-600 mt-2">30%</p>
                      <p className="text-sm text-orange-700">dari total anggaran</p>
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
                    Laporan Belanja
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { nama: 'Laporan Belanja Bulanan November 2024', ukuran: '1.8 MB', tanggal: '30 Nov 2024', kategori: 'Bulanan' },
                      { nama: 'Laporan Belanja Triwulan III 2024', ukuran: '2.5 MB', tanggal: '30 Sep 2024', kategori: 'Triwulan' },
                      { nama: 'Rekapitulasi Belanja Semester I 2024', ukuran: '3.2 MB', tanggal: '30 Jun 2024', kategori: 'Semester' },
                      { nama: 'Analisis Efisiensi Belanja 2023', ukuran: '2.1 MB', tanggal: '31 Des 2023', kategori: 'Tahunan' },
                      { nama: 'Laporan Belanja per Kategori 2024', ukuran: '1.9 MB', tanggal: '15 Nov 2024', kategori: 'Khusus' },
                      { nama: 'Audit Belanja Desa 2023', ukuran: '4.2 MB', tanggal: '15 Mar 2024', kategori: 'Audit' }
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
                      <CheckCircle className="text-green-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-green-800 mb-2">Transparansi Belanja Desa</h3>
                        <p className="text-green-700 text-sm mb-4">
                          Semua belanja desa dilaksanakan berdasarkan prinsip transparansi, akuntabilitas, 
                          dan partisipatif. Masyarakat dapat mengakses informasi belanja desa sesuai dengan 
                          ketentuan peraturan perundang-undangan.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center">
                            <CheckCircle className="text-green-600 mr-2" size={16} />
                            <span>Laporan Real-time</span>
                          </div>
                          <div className="flex items-center">
                            <Shield className="text-green-600 mr-2" size={16} />
                            <span>Audit Berkala</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="text-green-600 mr-2" size={16} />
                            <span>Partisipasi Masyarakat</span>
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

export default Belanja;
