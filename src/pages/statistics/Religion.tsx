
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Religion = () => {
  const religionData = [
    { religion: 'Islam', count: 1856, percentage: 82.5, color: '#22c55e' },
    { religion: 'Kristen Protestan', count: 234, percentage: 10.4, color: '#3b82f6' },
    { religion: 'Katolik', count: 89, percentage: 4.0, color: '#8b5cf6' },
    { religion: 'Hindu', count: 45, percentage: 2.0, color: '#f97316' },
    { religion: 'Buddha', count: 23, percentage: 1.0, color: '#eab308' },
    { religion: 'Konghucu', count: 2, percentage: 0.1, color: '#ef4444' }
  ];

  const byGender = [
    { religion: 'Islam', male: 928, female: 928 },
    { religion: 'Protestan', male: 117, female: 117 },
    { religion: 'Katolik', male: 44, female: 45 },
    { religion: 'Hindu', male: 23, female: 22 },
    { religion: 'Buddha', male: 12, female: 11 },
    { religion: 'Konghucu', male: 1, female: 1 }
  ];

  const totalPopulation = religionData.reduce((sum, item) => sum + item.count, 0);

  return (
    <StatisticsLayout
      title="Statistik Agama"
      description="Data keberagaman agama penduduk Desa Fajar Baru"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Ringkasan</TabsTrigger>
          <TabsTrigger value="charts">Grafik</TabsTrigger>
          <TabsTrigger value="details">Detail</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {religionData.map((item, index) => (
              <Card key={index} className="p-4 text-center">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.religion}</h3>
                <p className="text-2xl font-bold" style={{ color: item.color }}>{item.count}</p>
                <p className="text-sm text-gray-600">{item.percentage}%</p>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="charts" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Distribusi Agama</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={religionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="count"
                    label={({ religion, percentage }) => `${religion} ${percentage}%`}
                  >
                    {religionData.map((entry, index) => (
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
                  <XAxis dataKey="religion" angle={-45} textAnchor="end" height={80} />
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
            <h3 className="text-xl font-bold text-gray-800 mb-6">Tabel Detail Agama</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Agama</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Jumlah</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Persentase</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Laki-laki</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Perempuan</th>
                  </tr>
                </thead>
                <tbody>
                  {religionData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{item.religion}</td>
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

export default Religion;
