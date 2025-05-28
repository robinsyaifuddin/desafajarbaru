
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Gender = () => {
  const genderData = [
    { gender: 'Laki-laki', count: 1145, percentage: 50.9, color: '#3b82f6' },
    { gender: 'Perempuan', count: 1102, percentage: 49.1, color: '#ec4899' }
  ];

  const byAgeGroup = [
    { age: '0-10', male: 120, female: 115 },
    { age: '11-20', male: 180, female: 165 },
    { age: '21-30', male: 220, female: 205 },
    { age: '31-40', male: 195, female: 185 },
    { age: '41-50', male: 160, female: 155 },
    { age: '51-60', male: 140, female: 135 },
    { age: '61-70', male: 85, female: 90 },
    { age: '71+', male: 45, female: 52 }
  ];

  const totalPopulation = genderData.reduce((sum, item) => sum + item.count, 0);
  const sexRatio = (genderData[0].count / genderData[1].count * 100).toFixed(1);

  return (
    <StatisticsLayout
      title="Statistik Jenis Kelamin"
      description="Data distribusi jenis kelamin penduduk Desa Fajar Baru"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Ringkasan</TabsTrigger>
          <TabsTrigger value="charts">Grafik</TabsTrigger>
          <TabsTrigger value="details">Detail</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Penduduk</h3>
              <p className="text-3xl font-bold text-gray-800">{totalPopulation.toLocaleString()}</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Laki-laki</h3>
              <p className="text-3xl font-bold text-blue-600">{genderData[0].count.toLocaleString()}</p>
              <p className="text-sm text-gray-600">{genderData[0].percentage}%</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Perempuan</h3>
              <p className="text-3xl font-bold text-pink-600">{genderData[1].count.toLocaleString()}</p>
              <p className="text-sm text-gray-600">{genderData[1].percentage}%</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sex Ratio</h3>
              <p className="text-3xl font-bold text-emerald-600">{sexRatio}</p>
              <p className="text-sm text-gray-600">L:P per 100</p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="charts" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Perbandingan Jenis Kelamin</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="count"
                    label={({ gender, percentage }) => `${gender} ${percentage}%`}
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Distribusi per Kelompok Umur</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={byAgeGroup}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="male" fill="#3b82f6" name="Laki-laki" />
                  <Bar dataKey="female" fill="#ec4899" name="Perempuan" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Tabel Detail per Kelompok Umur</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Kelompok Umur</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Laki-laki</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Perempuan</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Total</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Sex Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  {byAgeGroup.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{item.age} tahun</td>
                      <td className="text-center py-3 px-4">{item.male}</td>
                      <td className="text-center py-3 px-4">{item.female}</td>
                      <td className="text-center py-3 px-4 font-semibold">{item.male + item.female}</td>
                      <td className="text-center py-3 px-4">{(item.male / item.female * 100).toFixed(1)}</td>
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

export default Gender;
