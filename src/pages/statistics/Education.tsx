
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Education = () => {
  const educationData = [
    { level: 'Tidak Sekolah', count: 145, color: '#ef4444' },
    { level: 'SD/Sederajat', count: 890, color: '#f97316' },
    { level: 'SMP/Sederajat', count: 672, color: '#eab308' },
    { level: 'SMA/Sederajat', count: 548, color: '#22c55e' },
    { level: 'Diploma', count: 234, color: '#3b82f6' },
    { level: 'Sarjana (S1)', count: 289, color: '#8b5cf6' },
    { level: 'Pascasarjana (S2/S3)', count: 69, color: '#ec4899' }
  ];

  const byGenderData = [
    { level: 'Tidak Sekolah', male: 67, female: 78 },
    { level: 'SD', male: 445, female: 445 },
    { level: 'SMP', male: 342, female: 330 },
    { level: 'SMA', male: 278, female: 270 },
    { level: 'Diploma', male: 105, female: 129 },
    { level: 'Sarjana', male: 134, female: 155 },
    { level: 'Pascasarjana', male: 32, female: 37 }
  ];

  const totalPopulation = educationData.reduce((sum, item) => sum + item.count, 0);

  return (
    <StatisticsLayout
      title="Statistik Pendidikan Dalam KK"
      description="Data tingkat pendidikan penduduk Desa Fajar Baru berdasarkan kepala keluarga"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Ringkasan</TabsTrigger>
          <TabsTrigger value="charts">Grafik</TabsTrigger>
          <TabsTrigger value="details">Detail</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Penduduk</h3>
              <p className="text-3xl font-bold text-blue-600">{totalPopulation.toLocaleString()}</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Berpendidikan Tinggi</h3>
              <p className="text-3xl font-bold text-purple-600">
                {(educationData.slice(-3).reduce((sum, item) => sum + item.count, 0)).toLocaleString()}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Pendidikan Menengah</h3>
              <p className="text-3xl font-bold text-green-600">
                {(educationData.slice(2, 4).reduce((sum, item) => sum + item.count, 0)).toLocaleString()}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Tingkat Literasi</h3>
              <p className="text-3xl font-bold text-emerald-600">
                {(((totalPopulation - educationData[0].count) / totalPopulation) * 100).toFixed(1)}%
              </p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="charts" className="space-y-6">
          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Distribusi Tingkat Pendidikan</h3>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={educationData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    dataKey="count"
                    label={({ level, percent }) => `${level} ${(percent * 100).toFixed(1)}%`}
                  >
                    {educationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => value.toLocaleString()} />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Perbandingan Berdasarkan Jenis Kelamin</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={byGenderData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="level" angle={-45} textAnchor="end" height={80} />
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
          {/* Detailed Table */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Tabel Detail Tingkat Pendidikan</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Tingkat Pendidikan</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Jumlah</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Persentase</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Laki-laki</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Perempuan</th>
                  </tr>
                </thead>
                <tbody>
                  {educationData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{item.level}</td>
                      <td className="text-center py-3 px-4 font-semibold">{item.count}</td>
                      <td className="text-center py-3 px-4">
                        {((item.count / totalPopulation) * 100).toFixed(1)}%
                      </td>
                      <td className="text-center py-3 px-4">{byGenderData[index]?.male || 0}</td>
                      <td className="text-center py-3 px-4">{byGenderData[index]?.female || 0}</td>
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

export default Education;
