
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from 'recharts';
import { Home, DollarSign, Users, TrendingUp } from 'lucide-react';

const FamilyAid = () => {
  const familyAidData = [
    { type: 'Program Keluarga Harapan (PKH)', families: 145, budget: 870000000, color: '#3b82f6' },
    { type: 'Bantuan Pangan Non Tunai (BPNT)', families: 189, budget: 680400000, color: '#10b981' },
    { type: 'Bantuan Langsung Tunai (BLT)', families: 234, budget: 1404000000, color: '#f59e0b' },
    { type: 'Bantuan Stimulan Perumahan (BSP)', families: 23, budget: 230000000, color: '#ef4444' },
    { type: 'Kartu Keluarga Sejahtera (KKS)', families: 167, budget: 501000000, color: '#8b5cf6' }
  ];

  const aidByCategory = [
    { category: 'Keluarga Pra Sejahtera', pkh: 89, bpnt: 145, blt: 178, bsp: 15, kks: 134 },
    { category: 'Keluarga Sejahtera I', pkh: 56, bpnt: 44, blt: 56, bsp: 8, kks: 33 },
    { category: 'Keluarga Sejahtera II', pkh: 0, bpnt: 0, blt: 0, bsp: 0, kks: 0 }
  ];

  const monthlyTrend = [
    { month: 'Jan', pkh: 145, bpnt: 189, blt: 234, total: 568 },
    { month: 'Feb', pkh: 145, bpnt: 189, blt: 234, total: 568 },
    { month: 'Mar', pkh: 147, bpnt: 192, blt: 238, total: 577 },
    { month: 'Apr', pkh: 145, bpnt: 189, blt: 234, total: 568 },
    { month: 'Mei', pkh: 145, bpnt: 189, blt: 234, total: 568 },
    { month: 'Jun', pkh: 145, bpnt: 189, blt: 234, total: 568 }
  ];

  const aidByRW = [
    { rw: 'RW 1', pkh: 18, bpnt: 25, blt: 34, bsp: 3, kks: 21, total: 101 },
    { rw: 'RW 2', pkh: 25, bpnt: 34, blt: 45, bsp: 4, kks: 28, total: 136 },
    { rw: 'RW 3', pkh: 15, bpnt: 22, blt: 28, bsp: 2, kks: 18, total: 85 },
    { rw: 'RW 4', pkh: 34, bpnt: 45, blt: 67, bsp: 8, kks: 45, total: 199 },
    { rw: 'RW 5', pkh: 28, bpnt: 38, blt: 34, bsp: 4, kks: 32, total: 136 },
    { rw: 'RW 6', pkh: 25, bpnt: 25, blt: 26, bsp: 2, kks: 23, total: 101 }
  ];

  const budgetAllocation = [
    { program: 'BLT', amount: 1404000000, percentage: 38.7 },
    { program: 'PKH', amount: 870000000, percentage: 24.0 },
    { program: 'BPNT', amount: 680400000, percentage: 18.8 },
    { program: 'KKS', amount: 501000000, percentage: 13.8 },
    { program: 'BSP', amount: 230000000, percentage: 6.3 }
  ];

  const summary = [
    { label: 'Total Keluarga Penerima', value: '758', icon: Home, color: 'bg-blue-500' },
    { label: 'Total Anggaran Bantuan', value: 'Rp 3.6M', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Program Bantuan Aktif', value: '5 Program', icon: Users, color: 'bg-purple-500' }
  ];

  return (
    <StatisticsLayout 
      title="Statistik Bantuan Keluarga"
      description="Data program bantuan sosial yang diberikan kepada keluarga di Desa Fajar Baru Way Kandis"
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
          {/* Family Aid Distribution */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Bantuan Keluarga</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={familyAidData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="families"
                    label={({ families }) => `${families}`}
                  >
                    {familyAidData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} keluarga`, 'Penerima']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {familyAidData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-medium">{item.type}</span>
                  </div>
                  <span className="font-bold">{item.families} KK</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Budget Distribution */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Alokasi Anggaran per Program</h3>
            <div className="space-y-4">
              {budgetAllocation.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{item.program}</span>
                    <span className="text-lg font-bold">Rp {(item.amount / 1000000).toFixed(0)}M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.percentage}% dari total anggaran</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Aid by Social Category */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Bantuan Berdasarkan Tingkat Kesejahteraan</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={aidByCategory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pkh" fill="#3b82f6" name="PKH" />
                  <Bar dataKey="bpnt" fill="#10b981" name="BPNT" />
                  <Bar dataKey="blt" fill="#f59e0b" name="BLT" />
                  <Bar dataKey="bsp" fill="#ef4444" name="BSP" />
                  <Bar dataKey="kks" fill="#8b5cf6" name="KKS" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Monthly Trend */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tren Penerima Bantuan Bulanan</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="total" stroke="#3b82f6" strokeWidth={3} name="Total Penerima" />
                  <Line type="monotone" dataKey="pkh" stroke="#10b981" strokeWidth={2} name="PKH" />
                  <Line type="monotone" dataKey="bpnt" stroke="#f59e0b" strokeWidth={2} name="BPNT" />
                  <Line type="monotone" dataKey="blt" stroke="#ef4444" strokeWidth={2} name="BLT" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Program Details */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Detail Program Bantuan Keluarga</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">Program Keluarga Harapan</h4>
                  <p className="text-sm text-blue-600">145 keluarga</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Bantuan per KK:</span>
                  <span className="font-medium">Rp 500K/bulan</span>
                </div>
                <div className="flex justify-between">
                  <span>Total anggaran:</span>
                  <span className="font-medium">Rp 870M/tahun</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Home className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">Bantuan Pangan Non Tunai</h4>
                  <p className="text-sm text-green-600">189 keluarga</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Bantuan per KK:</span>
                  <span className="font-medium">Rp 300K/bulan</span>
                </div>
                <div className="flex justify-between">
                  <span>Total anggaran:</span>
                  <span className="font-medium">Rp 680M/tahun</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800">Bantuan Langsung Tunai</h4>
                  <p className="text-sm text-orange-600">234 keluarga</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Bantuan per KK:</span>
                  <span className="font-medium">Rp 500K/bulan</span>
                </div>
                <div className="flex justify-between">
                  <span>Total anggaran:</span>
                  <span className="font-medium">Rp 1.4M/tahun</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Aid by RW Table */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Bantuan Keluarga per RW</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">RW</th>
                  <th className="text-center py-3 px-4">PKH</th>
                  <th className="text-center py-3 px-4">BPNT</th>
                  <th className="text-center py-3 px-4">BLT</th>
                  <th className="text-center py-3 px-4">BSP</th>
                  <th className="text-center py-3 px-4">KKS</th>
                  <th className="text-center py-3 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {aidByRW.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{row.rw}</td>
                    <td className="text-center py-3 px-4">{row.pkh}</td>
                    <td className="text-center py-3 px-4">{row.bpnt}</td>
                    <td className="text-center py-3 px-4">{row.blt}</td>
                    <td className="text-center py-3 px-4">{row.bsp}</td>
                    <td className="text-center py-3 px-4">{row.kks}</td>
                    <td className="text-center py-3 px-4 font-bold bg-green-50">{row.total}</td>
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

export default FamilyAid;
