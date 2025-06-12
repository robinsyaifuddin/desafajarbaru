
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { TrendingUp, Users, DollarSign, Home } from 'lucide-react';

const SocialClass = () => {
  const socialClassData = [
    { class: 'Keluarga Sejahtera III Plus', count: 123, percentage: 14.5, color: '#10b981' },
    { class: 'Keluarga Sejahtera III', count: 234, percentage: 27.6, color: '#3b82f6' },
    { class: 'Keluarga Sejahtera II', count: 345, percentage: 40.8, color: '#f59e0b' },
    { class: 'Keluarga Sejahtera I', count: 112, percentage: 13.2, color: '#ef4444' },
    { class: 'Keluarga Pra Sejahtera', count: 33, percentage: 3.9, color: '#8b5cf6' }
  ];

  const incomeDistribution = [
    { range: '> Rp 5.000.000', families: 123, percentage: 14.5 },
    { range: 'Rp 3.000.000 - 5.000.000', families: 234, percentage: 27.6 },
    { range: 'Rp 1.500.000 - 3.000.000', families: 345, percentage: 40.8 },
    { range: 'Rp 500.000 - 1.500.000', families: 112, percentage: 13.2 },
    { range: '< Rp 500.000', families: 33, percentage: 3.9 }
  ];

  const socialClassByRW = [
    { rw: 'RW 1', ks3plus: 18, ks3: 34, ks2: 56, ks1: 23, praSejahtera: 5 },
    { rw: 'RW 2', ks3plus: 25, ks3: 45, ks2: 67, ks1: 18, praSejahtera: 7 },
    { rw: 'RW 3', ks3plus: 12, ks3: 28, ks2: 45, ks1: 15, praSejahtera: 4 },
    { rw: 'RW 4', ks3plus: 34, ks3: 67, ks2: 89, ks1: 28, praSejahtera: 8 },
    { rw: 'RW 5', ks3plus: 20, ks3: 38, ks2: 56, ks1: 16, praSejahtera: 5 },
    { rw: 'RW 6', ks3plus: 14, ks3: 22, ks2: 32, ks1: 12, praSejahtera: 4 }
  ];

  const assistancePrograms = [
    { program: 'Program Keluarga Harapan (PKH)', recipients: 145, budget: 'Rp 450.000.000' },
    { program: 'Bantuan Pangan Non Tunai (BPNT)', recipients: 189, budget: 'Rp 340.000.000' },
    { program: 'Bantuan Langsung Tunai (BLT)', recipients: 234, budget: 'Rp 560.000.000' },
    { program: 'Kartu Indonesia Pintar (KIP)', recipients: 156, budget: 'Rp 280.000.000' }
  ];

  const summary = [
    { label: 'Total Keluarga', value: '847', icon: Users, color: 'bg-blue-500' },
    { label: 'Keluarga Sejahtera', value: '702 (82.9%)', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Keluarga Pra Sejahtera', value: '145 (17.1%)', icon: Home, color: 'bg-orange-500' }
  ];

  return (
    <StatisticsLayout 
      title="Statistik Kelas Sosial"
      description="Data tingkat kesejahteraan keluarga di Desa Fajar Baru Way Kandis berdasarkan indikator ekonomi dan sosial"
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
          {/* Social Class Distribution */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Kelas Sosial</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={socialClassData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="count"
                    label={({ class: className, percentage }) => `${percentage}%`}
                  >
                    {socialClassData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} keluarga`, 'Jumlah']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {socialClassData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="flex-1">{item.class}</span>
                  <span className="font-medium">{item.count} keluarga</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Income Distribution */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Pendapatan Keluarga</h3>
            <div className="space-y-4">
              {incomeDistribution.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">{item.range}</span>
                    <span className="text-lg font-bold">{item.families} KK</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.percentage}% dari total keluarga</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Social Class by RW */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Kelas Sosial per RW</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={socialClassByRW}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="rw" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="ks3plus" stackId="a" fill="#10b981" name="KS III Plus" />
                  <Bar dataKey="ks3" stackId="a" fill="#3b82f6" name="KS III" />
                  <Bar dataKey="ks2" stackId="a" fill="#f59e0b" name="KS II" />
                  <Bar dataKey="ks1" stackId="a" fill="#ef4444" name="KS I" />
                  <Bar dataKey="praSejahtera" stackId="a" fill="#8b5cf6" name="Pra Sejahtera" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Assistance Programs */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Program Bantuan Sosial</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {assistancePrograms.map((program, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border">
                <h4 className="font-semibold text-gray-800 mb-2">{program.program}</h4>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-blue-600 font-medium">{program.recipients} penerima</p>
                    <p className="text-green-600 text-sm">{program.budget}</p>
                  </div>
                  <DollarSign className="text-gray-400" size={24} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Detailed Statistics */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Kriteria Keluarga Sejahtera</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Keluarga Sejahtera III Plus</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dapat menabung dalam bentuk uang/barang</li>
                <li>• Memperoleh informasi dari surat kabar/majalah</li>
                <li>• Menggunakan sarana transportasi</li>
                <li>• Dapat pergi berekreasi bersama keluarga</li>
                <li>• Dapat memperoleh pengetahuan agama</li>
                <li>• Dapat ikut serta dalam kegiatan kemasyarakatan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Keluarga Pra Sejahtera</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Belum dapat memenuhi salah satu indikator KS I</li>
                <li>• Kesulitan memenuhi kebutuhan dasar</li>
                <li>• Memerlukan bantuan pangan</li>
                <li>• Memerlukan bantuan biaya kesehatan</li>
                <li>• Memerlukan bantuan pendidikan anak</li>
                <li>• Prioritas program pemberdayaan</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </StatisticsLayout>
  );
};

export default SocialClass;
