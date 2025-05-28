
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const MaritalStatus = () => {
  const maritalData = [
    { status: 'Belum Kawin', count: 892, percentage: 39.7, color: '#ef4444' },
    { status: 'Kawin', count: 1245, percentage: 55.4, color: '#22c55e' },
    { status: 'Cerai Hidup', count: 78, percentage: 3.5, color: '#f97316' },
    { status: 'Cerai Mati', count: 32, percentage: 1.4, color: '#8b5cf6' }
  ];

  const byAgeGroup = [
    { age: '17-25', belumKawin: 234, kawin: 45, ceraiHidup: 2, ceraiMati: 0 },
    { age: '26-35', belumKawin: 123, kawin: 456, ceraiHidup: 12, ceraiMati: 3 },
    { age: '36-45', belumKawin: 67, kawin: 398, ceraiHidup: 23, ceraiMati: 8 },
    { age: '46-55', belumKawin: 34, kawin: 234, ceraiHidup: 28, ceraiMati: 12 },
    { age: '56+', belumKawin: 23, kawin: 112, ceraiHidup: 13, ceraiMati: 9 }
  ];

  const totalPopulation = maritalData.reduce((sum, item) => sum + item.count, 0);

  return (
    <StatisticsLayout
      title="Statistik Status Perkawinan"
      description="Data status perkawinan penduduk Desa Fajar Baru"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Ringkasan</TabsTrigger>
          <TabsTrigger value="charts">Grafik</TabsTrigger>
          <TabsTrigger value="details">Detail</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {maritalData.map((item, index) => (
              <Card key={index} className="p-4 text-center">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.status}</h3>
                <p className="text-2xl font-bold" style={{ color: item.color }}>{item.count}</p>
                <p className="text-sm text-gray-600">{item.percentage}%</p>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="charts" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Distribusi Status Perkawinan</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={maritalData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="count"
                    label={({ status, percentage }) => `${status} ${percentage}%`}
                  >
                    {maritalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Status Perkawinan per Kelompok Umur</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={byAgeGroup}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="belumKawin" fill="#ef4444" name="Belum Kawin" />
                  <Bar dataKey="kawin" fill="#22c55e" name="Kawin" />
                  <Bar dataKey="ceraiHidup" fill="#f97316" name="Cerai Hidup" />
                  <Bar dataKey="ceraiMati" fill="#8b5cf6" name="Cerai Mati" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Tabel Detail Status Perkawinan</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Status</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Jumlah</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-800">Persentase</th>
                  </tr>
                </thead>
                <tbody>
                  {maritalData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{item.status}</td>
                      <td className="text-center py-3 px-4 font-semibold">{item.count}</td>
                      <td className="text-center py-3 px-4">{item.percentage}%</td>
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

export default MaritalStatus;
