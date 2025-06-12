
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Eye, Users, Heart, Activity } from 'lucide-react';

const Disability = () => {
  const disabilityData = [
    { type: 'Tidak Ada', count: 2678, percentage: 94.1, color: '#10b981' },
    { type: 'Fisik', count: 89, percentage: 3.1, color: '#3b82f6' },
    { type: 'Mental', count: 45, percentage: 1.6, color: '#f59e0b' },
    { type: 'Sensorik', count: 35, percentage: 1.2, color: '#ef4444' }
  ];

  const disabilityTypes = [
    { name: 'Cacat Fisik', male: 48, female: 41, total: 89 },
    { name: 'Cacat Mental', male: 23, female: 22, total: 45 },
    { name: 'Cacat Sensorik', male: 19, female: 16, total: 35 },
    { name: 'Cacat Ganda', male: 8, female: 5, total: 13 }
  ];

  const ageGroupData = [
    { ageGroup: '0-17', fisik: 12, mental: 18, sensorik: 8, ganda: 3 },
    { ageGroup: '18-35', fisik: 23, mental: 15, sensorik: 11, ganda: 4 },
    { ageGroup: '36-55', fisik: 34, mental: 8, sensorik: 12, ganda: 4 },
    { ageGroup: '56+', fisik: 20, mental: 4, sensorik: 4, ganda: 2 }
  ];

  const summary = [
    { label: 'Total Penduduk Difabel', value: '169', icon: Users, color: 'bg-blue-500' },
    { label: 'Persentase Difabel', value: '5.9%', icon: Activity, color: 'bg-purple-500' },
    { label: 'Cacat Fisik Terbanyak', value: '89 orang', icon: Heart, color: 'bg-red-500' }
  ];

  return (
    <StatisticsLayout 
      title="Statistik Penyandang Cacat"
      description="Data distribusi penduduk penyandang disabilitas di Desa Fajar Baru Way Kandis berdasarkan jenis dan tingkat kecacatan"
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
          {/* Disability Distribution */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Kondisi Difabilitas</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={disabilityData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="count"
                    label={({ type, percentage }) => `${type}: ${percentage}%`}
                  >
                    {disabilityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} orang`, 'Jumlah']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Disability by Gender */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Jenis Difabilitas Berdasarkan Gender</h3>
            <div className="space-y-4">
              {disabilityTypes.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-lg font-bold">{item.total} orang</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span>Laki-laki:</span>
                      <span className="font-medium text-blue-600">{item.male}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Perempuan:</span>
                      <span className="font-medium text-pink-600">{item.female}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Disability by Age Group */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Jenis Difabilitas Berdasarkan Kelompok Usia</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageGroupData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ageGroup" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="fisik" fill="#3b82f6" name="Cacat Fisik" />
                  <Bar dataKey="mental" fill="#f59e0b" name="Cacat Mental" />
                  <Bar dataKey="sensorik" fill="#ef4444" name="Cacat Sensorik" />
                  <Bar dataKey="ganda" fill="#8b5cf6" name="Cacat Ganda" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Support Programs */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Program Bantuan untuk Penyandang Disabilitas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Bantuan Sosial Penyandang Disabilitas</h4>
              <p className="text-blue-600">89 penerima</p>
              <p className="text-sm text-blue-500">Rp 300,000/bulan</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Program Rehabilitasi</h4>
              <p className="text-green-600">45 peserta</p>
              <p className="text-sm text-green-500">Terapi & pelatihan</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Pelatihan Keterampilan</h4>
              <p className="text-purple-600">23 peserta</p>
              <p className="text-sm text-purple-500">Pelatihan vokasi</p>
            </div>
          </div>
        </Card>

        {/* Detailed Table */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Detail Statistik Penyandang Disabilitas</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Jenis Difabilitas</th>
                  <th className="text-center py-3 px-4">Laki-laki</th>
                  <th className="text-center py-3 px-4">Perempuan</th>
                  <th className="text-center py-3 px-4">Total</th>
                  <th className="text-center py-3 px-4">Persentase</th>
                  <th className="text-center py-3 px-4">Bantuan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Cacat Tubuh</td>
                  <td className="text-center py-3 px-4">28</td>
                  <td className="text-center py-3 px-4">25</td>
                  <td className="text-center py-3 px-4">53</td>
                  <td className="text-center py-3 px-4">1.9%</td>
                  <td className="text-center py-3 px-4">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Cacat Netra</td>
                  <td className="text-center py-3 px-4">12</td>
                  <td className="text-center py-3 px-4">10</td>
                  <td className="text-center py-3 px-4">22</td>
                  <td className="text-center py-3 px-4">0.8%</td>
                  <td className="text-center py-3 px-4">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Cacat Rungu/Wicara</td>
                  <td className="text-center py-3 px-4">7</td>
                  <td className="text-center py-3 px-4">6</td>
                  <td className="text-center py-3 px-4">13</td>
                  <td className="text-center py-3 px-4">0.5%</td>
                  <td className="text-center py-3 px-4">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Cacat Mental</td>
                  <td className="text-center py-3 px-4">23</td>
                  <td className="text-center py-3 px-4">22</td>
                  <td className="text-center py-3 px-4">45</td>
                  <td className="text-center py-3 px-4">1.6%</td>
                  <td className="text-center py-3 px-4">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Cacat Fisik & Mental</td>
                  <td className="text-center py-3 px-4">20</td>
                  <td className="text-center py-3 px-4">16</td>
                  <td className="text-center py-3 px-4">36</td>
                  <td className="text-center py-3 px-4">1.3%</td>
                  <td className="text-center py-3 px-4">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </StatisticsLayout>
  );
};

export default Disability;
