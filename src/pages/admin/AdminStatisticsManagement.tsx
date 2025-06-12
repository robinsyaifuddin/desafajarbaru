
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  Users, 
  Download,
  Upload,
  Edit,
  Trash2,
  Plus,
  Eye,
  TrendingUp,
  Calendar,
  Search
} from 'lucide-react';

const AdminStatisticsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('population');

  // Sample data - in real app this would come from API
  const statisticsData = {
    population: [
      { id: 1, rw: 'RW 1', male: 215, female: 205, total: 420, lastUpdated: '2024-01-15' },
      { id: 2, rw: 'RW 2', male: 234, female: 222, total: 456, lastUpdated: '2024-01-15' },
      { id: 3, rw: 'RW 3', male: 198, female: 191, total: 389, lastUpdated: '2024-01-15' },
      { id: 4, rw: 'RW 4', male: 267, female: 256, total: 523, lastUpdated: '2024-01-15' },
    ],
    education: [
      { id: 1, level: 'Tidak Sekolah', count: 45, percentage: 1.6 },
      { id: 2, level: 'SD/Sederajat', count: 567, percentage: 19.9 },
      { id: 3, level: 'SMP/Sederajat', count: 678, percentage: 23.8 },
      { id: 4, level: 'SMA/Sederajat', count: 892, percentage: 31.3 },
      { id: 5, level: 'Diploma', count: 234, percentage: 8.2 },
      { id: 6, level: 'Sarjana', count: 345, percentage: 12.1 },
    ],
    aid: [
      { id: 1, program: 'PKH', recipients: 145, budget: 870000000, status: 'Aktif' },
      { id: 2, program: 'BPNT', recipients: 189, budget: 680400000, status: 'Aktif' },
      { id: 3, program: 'BLT', recipients: 234, budget: 1404000000, status: 'Aktif' },
      { id: 4, program: 'BSP', recipients: 23, budget: 230000000, status: 'Nonaktif' },
    ]
  };

  const summaryStats = [
    { title: 'Total Penduduk', value: '2,847', change: '+23', icon: Users, color: 'from-blue-500 to-blue-600' },
    { title: 'Data Terupdate', value: '98%', change: '+5%', icon: TrendingUp, color: 'from-green-500 to-green-600' },
    { title: 'Laporan Bulan Ini', value: '12', change: '+3', icon: BarChart3, color: 'from-purple-500 to-purple-600' },
    { title: 'Update Terakhir', value: 'Hari ini', change: 'Baru', icon: Calendar, color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Kelola Statistik</h2>
          <p className="text-gray-600">Pengelolaan data statistik penduduk dan program bantuan</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download size={20} className="mr-2" />
            Export Data
          </Button>
          <Button>
            <Plus size={20} className="mr-2" />
            Tambah Data
          </Button>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryStats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp size={16} className="mr-1" />
                  {stat.change}
                </p>
              </div>
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Search and Filter */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Cari data statistik..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Upload size={16} className="mr-2" />
              Import Excel
            </Button>
            <Button variant="outline" size="sm">
              <Calendar size={16} className="mr-2" />
              Filter Tanggal
            </Button>
          </div>
        </div>
      </Card>

      {/* Data Management Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="population">Data Penduduk</TabsTrigger>
          <TabsTrigger value="education">Data Pendidikan</TabsTrigger>
          <TabsTrigger value="aid">Data Bantuan</TabsTrigger>
        </TabsList>

        <TabsContent value="population" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Data Penduduk per RW</h3>
              <Button size="sm">
                <Edit size={16} className="mr-2" />
                Edit Data
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>RW</TableHead>
                  <TableHead className="text-center">Laki-laki</TableHead>
                  <TableHead className="text-center">Perempuan</TableHead>
                  <TableHead className="text-center">Total</TableHead>
                  <TableHead className="text-center">Terakhir Update</TableHead>
                  <TableHead className="text-center">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {statisticsData.population.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.rw}</TableCell>
                    <TableCell className="text-center text-blue-600">{row.male}</TableCell>
                    <TableCell className="text-center text-pink-600">{row.female}</TableCell>
                    <TableCell className="text-center font-bold">{row.total}</TableCell>
                    <TableCell className="text-center text-gray-600">{row.lastUpdated}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Data Tingkat Pendidikan</h3>
              <Button size="sm">
                <Edit size={16} className="mr-2" />
                Edit Data
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tingkat Pendidikan</TableHead>
                  <TableHead className="text-center">Jumlah</TableHead>
                  <TableHead className="text-center">Persentase</TableHead>
                  <TableHead className="text-center">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {statisticsData.education.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.level}</TableCell>
                    <TableCell className="text-center">{row.count}</TableCell>
                    <TableCell className="text-center">{row.percentage}%</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="aid" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Data Program Bantuan</h3>
              <Button size="sm">
                <Plus size={16} className="mr-2" />
                Tambah Program
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Program</TableHead>
                  <TableHead className="text-center">Penerima</TableHead>
                  <TableHead className="text-center">Anggaran</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {statisticsData.aid.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.program}</TableCell>
                    <TableCell className="text-center">{row.recipients}</TableCell>
                    <TableCell className="text-center">Rp {(row.budget / 1000000).toFixed(0)}M</TableCell>
                    <TableCell className="text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="text-blue-600" size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Generate Laporan</h4>
              <p className="text-sm text-gray-600">Buat laporan statistik otomatis</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Upload className="text-green-600" size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Import Data</h4>
              <p className="text-sm text-gray-600">Upload data dari file Excel</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-purple-600" size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Analisis Trend</h4>
              <p className="text-sm text-gray-600">Lihat tren perkembangan data</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminStatisticsManagement;
