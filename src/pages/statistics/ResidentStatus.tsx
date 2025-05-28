
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ResidentStatus = () => {
  const statusData = [
    { status: 'Tetap', count: 2034, percentage: 90.5, color: '#22c55e' },
    { status: 'Tidak Tetap', count: 156, percentage: 6.9, color: '#f97316' },
    { status: 'Pendatang', count: 45, percentage: 2.0, color: '#3b82f6' },
    { status: 'Pindahan', count: 12, percentage: 0.5, color: '#ef4444' }
  ];

  const byDuration = [
    { duration: '< 1 tahun', tetap: 0, tidakTetap: 67, pendatang: 23, pindahan: 8 },
    { duration: '1-5 tahun', tetap: 123, tidakTetap: 45, pendatang: 15, pindahan: 3 },
    { duration: '5-10 tahun', tetap: 234, tidakTetap: 32, pendatang: 5, pindahan: 1 },
    { duration: '> 10 tahun', tetap: 1677, tidakTetap: 12, pendatang: 2, pindahan: 0 }
  ];

  const totalPopulation = statusData.reduce((sum, item) => sum + item.count, 0);

  return (
    <StatisticsLayout
      title="Statistik Status Penduduk"
      description="Data status kependudukan di Desa Fajar Baru"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Ringkasan</TabsTrigger>
          <TabsTrigger value="charts">Grafik</TabsTrigger>
          <TabsTrigger value="details">Detail</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statusData.map((item, index) => (
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
              <h3 className="text-xl font-bold text-gray-800 mb-6">Distribusi Status Penduduk</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="count"
                    label={({ status, percentage }) => `${status} ${percentage}%`}
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Status Berdasarkan Lama Tinggal</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={byDuration}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="duration" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="tetap" fill="#22c55e" name="Tetap" />
                  <Bar dataKey="tidakTetap" fill="#f97316" name="Tidak Tetap" />
                  <Bar dataKey="pendatang" fill="#3b82f6" name="Pendatang" />
                  <Bar dataKey="pindahan" fill="#ef4444" name="Pindahan" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Tabel Detail Status Penduduk</h3>
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
                  {statusData.map((item, index) => (
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

export default ResidentStatus;
