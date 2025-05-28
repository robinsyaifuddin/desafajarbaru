
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Home, Briefcase, GraduationCap, Heart } from 'lucide-react';

const IDM = () => {
  const idmData = [
    { tahun: '2020', skor: 0.6432, status: 'Berkembang' },
    { tahun: '2021', skor: 0.6789, status: 'Berkembang' },
    { tahun: '2022', skor: 0.7023, status: 'Maju' },
    { tahun: '2023', skor: 0.7234, status: 'Maju' },
    { tahun: '2024', skor: 0.7456, status: 'Maju' }
  ];

  const dimensiData = [
    { dimensi: 'Sosial', skor: 0.78, target: 0.80 },
    { dimensi: 'Ekonomi', skor: 0.71, target: 0.75 },
    { dimensi: 'Ekologi', skor: 0.75, target: 0.78 }
  ];

  const indikatorData = [
    { kategori: 'Pendidikan', nilai: 85, icon: GraduationCap, color: '#3B82F6' },
    { kategori: 'Kesehatan', nilai: 78, icon: Heart, color: '#EF4444' },
    { kategori: 'Ekonomi', nilai: 72, icon: Briefcase, color: '#10B981' },
    { kategori: 'Perumahan', nilai: 80, icon: Home, color: '#F59E0B' },
    { kategori: 'Sosial', nilai: 76, icon: Users, color: '#8B5CF6' }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

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
              Data perkembangan dan kemajuan Desa Fajar Baru dalam berbagai aspek pembangunan 
              berdasarkan Indeks Desa Membangun (IDM) yang dikeluarkan oleh Kementerian Desa PDTT
            </p>
          </div>

          {/* Current Status Card */}
          <Card className="mb-8 bg-gradient-to-r from-village-green to-village-blue text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <TrendingUp className="mr-3" size={32} />
                Status IDM Desa Fajar Baru 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-3xl font-bold">0.7456</h3>
                  <p className="opacity-90">Skor IDM</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">MAJU</h3>
                  <p className="opacity-90">Status Desa</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">+2.3%</h3>
                  <p className="opacity-90">Peningkatan dari 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trend Chart */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Perkembangan Skor IDM</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={idmData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tahun" />
                    <YAxis domain={[0, 1]} />
                    <Tooltip formatter={(value) => [typeof value === 'number' ? value.toFixed(4) : value, 'Skor IDM']} />
                    <Bar dataKey="skor" fill="#22C55E" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skor Per Dimensi</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={dimensiData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ dimensi, skor }) => `${dimensi}: ${(skor * 100).toFixed(1)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="skor"
                    >
                      {dimensiData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Indicators */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {indikatorData.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
                        style={{ backgroundColor: item.color + '20' }}
                      >
                        <item.icon size={24} style={{ color: item.color }} />
                      </div>
                      <h3 className="font-semibold text-gray-800">{item.kategori}</h3>
                    </div>
                    <span className="text-2xl font-bold" style={{ color: item.color }}>
                      {item.nilai}%
                    </span>
                  </div>
                  <Progress value={item.nilai} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Dimensions */}
          <div className="grid lg:grid-cols-3 gap-6">
            {dimensiData.map((dimensi, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{dimensi.dimensi}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Skor Saat Ini</span>
                        <span className="font-semibold">{(dimensi.skor * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={dimensi.skor * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Target</span>
                        <span className="font-semibold">{(dimensi.target * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={dimensi.target * 100} className="h-2 opacity-50" />
                    </div>
                    <div className="text-sm text-gray-600">
                      Perlu peningkatan {((dimensi.target - dimensi.skor) * 100).toFixed(1)}% untuk mencapai target
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IDM;
