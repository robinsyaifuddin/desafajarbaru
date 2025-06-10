
import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, FileText, Image, Eye, TrendingUp, Calendar } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Penduduk',
      value: '2,847',
      change: '+23',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Berita Aktif',
      value: '42',
      change: '+5',
      icon: FileText,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Galeri Foto',
      value: '156',
      change: '+12',
      icon: Image,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Pengunjung',
      value: '1,234',
      change: '+89',
      icon: Eye,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const recentActivities = [
    { action: 'Berita baru ditambahkan', time: '2 jam yang lalu', user: 'Admin' },
    { action: 'Data penduduk diperbarui', time: '4 jam yang lalu', user: 'Admin' },
    { action: 'Foto galeri ditambahkan', time: '6 jam yang lalu', user: 'Admin' },
    { action: 'Pengaturan website diubah', time: '1 hari yang lalu', user: 'Admin' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h2>
        <p className="text-gray-600">Selamat datang di panel administrasi Desa Fajar Baru</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp size={16} className="mr-1" />
                  {stat.change} bulan ini
                </p>
              </div>
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Aktivitas Terbaru</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{activity.action}</p>
                  <p className="text-sm text-gray-600">oleh {activity.user}</p>
                </div>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Aksi Cepat</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-colors">
              <FileText className="mx-auto mb-2 text-blue-600" size={24} />
              <p className="font-medium text-blue-800">Tambah Berita</p>
            </button>
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-center transition-colors">
              <Users className="mx-auto mb-2 text-green-600" size={24} />
              <p className="font-medium text-green-800">Kelola Penduduk</p>
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-center transition-colors">
              <Image className="mx-auto mb-2 text-purple-600" size={24} />
              <p className="font-medium text-purple-800">Upload Galeri</p>
            </button>
            <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg text-center transition-colors">
              <Calendar className="mx-auto mb-2 text-orange-600" size={24} />
              <p className="font-medium text-orange-800">Buat Event</p>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
