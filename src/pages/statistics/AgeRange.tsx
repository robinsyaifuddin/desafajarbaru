
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AgeRange = () => {
  const ageRangeData = [
    { range: '0-10', male: 120, female: 115, total: 235 },
    { range: '11-20', male: 180, female: 165, total: 345 },
    { range: '21-30', male: 220, female: 205, total: 425 },
    { range: '31-40', male: 195, female: 185, total: 380 },
    { range: '41-50', male: 160, female: 155, total: 315 },
    { range: '51-60', male: 140, female: 135, total: 275 },
    { range: '61-70', male: 85, female: 90, total: 175 },
    { range: '71+', male: 45, female: 52, total: 97 }
  ];

  const genderDistribution = [
    { name: 'Laki-laki', value: 1145, color: '#3b82f6' },
    { name: 'Perempuan', value: 1102, color: '#ec4899' }
  ];

  const totalPopulation = ageRangeData.reduce((sum, item) => sum + item.total, 0);

  return (
    <StatisticsLayout
      title="Statistik Rentang Umur"
      description="Data distribusi penduduk berdasarkan rentang umur di Desa Fajar Baru"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Ringkasan</TabsTrigger>
          <TabsTrigger value="charts">Grafik</TabsTrigger>
          <TabsTrigger value="details">Detail</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Penduduk</h3>
              <p className="text-3xl font-bold text-blue-600">{totalPopulation.toLocaleString()}</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Laki-laki</h3>
              <p className="text-3xl font-bold text-blue-500">{genderDistribution[0].value.toLocaleString()}</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Perempuan</h3>
              <p className="text-3xl font-bold text-pink-500">{genderDistribution[1].value.toLocaleString()}</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Rasio L:P</h3>
              <p className="text-3xl font-bold text-emerald-600">
                {(genderDistribution[0].value / genderDistribution[1].value).toFixed(2)}
              </p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="charts" className="space-y-6">
          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Distribusi Berdasarkan Rentang Umur</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={ageRangeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="range" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="male" fill="#3b82f6" name="Laki-laki" />
                  <Bar dataKey="female" fill="#ec4899" name="Perempuan" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Perbandingan Jenis Kelamin</h3>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={genderDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                  >
                    {genderDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => value.toLocaleString()} />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-6">
          {/* Detailed Table */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Tabel Detail Rentang Umur</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Rentang Umur</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Laki-laki</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Perempuan</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Total</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Persentase</th>
                  </tr>
                </thead>
                <tbody>
                  {ageRangeData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{item.range} tahun</td>
                      <td className="text-center py-3 px-4">{item.male}</td>
                      <td className="text-center py-3 px-4">{item.female}</td>
                      <td className="text-center py-3 px-4 font-semibold">{item.total}</td>
                      <td className="text-center py-3 px-4">
                        {((item.total / totalPopulation) * 100).toFixed(1)}%
                      </td>
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
