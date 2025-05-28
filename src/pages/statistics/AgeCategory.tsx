
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AgeCategory = () => {
  const ageCategoryData = [
    { category: 'Balita (0-5)', count: 156, percentage: 6.9, color: '#ef4444' },
    { category: 'Anak (6-11)', count: 189, percentage: 8.4, color: '#f97316' },
    { category: 'Remaja (12-25)', count: 567, percentage: 25.2, color: '#eab308' },
    { category: 'Dewasa (26-45)', count: 789, percentage: 35.1, color: '#22c55e' },
    { category: 'Paruh Baya (46-65)', count: 423, percentage: 18.8, color: '#3b82f6' },
    { category: 'Lansia (65+)', count: 123, percentage: 5.5, color: '#8b5cf6' }
  ];

  const genderByCategory = [
    { category: 'Balita', male: 78, female: 78 },
    { category: 'Anak', male: 96, female: 93 },
    { category: 'Remaja', male: 289, female: 278 },
    { category: 'Dewasa', male: 398, female: 391 },
    { category: 'Paruh Baya', male: 213, female: 210 },
    { category: 'Lansia', male: 58, female: 65 }
  ];

  const totalPopulation = ageCategoryData.reduce((sum, item) => sum + item.count, 0);

  return (
    <StatisticsLayout
      title="Statistik Kategori Umur"
      description="Data distribusi penduduk berdasarkan kategori umur di Desa Fajar Baru"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Ringkasan</TabsTrigger>
          <TabsTrigger value="charts">Grafik</TabsTrigger>
          <TabsTrigger value="details">Detail</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ageCategoryData.map((item, index) => (
              <Card key={index} className="p-4 text-center">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.category}</h3>
                <p className="text-2xl font-bold" style={{ color: item.color }}>{item.count}</p>
                <p className="text-sm text-gray-600">{item.percentage}%</p>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="charts" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Distribusi Kategori Umur</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={ageCategoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="count"
                    label={({ category, percentage }) => `${category} ${percentage}%`}
                  >
                    {ageCategoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Perbandingan Jenis Kelamin</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={genderByCategory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" angle={-45} textAnchor="end" height={80} />
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
            <h3 className="text-xl font-bold text-gray-800 mb-6">Tabel Detail Kategori Umur</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Kategori</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Jumlah</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Persentase</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Laki-laki</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Perempuan</th>
                  </tr>
                </thead>
                <tbody>
                  {ageCategoryData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{item.category}</td>
                      <td className="text-center py-3 px-4 font-semibold">{item.count}</td>
                      <td className="text-center py-3 px-4">{item.percentage}%</td>
                      <td className="text-center py-3 px-4">{genderByCategory[index]?.male || 0}</td>
                      <td className="text-center py-3 px-4">{genderByCategory[index]?.female || 0}</td>
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

export default AgeCategory;
