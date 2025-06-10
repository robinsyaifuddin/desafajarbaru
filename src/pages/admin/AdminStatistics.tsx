
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Download,
  RefreshCw,
  Calendar,
  PieChart,
  Activity
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

const AdminStatistics = () => {
  const populationData = [
    { name: 'RW 1', population: 456 },
    { name: 'RW 2', population: 523 },
    { name: 'RW 3', population: 389 },
    { name: 'RW 4', population: 612 },
    { name: 'RW 5', population: 445 },
    { name: 'RW 6', population: 422 }
  ];

  const ageGroupData = [
    { name: '0-17', value: 678, color: '#8884d8' },
    { name: '18-35', value: 892, color: '#82ca9d' },
    { name: '36-50', value: 745, color: '#ffc658' },
    { name: '51-65', value: 432, color: '#ff7c7c' },
    { name: '>65', value: 100, color: '#8dd1e1' }
  ];

  const educationData = [
    { name: 'Tidak Sekolah', value: 45 },
    { name: 'SD', value: 567 },
    { name: 'SMP', value: 678 },
    { name: 'SMA', value: 892 },
    { name: 'Diploma', value: 234 },
    { name: 'S1', value: 345 },
    { name: 'S2', value: 67 },
    { name: 'S3', value: 19 }
  ];

  const monthlyGrowthData = [
    { month: 'Jan', growth: 12 },
    { month: 'Feb', growth: 8 },
    { month: 'Mar', growth: 15 },
    { month: 'Apr', growth: 23 },
    { month: 'May', growth: 18 },
    { month: 'Jun', growth: 25 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Statistik</h2>
          <p className="text-gray-600">Analisis data dan statistik penduduk desa</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw size={20} className="mr-2" />
            Refresh Data
          </Button>
          <Button variant="outline">
            <Download size={20} className="mr-2" />
            Export Laporan
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Penduduk</p>
              <p className="text-3xl font-bold text-gray-800">2,847</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp size={16} className="mr-1" />
                +2.3% dari bulan lalu
              </p>
            </div>
            <Users className="h-12 w-12 text-blue-600" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Kepala Keluarga</p>
              <p className="text-3xl font-bold text-gray-800">789</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp size={16} className="mr-1" />
                +1.8% dari bulan lalu
              </p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xl">👥</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Rasio Jenis Kelamin</p>
              <p className="text-3xl font-bold text-gray-800">104.7</p>
              <p className="text-sm text-gray-600">per 100 perempuan</p>
            </div>
            <PieChart className="h-12 w-12 text-purple-600" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pertumbuhan</p>
              <p className="text-3xl font-bold text-gray-800">+25</p>
              <p className="text-sm text-green-600">jiwa bulan ini</p>
            </div>
            <Activity className="h-12 w-12 text-orange-600" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Population by RW */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Populasi per RW</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={populationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="population" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Age Distribution */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Usia</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPieChart>
              <Pie
                data={ageGroupData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
              >
                {ageGroupData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </RechartsPieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {ageGroupData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-600">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Education Level */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Tingkat Pendidikan</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={educationData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip />
              <Bar dataKey="value" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Monthly Growth */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Pertumbuhan Bulanan</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="growth" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ fill: '#8b5cf6' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Detailed Statistics Table */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Statistik Detail</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Berdasarkan Jenis Kelamin</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Laki-laki</span>
                <span className="font-medium">1,456 (51.2%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Perempuan</span>
                <span className="font-medium">1,391 (48.8%)</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-700 mb-3">Berdasarkan Agama</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Islam</span>
                <span className="font-medium">2,345 (82.4%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Kristen</span>
                <span className="font-medium">389 (13.7%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Katolik</span>
                <span className="font-medium">78 (2.7%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Hindu</span>
                <span className="font-medium">23 (0.8%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Buddha</span>
                <span className="font-medium">12 (0.4%)</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-700 mb-3">Berdasarkan Pekerjaan</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Petani</span>
                <span className="font-medium">892 (31.3%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Wiraswasta</span>
                <span className="font-medium">567 (19.9%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">PNS</span>
                <span className="font-medium">234 (8.2%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pegawai Swasta</span>
                <span className="font-medium">445 (15.6%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Lainnya</span>
                <span className="font-medium">709 (24.9%)</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminStatistics;
