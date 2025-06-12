
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Gift, Users, Heart, Banknote } from 'lucide-react';

const IndividualAid = () => {
  const aidData = [
    { type: 'Bantuan Pendidikan', recipients: 234, budget: 450000000, color: '#3b82f6' },
    { type: 'Bantuan Kesehatan', recipients: 189, budget: 340000000, color: '#10b981' },
    { type: 'Bantuan Disabilitas', recipients: 89, budget: 156000000, color: '#f59e0b' },
    { type: 'Bantuan Lansia', recipients: 145, budget: 280000000, color: '#ef4444' },
    { type: 'Bantuan Yatim Piatu', recipients: 67, budget: 120000000, color: '#8b5cf6' }
  ];

  const aidByAge = [
    { ageGroup: '0-17', pendidikan: 234, kesehatan: 45, yatim: 67 },
    { ageGroup: '18-35', pendidikan: 23, kesehatan: 56, disabilitas: 34 },
    { ageGroup: '36-55', pendidikan: 12, kesehatan: 67, disabilitas: 45 },
    { ageGroup: '56+', pendidikan: 0, kesehatan: 21, lansia: 145 }
  ];

  const aidByRW = [
    { rw: 'RW 1', total: 89, pendidikan: 34, kesehatan: 23, disabilitas: 12, lansia: 15, yatim: 5 },
    { rw: 'RW 2', total: 123, pendidikan: 45, kesehatan: 34, disabilitas: 18, lansia: 20, yatim: 6 },
    { rw: 'RW 3', total: 78, pendidikan: 28, kesehatan: 19, disabilitas: 11, lansia: 14, yatim: 6 },
    { rw: 'RW 4', total: 156, pendidikan: 67, kesehatan: 45, disabilitas: 23, lansia: 16, yatim: 5 },
    { rw: 'RW 5', total: 134, pendidikan: 45, kesehatan: 38, disabilitas: 19, lansia: 25, yatim: 7 },
    { rw: 'RW 6', total: 89, pendidikan: 15, kesehatan: 30, disabilitas: 6, lansia: 30, yatim: 8 }
  ];

  const monthlyDistribution = [
    { month: 'Jan', total: 724, amount: 142000000 },
    { month: 'Feb', total: 724, amount: 142000000 },
    { month: 'Mar', total: 735, amount: 145000000 },
    { month: 'Apr', total: 729, amount: 143000000 },
    { month: 'Mei', total: 724, amount: 142000000 },
    { month: 'Jun', total: 724, amount: 142000000 }
  ];

  const summary = [
    { label: 'Total Penerima Bantuan', value: '724', icon: Users, color: 'bg-blue-500' },
    { label: 'Total Anggaran', value: 'Rp 1.3M', icon: Banknote, color: 'bg-green-500' },
    { label: 'Program Aktif', value: '5 Program', icon: Gift, color: 'bg-purple-500' }
  ];

  return (
    <StatisticsLayout 
      title="Statistik Bantuan Penduduk"
      description="Data program bantuan sosial yang diterima oleh penduduk Desa Fajar Baru Way Kandis secara individual"
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
          {/* Aid Distribution */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Bantuan Individual</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={aidData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="recipients"
                    label={({ type, recipients }) => `${recipients}`}
                  >
                    {aidData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} orang`, 'Penerima']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-4">
              {aidData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-medium">{item.type}</span>
                  </div>
                  <span className="text-sm font-bold">{item.recipients} orang</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Budget Allocation */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Alokasi Anggaran Bantuan</h3>
            <div className="space-y-4">
              {aidData.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">{item.type}</span>
                    <span className="text-lg font-bold">Rp {(item.budget / 1000000).toFixed(0)}M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full"
                      style={{ 
                        backgroundColor: item.color,
                        width: `${(item.budget / 450000000) * 100}%` 
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>{item.recipients} penerima</span>
                    <span>Rp {(item.budget / item.recipients / 1000).toFixed(0)}K/orang</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Aid by Age Group */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Bantuan Berdasarkan Kelompok Usia</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={aidByAge}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ageGroup" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pendidikan" fill="#3b82f6" name="Bantuan Pendidikan" />
                  <Bar dataKey="kesehatan" fill="#10b981" name="Bantuan Kesehatan" />
                  <Bar dataKey="disabilitas" fill="#f59e0b" name="Bantuan Disabilitas" />
                  <Bar dataKey="lansia" fill="#ef4444" name="Bantuan Lansia" />
                  <Bar dataKey="yatim" fill="#8b5cf6" name="Bantuan Yatim" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Aid Programs Details */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Detail Program Bantuan Individual</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Gift className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">Bantuan Pendidikan</h4>
                  <p className="text-sm text-blue-600">Beasiswa & KIP</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>SD/MI:</span>
                  <span className="font-medium">89 siswa</span>
                </div>
                <div className="flex justify-between">
                  <span>SMP/MTs:</span>
                  <span className="font-medium">78 siswa</span>
                </div>
                <div className="flex justify-between">
                  <span>SMA/MA:</span>
                  <span className="font-medium">67 siswa</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Heart className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">Bantuan Kesehatan</h4>
                  <p className="text-sm text-green-600">BPJS & Obat Gratis</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>BPJS PBI:</span>
                  <span className="font-medium">156 orang</span>
                </div>
                <div className="flex justify-between">
                  <span>Obat Gratis:</span>
                  <span className="font-medium">89 orang</span>
                </div>
                <div className="flex justify-between">
                  <span>Kacamata:</span>
                  <span className="font-medium">23 orang</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800">Bantuan Khusus</h4>
                  <p className="text-sm text-purple-600">Disabilitas & Lansia</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Disabilitas:</span>
                  <span className="font-medium">89 orang</span>
                </div>
                <div className="flex justify-between">
                  <span>Lansia:</span>
                  <span className="font-medium">145 orang</span>
                </div>
                <div className="flex justify-between">
                  <span>Yatim Piatu:</span>
                  <span className="font-medium">67 anak</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Aid by RW Table */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Bantuan per RW</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">RW</th>
                  <th className="text-center py-3 px-4">Pendidikan</th>
                  <th className="text-center py-3 px-4">Kesehatan</th>
                  <th className="text-center py-3 px-4">Disabilitas</th>
                  <th className="text-center py-3 px-4">Lansia</th>
                  <th className="text-center py-3 px-4">Yatim</th>
                  <th className="text-center py-3 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {aidByRW.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{row.rw}</td>
                    <td className="text-center py-3 px-4">{row.pendidikan}</td>
                    <td className="text-center py-3 px-4">{row.kesehatan}</td>
                    <td className="text-center py-3 px-4">{row.disabilitas}</td>
                    <td className="text-center py-3 px-4">{row.lansia}</td>
                    <td className="text-center py-3 px-4">{row.yatim}</td>
                    <td className="text-center py-3 px-4 font-bold bg-blue-50">{row.total}</td>
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

export default IndividualAid;
