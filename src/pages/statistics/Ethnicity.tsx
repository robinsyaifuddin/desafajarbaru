
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Users, Globe, Activity, MapPin } from 'lucide-react';

const Ethnicity = () => {
  const ethnicityData = [
    { name: 'Jawa', count: 1523, percentage: 53.5, color: '#3b82f6' },
    { name: 'Sunda', count: 678, percentage: 23.8, color: '#10b981' },
    { name: 'Lampung', count: 345, percentage: 12.1, color: '#f59e0b' },
    { name: 'Batak', count: 156, percentage: 5.5, color: '#ef4444' },
    { name: 'Minang', count: 89, percentage: 3.1, color: '#8b5cf6' },
    { name: 'Lainnya', count: 56, percentage: 2.0, color: '#6b7280' }
  ];

  const ethnicityByRW = [
    { rw: 'RW 1', jawa: 234, sunda: 98, lampung: 45, batak: 23, minang: 12, lainnya: 8 },
    { rw: 'RW 2', jawa: 267, sunda: 123, lampung: 56, batak: 34, minang: 15, lainnya: 9 },
    { rw: 'RW 3', jawa: 189, sunda: 89, lampung: 67, batak: 28, minang: 18, lainnya: 12 },
    { rw: 'RW 4', jawa: 345, sunda: 156, lampung: 78, batak: 45, minang: 23, lainnya: 15 },
    { rw: 'RW 5', jawa: 298, sunda: 134, lampung: 56, batak: 12, minang: 11, lainnya: 7 },
    { rw: 'RW 6', jawa: 190, sunda: 78, lampung: 43, batak: 14, minang: 10, lainnya: 5 }
  ];

  const ageGroupEthnicity = [
    { ageGroup: '0-17', jawa: 456, sunda: 234, lampung: 123, others: 89 },
    { ageGroup: '18-35', jawa: 567, sunda: 289, lampung: 145, others: 112 },
    { ageGroup: '36-55', jawa: 389, sunda: 123, lampung: 67, others: 78 },
    { ageGroup: '56+', jawa: 111, sunda: 32, lampung: 10, others: 22 }
  ];

  const summary = [
    { label: 'Total Suku/Etnis', value: '6 Kelompok', icon: Users, color: 'bg-blue-500' },
    { label: 'Suku Terbanyak', value: 'Jawa (53.5%)', icon: Globe, color: 'bg-green-500' },
    { label: 'Keberagaman Etnis', value: '46.5%', icon: Activity, color: 'bg-purple-500' }
  ];

  return (
    <StatisticsLayout 
      title="Statistik Suku/Etnis"
      description="Data komposisi suku dan etnis penduduk Desa Fajar Baru Way Kandis yang mencerminkan keberagaman budaya Indonesia"
    >
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {summary.map((item, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{item.label}</p>
                  <p className="text-2xl font-bold text-gray-800">{item.value}</p>
                </div>
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}>
                  <item.icon className="text-white" size={24} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Ethnicity Distribution */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Suku/Etnis</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ethnicityData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="count"
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                  >
                    {ethnicityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} orang`, 'Jumlah']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Ethnicity Details */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Detail Komposisi Suku</h3>
            <div className="space-y-3">
              {ethnicityData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{item.count} orang</p>
                    <p className="text-sm text-gray-600">{item.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Ethnicity by Age Group */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Suku Berdasarkan Kelompok Usia</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageGroupEthnicity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ageGroup" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="jawa" fill="#3b82f6" name="Jawa" />
                  <Bar dataKey="sunda" fill="#10b981" name="Sunda" />
                  <Bar dataKey="lampung" fill="#f59e0b" name="Lampung" />
                  <Bar dataKey="others" fill="#8b5cf6" name="Lainnya" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Cultural Programs */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Program Pelestarian Budaya</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Festival Budaya Tahunan</h4>
              <p className="text-blue-600">6 suku berpartisipasi</p>
              <p className="text-sm text-blue-500">Setiap bulan Agustus</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Sanggar Seni Tradisional</h4>
              <p className="text-green-600">89 anggota aktif</p>
              <p className="text-sm text-green-500">Latihan rutin mingguan</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Kuliner Nusantara</h4>
              <p className="text-orange-600">15 warung tradisional</p>
              <p className="text-sm text-orange-500">Makanan khas daerah</p>
            </div>
          </div>
        </Card>

        {/* Ethnicity by RW Table */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Suku/Etnis per RW</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">RW</th>
                  <th className="text-center py-3 px-4">Jawa</th>
                  <th className="text-center py-3 px-4">Sunda</th>
                  <th className="text-center py-3 px-4">Lampung</th>
                  <th className="text-center py-3 px-4">Batak</th>
                  <th className="text-center py-3 px-4">Minang</th>
                  <th className="text-center py-3 px-4">Lainnya</th>
                  <th className="text-center py-3 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {ethnicityByRW.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 font-medium">{row.rw}</td>
                    <td className="text-center py-3 px-4">{row.jawa}</td>
                    <td className="text-center py-3 px-4">{row.sunda}</td>
                    <td className="text-center py-3 px-4">{row.lampung}</td>
                    <td className="text-center py-3 px-4">{row.batak}</td>
                    <td className="text-center py-3 px-4">{row.minang}</td>
                    <td className="text-center py-3 px-4">{row.lainnya}</td>
                    <td className="text-center py-3 px-4 font-bold">
                      {row.jawa + row.sunda + row.lampung + row.batak + row.minang + row.lainnya}
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

export default Ethnicity;
