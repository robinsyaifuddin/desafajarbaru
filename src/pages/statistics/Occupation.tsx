
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Occupation = () => {
  const occupationData = [
    { job: 'Petani', count: 456, color: '#22c55e', percentage: 32.1 },
    { job: 'Pedagang', count: 234, color: '#3b82f6', percentage: 16.5 },
    { job: 'Buruh Tani', count: 187, color: '#f97316', percentage: 13.2 },
    { job: 'PNS', count: 123, color: '#8b5cf6', percentage: 8.7 },
    { job: 'Wirausaha', count: 167, color: '#ec4899', percentage: 11.8 },
    { job: 'Guru', count: 89, color: '#10b981', percentage: 6.3 },
    { job: 'Supir', count: 67, color: '#f59e0b', percentage: 4.7 },
    { job: 'Ibu Rumah Tangga', count: 78, color: '#ef4444', percentage: 5.5 },
    { job: 'Lainnya', count: 19, color: '#6b7280', percentage: 1.3 }
  ];

  const economicSectorData = [
    { sector: 'Pertanian', count: 643, color: '#22c55e' },
    { sector: 'Perdagangan', count: 401, color: '#3b82f6' },
    { sector: 'Jasa', count: 212, color: '#8b5cf6' },
    { sector: 'Pemerintahan', count: 123, color: '#f97316' },
    { sector: 'Transportasi', count: 67, color: '#f59e0b' },
    { sector: 'Lainnya', count: 97, color: '#6b7280' }
  ];

  const totalWorkers = occupationData.reduce((sum, item) => sum + item.count, 0);
  const workingAge = 1420; // Asumsi penduduk usia kerja

  return (
    <StatisticsLayout
      title="Statistik Pekerjaan"
      description="Data mata pencaharian dan sektor ekonomi penduduk Desa Fajar Baru"
    >
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Pekerja</h3>
          <p className="text-3xl font-bold text-blue-600">{totalWorkers.toLocaleString()}</p>
        </Card>
        <Card className="p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Tingkat Partisipasi</h3>
          <p className="text-3xl font-bold text-green-600">
            {((totalWorkers / workingAge) * 100).toFixed(1)}%
          </p>
        </Card>
        <Card className="p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Sektor Utama</h3>
          <p className="text-2xl font-bold text-emerald-600">Pertanian</p>
        </Card>
        <Card className="p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Wirausaha</h3>
          <p className="text-3xl font-bold text-purple-600">{occupationData[4].count}</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Distribusi Mata Pencaharian</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={occupationData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="job" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Distribusi Sektor Ekonomi</h3>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={economicSectorData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="count"
                label={({ sector, percent }) => `${sector} ${(percent * 100).toFixed(1)}%`}
              >
                {economicSectorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => value.toLocaleString()} />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Detailed Tables */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Tabel Detail Mata Pencaharian</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Pekerjaan</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-800">Jumlah</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-800">%</th>
                </tr>
              </thead>
              <tbody>
                {occupationData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{item.job}</td>
                    <td className="text-center py-3 px-4 font-semibold">{item.count}</td>
                    <td className="text-center py-3 px-4">{item.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Tabel Sektor Ekonomi</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Sektor</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-800">Jumlah</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-800">%</th>
                </tr>
              </thead>
              <tbody>
                {economicSectorData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{item.sector}</td>
                    <td className="text-center py-3 px-4 font-semibold">{item.count}</td>
                    <td className="text-center py-3 px-4">
                      {((item.count / totalWorkers) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </StatisticsLayout>
  );
};

export default Occupation;
