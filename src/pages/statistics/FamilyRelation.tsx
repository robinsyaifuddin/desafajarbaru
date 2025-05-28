
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const FamilyRelation = () => {
  const relationData = [
    { relation: 'Kepala Keluarga', count: 567, percentage: 25.2, color: '#22c55e' },
    { relation: 'Istri', count: 543, percentage: 24.1, color: '#ec4899' },
    { relation: 'Anak', count: 834, percentage: 37.1, color: '#3b82f6' },
    { relation: 'Menantu', count: 123, percentage: 5.5, color: '#f97316' },
    { relation: 'Cucu', count: 89, percentage: 4.0, color: '#eab308' },
    { relation: 'Orang Tua', count: 67, percentage: 3.0, color: '#8b5cf6' },
    { relation: 'Lainnya', count: 24, percentage: 1.1, color: '#ef4444' }
  ];

  const byGender = [
    { relation: 'Kepala KK', male: 534, female: 33 },
    { relation: 'Istri', male: 0, female: 543 },
    { relation: 'Anak', male: 417, female: 417 },
    { relation: 'Menantu', male: 45, female: 78 },
    { relation: 'Cucu', male: 44, female: 45 },
    { relation: 'Orang Tua', male: 32, female: 35 },
    { relation: 'Lainnya', male: 12, female: 12 }
  ];

  const totalPopulation = relationData.reduce((sum, item) => sum + item.count, 0);

  return (
    <StatisticsLayout
      title="Statistik Hubungan Dalam KK"
      description="Data hubungan kekerabatan dalam keluarga di Desa Fajar Baru"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Ringkasan</TabsTrigger>
          <TabsTrigger value="charts">Grafik</TabsTrigger>
          <TabsTrigger value="details">Detail</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {relationData.map((item, index) => (
              <Card key={index} className="p-4 text-center">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.relation}</h3>
                <p className="text-2xl font-bold" style={{ color: item.color }}>{item.count}</p>
                <p className="text-sm text-gray-600">{item.percentage}%</p>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="charts" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Distribusi Hubungan Keluarga</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={relationData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="count"
                    label={({ relation, percentage }) => `${relation} ${percentage}%`}
                  >
                    {relationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Perbandingan per Jenis Kelamin</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={byGender}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="relation" angle={-45} textAnchor="end" height={80} />
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
            <h3 className="text-xl font-bold text-gray-800 mb-6">Tabel Detail Hubungan Keluarga</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Hubungan</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Jumlah</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Persentase</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Laki-laki</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Perempuan</th>
                  </tr>
                </thead>
                <tbody>
                  {relationData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{item.relation}</td>
                      <td className="text-center py-3 px-4 font-semibold">{item.count}</td>
                      <td className="text-center py-3 px-4">{item.percentage}%</td>
                      <td className="text-center py-3 px-4">{byGender[index]?.male || 0}</td>
                      <td className="text-center py-3 px-4">{byGender[index]?.female || 0}</td>
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

export default FamilyRelation;
