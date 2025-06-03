
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const AgeRange = () => {
  const ageRangeData = [
    { range: '0-5', male: 89, female: 85, total: 174 },
    { range: '6-10', male: 95, female: 92, total: 187 },
    { range: '11-15', male: 102, female: 98, total: 200 },
    { range: '16-20', male: 112, female: 108, total: 220 },
    { range: '21-25', male: 125, female: 120, total: 245 },
    { range: '26-30', male: 140, female: 138, total: 278 },
    { range: '31-35', male: 135, female: 133, total: 268 },
    { range: '36-40', male: 128, female: 130, total: 258 },
    { range: '41-45', male: 120, female: 125, total: 245 },
    { range: '46-50', male: 110, female: 115, total: 225 },
    { range: '51-55', male: 98, female: 105, total: 203 },
    { range: '56-60', male: 85, female: 95, total: 180 },
    { range: '61-65', male: 72, female: 85, total: 157 },
    { range: '66-70', male: 58, female: 70, total: 128 },
    { range: '71-75', male: 45, female: 58, total: 103 },
    { range: '76-80', male: 35, female: 48, total: 83 },
    { range: '81+', male: 25, female: 38, total: 63 }
  ];

  const pyramidData = ageRangeData.map(item => ({
    range: item.range,
    male: -item.male,
    female: item.female
  }));

  const genderDistribution = [
    { name: 'Laki-laki', value: ageRangeData.reduce((sum, item) => sum + item.male, 0), color: '#3b82f6' },
    { name: 'Perempuan', value: ageRangeData.reduce((sum, item) => sum + item.female, 0), color: '#ec4899' }
  ];

  const birthRateData = [
    { year: '2020', births: 45 },
    { year: '2021', births: 52 },
    { year: '2022', births: 48 },
    { year: '2023', births: 55 },
    { year: '2024', births: 51 }
  ];

  const totalPopulation = ageRangeData.reduce((sum, item) => sum + item.total, 0);
  const workingAge = ageRangeData.slice(3, 12).reduce((sum, item) => sum + item.total, 0);
  const elderlyAge = ageRangeData.slice(12).reduce((sum, item) => sum + item.total, 0);
  const childAge = ageRangeData.slice(0, 3).reduce((sum, item) => sum + item.total, 0);

  return (
    <StatisticsLayout
      title="Statistik Rentang Umur"
      description="Analisis detail distribusi penduduk berdasarkan rentang usia 5 tahunan di Desa Fajar Baru"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6 h-auto">
          <TabsTrigger value="overview" className="text-xs sm:text-sm py-2 px-2">Ringkasan</TabsTrigger>
          <TabsTrigger value="pyramid" className="text-xs sm:text-sm py-2 px-2">Piramida</TabsTrigger>
          <TabsTrigger value="trends" className="text-xs sm:text-sm py-2 px-2">Tren</TabsTrigger>
          <TabsTrigger value="details" className="text-xs sm:text-sm py-2 px-2">Detail</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <Card className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Total Penduduk</h3>
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-600">{totalPopulation.toLocaleString()}</p>
            </Card>
            <Card className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Anak (0-15)</h3>
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-green-600">{childAge.toLocaleString()}</p>
            </Card>
            <Card className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Produktif (16-60)</h3>
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-purple-600">{workingAge.toLocaleString()}</p>
            </Card>
            <Card className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Lansia (61+)</h3>
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-orange-600">{elderlyAge.toLocaleString()}</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Distribusi Jenis Kelamin</h3>
              <div className="h-48 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genderDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius="80%"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    >
                      {genderDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Tren Kelahiran</h3>
              <div className="h-48 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={birthRateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Tooltip />
                    <Line type="monotone" dataKey="births" stroke="#22c55e" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pyramid" className="space-y-4 sm:space-y-6">
          <Card className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 lg:mb-6">Piramida Penduduk</h3>
            <div className="h-96 sm:h-[500px] lg:h-[600px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={pyramidData}
                  layout="horizontal"
                  margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    type="number" 
                    domain={["-150", "150"]}
                    tickFormatter={(value) => Math.abs(Number(value)).toString()}
                    fontSize={10}
                  />
                  <YAxis type="category" dataKey="range" fontSize={10} />
                  <Tooltip 
                    formatter={(value, name) => [Math.abs(Number(value)), name === 'male' ? 'Laki-laki' : 'Perempuan']}
                  />
                  <Bar dataKey="male" fill="#3b82f6" name="Laki-laki" />
                  <Bar dataKey="female" fill="#ec4899" name="Perempuan" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4 sm:space-y-6">
          <Card className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Distribusi Populasi per Kelompok Umur</h3>
            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageRangeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="range" fontSize={10} />
                  <YAxis fontSize={10} />
                  <Tooltip />
                  <Bar dataKey="total" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Analisis Demografi</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">Kelompok Terbesar</p>
                  <p className="text-sm text-blue-700">26-30 tahun ({Math.max(...ageRangeData.map(d => d.total))} orang)</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-green-800">Sex Ratio</p>
                  <p className="text-sm text-green-700">{(genderDistribution[0].value / genderDistribution[1].value * 100).toFixed(1)} : 100</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Proyeksi</h4>
              <div className="space-y-3">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-orange-800">Aging Index</p>
                  <p className="text-sm text-orange-700">{((elderlyAge / childAge) * 100).toFixed(1)}%</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-purple-800">Rata-rata Kelahiran</p>
                  <p className="text-sm text-purple-700">{(birthRateData.reduce((sum, item) => sum + item.births, 0) / birthRateData.length).toFixed(1)} per tahun</p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-4 sm:space-y-6">
          <Card className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Tabel Detail Rentang Umur</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">Rentang Umur</th>
                    <th className="text-center py-2 px-3 font-semibold text-gray-800">Laki-laki</th>
                    <th className="text-center py-2 px-3 font-semibold text-gray-800">Perempuan</th>
                    <th className="text-center py-2 px-3 font-semibold text-gray-800">Total</th>
                    <th className="text-center py-2 px-3 font-semibold text-gray-800">Persentase</th>
                  </tr>
                </thead>
                <tbody>
                  {ageRangeData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2 px-3 font-medium">{item.range} tahun</td>
                      <td className="text-center py-2 px-3">{item.male}</td>
                      <td className="text-center py-2 px-3">{item.female}</td>
                      <td className="text-center py-2 px-3 font-semibold">{item.total}</td>
                      <td className="text-center py-2 px-3">{((item.total / totalPopulation) * 100).toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </StatisticsLayout>
  );
};

export default AgeRange;
