
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Droplets, Users, TrendingUp } from 'lucide-react';

const BloodType = () => {
  const bloodTypeData = [
    { type: 'O', count: 1234, percentage: 43.4, color: '#ef4444' },
    { type: 'A', count: 892, percentage: 31.3, color: '#3b82f6' },
    { type: 'B', count: 567, percentage: 19.9, color: '#10b981' },
    { type: 'AB', count: 154, percentage: 5.4, color: '#f59e0b' }
  ];

  const rhesusData = [
    { rhesus: 'Positif (+)', count: 2645, percentage: 92.9 },
    { rhesus: 'Negatif (-)', count: 202, percentage: 7.1 }
  ];

  const ageGroupBloodType = [
    { ageGroup: '0-17', O: 534, A: 389, B: 245, AB: 67 },
    { ageGroup: '18-35', O: 567, A: 423, B: 234, AB: 78 },
    { ageGroup: '36-55', O: 398, A: 267, B: 178, AB: 45 },
    { ageGroup: '56+', O: 189, A: 134, B: 89, AB: 23 }
  ];

  const summary = [
    { label: 'Total Data Golongan Darah', value: '2,847', icon: Users, color: 'bg-blue-500' },
    { label: 'Golongan Darah Terbanyak', value: 'O (43.4%)', icon: Droplets, color: 'bg-red-500' },
    { label: 'Rhesus Positif', value: '92.9%', icon: TrendingUp, color: 'bg-green-500' }
  ];

  return (
    <StatisticsLayout 
      title="Statistik Golongan Darah"
      description="Data distribusi golongan darah penduduk Desa Fajar Baru Way Kandis berdasarkan sistem ABO dan Rhesus"
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
          {/* Blood Type Distribution */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Golongan Darah ABO</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={bloodTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="count"
                    label={({ type, percentage }) => `${type}: ${percentage}%`}
                  >
                    {bloodTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} orang`, 'Jumlah']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {bloodTypeData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                  <div>
                    <p className="font-semibold">Golongan {item.type}</p>
                    <p className="text-sm text-gray-600">{item.count} orang ({item.percentage}%)</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Rhesus Distribution */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Rhesus</h3>
            <div className="space-y-4">
              {rhesusData.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{item.rhesus}</span>
                    <span className="text-lg font-bold">{item.count} orang</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-red-500'}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.percentage}% dari total penduduk</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Blood Type by Age Group */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Golongan Darah Berdasarkan Kelompok Usia</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageGroupBloodType}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ageGroup" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="O" stackId="a" fill="#ef4444" name="Golongan O" />
                  <Bar dataKey="A" stackId="a" fill="#3b82f6" name="Golongan A" />
                  <Bar dataKey="B" stackId="a" fill="#10b981" name="Golongan B" />
                  <Bar dataKey="AB" stackId="a" fill="#f59e0b" name="Golongan AB" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Detailed Statistics */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Statistik Detail Golongan Darah</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Golongan Darah</th>
                  <th className="text-center py-3 px-4">Laki-laki</th>
                  <th className="text-center py-3 px-4">Perempuan</th>
                  <th className="text-center py-3 px-4">Total</th>
                  <th className="text-center py-3 px-4">Persentase</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">O Positif</td>
                  <td className="text-center py-3 px-4">634</td>
                  <td className="text-center py-3 px-4">567</td>
                  <td className="text-center py-3 px-4">1,201</td>
                  <td className="text-center py-3 px-4">42.2%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">A Positif</td>
                  <td className="text-center py-3 px-4">456</td>
                  <td className="text-center py-3 px-4">423</td>
                  <td className="text-center py-3 px-4">879</td>
                  <td className="text-center py-3 px-4">30.9%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">B Positif</td>
                  <td className="text-center py-3 px-4">289</td>
                  <td className="text-center py-3 px-4">267</td>
                  <td className="text-center py-3 px-4">556</td>
                  <td className="text-center py-3 px-4">19.5%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">AB Positif</td>
                  <td className="text-center py-3 px-4">78</td>
                  <td className="text-center py-3 px-4">67</td>
                  <td className="text-center py-3 px-4">145</td>
                  <td className="text-center py-3 px-4">5.1%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">O Negatif</td>
                  <td className="text-center py-3 px-4">18</td>
                  <td className="text-center py-3 px-4">15</td>
                  <td className="text-center py-3 px-4">33</td>
                  <td className="text-center py-3 px-4">1.2%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Lainnya</td>
                  <td className="text-center py-3 px-4">18</td>
                  <td className="text-center py-3 px-4">15</td>
                  <td className="text-center py-3 px-4">33</td>
                  <td className="text-center py-3 px-4">1.2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </StatisticsLayout>
  );
};

export default BloodType;
