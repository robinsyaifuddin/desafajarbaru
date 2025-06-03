
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts';

const AgeCategory = () => {
  const ageCategoryData = [
    { category: 'Balita (0-4 tahun)', count: 167, color: '#ef4444', percentage: 5.9 },
    { category: 'Anak (5-14 tahun)', count: 456, color: '#f97316', percentage: 16.0 },
    { category: 'Remaja (15-24 tahun)', count: 523, color: '#eab308', percentage: 18.4 },
    { category: 'Dewasa Muda (25-39 tahun)', count: 789, color: '#22c55e', percentage: 27.7 },
    { category: 'Dewasa (40-59 tahun)', count: 678, color: '#3b82f6', percentage: 23.8 },
    { category: 'Lansia (60+ tahun)', count: 234, color: '#8b5cf6', percentage: 8.2 }
  ];

  const genderByAgeData = [
    { category: 'Balita', male: 85, female: 82 },
    { category: 'Anak', male: 234, female: 222 },
    { category: 'Remaja', male: 267, female: 256 },
    { category: 'Dewasa Muda', male: 398, female: 391 },
    { category: 'Dewasa', male: 340, female: 338 },
    { category: 'Lansia', male: 110, female: 124 }
  ];

  const dependencyRatioData = [
    { year: '2020', ratio: 45.2 },
    { year: '2021', ratio: 43.8 },
    { year: '2022', ratio: 42.5 },
    { year: '2023', ratio: 41.3 },
    { year: '2024', ratio: 40.1 }
  ];

  const totalPopulation = ageCategoryData.reduce((sum, item) => sum + item.count, 0);
  const productiveAge = ageCategoryData.slice(2, 5).reduce((sum, item) => sum + item.count, 0);
  const dependentAge = ageCategoryData[0].count + ageCategoryData[1].count + ageCategoryData[5].count;

  return (
    <StatisticsLayout
      title="Statistik Kategori Umur"
      description="Data pengelompokan penduduk Desa Fajar Baru berdasarkan kategori usia dan analisis demografi"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 h-auto">
          <TabsTrigger value="overview" className="text-xs sm:text-sm py-2 px-3">Ringkasan</TabsTrigger>
          <TabsTrigger value="charts" className="text-xs sm:text-sm py-2 px-3">Grafik</TabsTrigger>
          <TabsTrigger value="analysis" className="text-xs sm:text-sm py-2 px-3">Analisis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 sm:space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <Card className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Total Penduduk</h3>
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-600">{totalPopulation.toLocaleString()}</p>
            </Card>
            <Card className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Usia Produktif</h3>
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-green-600">{productiveAge.toLocaleString()}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">15-59 tahun</p>
            </Card>
            <Card className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Usia Ketergantungan</h3>
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-orange-600">{dependentAge.toLocaleString()}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">0-14 & 60+ tahun</p>
            </Card>
            <Card className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Rasio Ketergantungan</h3>
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-purple-600">40.1</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">per 100 produktif</p>
            </Card>
          </div>

          {/* Detailed breakdown */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {ageCategoryData.map((item, index) => (
              <Card key={index} className="p-3 sm:p-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{item.category}</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Jumlah:</span>
                    <span className="font-bold text-blue-600">{item.count.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Persentase:</span>
                    <span className="font-bold text-green-600">{item.percentage}%</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="charts" className="space-y-4 sm:space-y-6">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <Card className="p-3 sm:p-4 lg:p-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-6">Distribusi Kategori Umur</h3>
              <div className="h-64 sm:h-80 lg:h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ageCategoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius="80%"
                      dataKey="count"
                      label={({ category, percentage }) => `${percentage}%`}
                      labelLine={false}
                    >
                      {ageCategoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [value.toLocaleString(), 'Jumlah']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-3 sm:p-4 lg:p-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-6">Perbandingan Jenis Kelamin</h3>
              <div className="h-64 sm:h-80 lg:h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={genderByAgeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="category" 
                      angle={-45} 
                      textAnchor="end" 
                      height={80}
                      fontSize={12}
                    />
                    <YAxis fontSize={12} />
                    <Tooltip />
                    <Bar dataKey="male" fill="#3b82f6" name="Laki-laki" />
                    <Bar dataKey="female" fill="#ec4899" name="Perempuan" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          <Card className="p-3 sm:p-4 lg:p-6">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-6">Tren Rasio Ketergantungan</h3>
            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dependencyRatioData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Rasio Ketergantungan']} />
                  <Line type="monotone" dataKey="ratio" stroke="#8b5cf6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4 sm:space-y-6">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Bonus Demografi</h3>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-600">
                  Desa Fajar Baru sedang mengalami bonus demografi dengan {((productiveAge/totalPopulation)*100).toFixed(1)}% 
                  penduduk berada di usia produktif (15-59 tahun).
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    Potensi Pembangunan Ekonomi Tinggi
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Struktur Demografis</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Piramida Penduduk:</span>
                  <span className="font-medium text-blue-600">Ekspansif</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Median Usia:</span>
                  <span className="font-medium text-blue-600">~32 tahun</span>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    Populasi Muda yang Dinamis
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Rekomendasi Kebijakan</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Pendidikan Anak</h4>
                <p className="text-sm text-orange-700">
                  Tingkatkan akses pendidikan untuk {ageCategoryData[1].count} anak usia 5-14 tahun
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Kesempatan Kerja</h4>
                <p className="text-sm text-green-700">
                  Ciptakan lapangan kerja untuk {ageCategoryData[2].count + ageCategoryData[3].count} pemuda dan dewasa muda
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Layanan Lansia</h4>
                <p className="text-sm text-purple-700">
                  Persiapkan layanan kesehatan untuk {ageCategoryData[5].count} lansia
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </StatisticsLayout>
  );
};

export default AgeCategory;
