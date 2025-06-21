import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Home, 
  Briefcase, 
  GraduationCap,
  Heart,
  Building,
  Leaf,
  Shield,
  Target,
  Award,
  MapPin,
  Calendar
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const IDM = () => {
  const idmScore = 0.7834;
  const idmCategory = "Berkembang";
  const targetYear = 2024;

  const dimensiData = [
    {
      nama: "IKS (Indeks Ketahanan Sosial)",
      nilai: 0.82,
      target: 0.85,
      kategori: "Berkembang",
      color: "bg-green-500",
      indikator: [
        { nama: "Kesehatan", nilai: 0.85, status: "Baik" },
        { nama: "Pendidikan", nilai: 0.78, status: "Sedang" },
        { nama: "Modal Sosial", nilai: 0.83, status: "Baik" }
      ]
    },
    {
      nama: "IKE (Indeks Ketahanan Ekonomi)",
      nilai: 0.75,
      target: 0.80,
      kategori: "Berkembang",
      color: "bg-blue-500",
      indikator: [
        { nama: "Keragaman Produksi", nilai: 0.72, status: "Sedang" },
        { nama: "Akses Pasar", nilai: 0.77, status: "Baik" },
        { nama: "Modal Usaha", nilai: 0.76, status: "Baik" }
      ]
    },
    {
      nama: "IKL (Indeks Ketahanan Lingkungan)",
      nilai: 0.78,
      target: 0.82,
      kategori: "Berkembang",
      color: "bg-emerald-500",
      indikator: [
        { nama: "Kualitas Lingkungan", nilai: 0.80, status: "Baik" },
        { nama: "Potensi Rawan Bencana", nilai: 0.75, status: "Sedang" },
        { nama: "Iklim", nilai: 0.79, status: "Baik" }
      ]
    }
  ];

  const trendData = [
    { tahun: 2020, nilai: 0.7234 },
    { tahun: 2021, nilai: 0.7456 },
    { tahun: 2022, nilai: 0.7623 },
    { tahun: 2023, nilai: 0.7834 },
    { tahun: 2024, nilai: 0.8000 }
  ];

  const programPrioritas = [
    {
      nama: "Peningkatan Akses Pendidikan",
      deskripsi: "Program peningkatan fasilitas dan kualitas pendidikan dasar",
      anggaran: "Rp 450.000.000",
      status: "Berjalan",
      progress: 75,
      icon: GraduationCap
    },
    {
      nama: "Pengembangan UMKM",
      deskripsi: "Pemberdayaan ekonomi masyarakat melalui UMKM",
      anggaran: "Rp 320.000.000",
      status: "Perencanaan",
      progress: 25,
      icon: Briefcase
    },
    {
      nama: "Infrastruktur Dasar",
      deskripsi: "Pembangunan jalan, jembatan, dan fasilitas umum",
      anggaran: "Rp 680.000.000",
      status: "Berjalan",
      progress: 60,
      icon: Building
    },
    {
      nama: "Pelestarian Lingkungan",
      deskripsi: "Program konservasi dan pengelolaan lingkungan berkelanjutan",
      anggaran: "Rp 280.000.000",
      status: "Selesai",
      progress: 100,
      icon: Leaf
    }
  ];

  const COLORS = ['#22c55e', '#3b82f6', '#10b981', '#f59e0b'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              IDM - Indeks Desa Membangun
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Pengukuran tingkat perkembangan desa berdasarkan Indeks Ketahanan Sosial, 
              Ketahanan Ekonomi, dan Ketahanan Lingkungan untuk pembangunan berkelanjutan
            </p>
          </div>

          {/* IDM Score Overview */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-3 text-village-green" size={24} />
                  Skor IDM Desa Fajar Baru
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-village-green mb-2">
                    {(idmScore * 100).toFixed(2)}
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2 bg-green-100 text-green-800">
                    {idmCategory}
                  </Badge>
                  <p className="text-gray-600 mt-2">Status Perkembangan Desa</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Progress ke Target {targetYear}</span>
                    <span className="font-semibold">78.34%</span>
                  </div>
                  <Progress value={78.34} className="h-3" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Tertinggal (&lt; 0.6)</span>
                    <span>Berkembang (0.6-0.8)</span>
                    <span>Maju (&gt; 0.8)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-3 text-village-blue" size={24} />
                  Pencapaian
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Peringkat Provinsi</h4>
                  <p className="text-2xl font-bold text-green-600">#12</p>
                  <p className="text-sm text-green-600">dari 245 desa</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Peringkat Kabupaten</h4>
                  <p className="text-2xl font-bold text-blue-600">#3</p>
                  <p className="text-sm text-blue-600">dari 28 desa</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800">Tren Peningkatan</h4>
                  <p className="text-2xl font-bold text-orange-600">+5.2%</p>
                  <p className="text-sm text-orange-600">dari tahun lalu</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dimensi IDM */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-3 text-village-green" size={24} />
                Dimensi Indeks Desa Membangun
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-3 gap-6">
                {dimensiData.map((dimensi, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-800">{dimensi.nama}</h3>
                      <Badge className={`${dimensi.color} text-white`}>
                        {dimensi.kategori}
                      </Badge>
                    </div>
                    
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-gray-800">
                        {(dimensi.nilai * 100).toFixed(1)}
                      </div>
                      <div className="text-sm text-gray-500">
                        Target: {(dimensi.target * 100).toFixed(1)}
                      </div>
                    </div>
                    
                    <Progress 
                      value={(dimensi.nilai / dimensi.target) * 100} 
                      className="mb-4" 
                    />
                    
                    <div className="space-y-2">
                      {dimensi.indikator.map((ind, indIndex) => (
                        <div key={indIndex} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">{ind.nama}</span>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{(ind.nilai * 100).toFixed(1)}</span>
                            <Badge 
                              variant={ind.status === 'Baik' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {ind.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trend Chart */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-3 text-village-blue" size={24} />
                  Tren Perkembangan IDM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tahun" />
                    <YAxis domain={[0.7, 0.85]} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="nilai" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-3 text-village-orange" size={24} />
                  Posisi Desa dalam Klasifikasi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Tertinggal', value: 25, color: '#ef4444' },
                        { name: 'Berkembang', value: 45, color: '#f59e0b' },
                        { name: 'Maju', value: 25, color: '#22c55e' },
                        { name: 'Mandiri', value: 5, color: '#3b82f6' }
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                    >
                      {COLORS.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
                    <span>Tertinggal (25%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded mr-2"></div>
                    <span>Berkembang (45%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                    <span>Maju (25%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                    <span>Mandiri (5%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Program Prioritas */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-3 text-village-green" size={24} />
                Program Prioritas Pembangunan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-6">
                {programPrioritas.map((program, index) => (
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
                        <p className="text-gray-600 text-sm mb-3">{program.deskripsi}</p>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Progress</span>
                          <span className="text-sm font-medium">{program.progress}%</span>
                        </div>
                        <Progress value={program.progress} className="mb-3" />
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Anggaran:</span>
                          <span className="font-semibold text-village-green">{program.anggaran}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-3 text-village-blue" size={24} />
                Rencana Aksi Peningkatan IDM
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-800 mb-4">Jangka Pendek (2024)</h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Peningkatan akses internet
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Pembangunan posyandu baru
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Program literasi digital
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-4">Jangka Menengah (2025-2026)</h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Pengembangan wisata desa
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Penguatan kelembagaan desa
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Program kewirausahaan
                    </li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-orange-800 mb-4">Jangka Panjang (2027-2030)</h3>
                  <ul className="space-y-2 text-sm text-orange-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Desa mandiri energi
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Pengembangan agrowisata
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Desa digital terpadu
                    </li>
                  </ul>
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

export default IDM;
