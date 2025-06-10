
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Users, 
  UserPlus,
  Download,
  Upload,
  Filter
} from 'lucide-react';

const AdminResidents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const residents = [
    {
      id: 1,
      nik: '3201234567890001',
      name: 'Ahmad Wijaya',
      birthDate: '1985-03-15',
      gender: 'Laki-laki',
      address: 'Jl. Mawar No. 12 RT 01/RW 03',
      status: 'Tetap',
      occupation: 'Petani',
      education: 'SMA',
      maritalStatus: 'Menikah',
      religion: 'Islam'
    },
    {
      id: 2,
      nik: '3201234567890002',
      name: 'Siti Nurhaliza',
      birthDate: '1990-07-22',
      gender: 'Perempuan',
      address: 'Jl. Melati No. 8 RT 02/RW 01',
      status: 'Tetap',
      occupation: 'Ibu Rumah Tangga',
      education: 'SMP',
      maritalStatus: 'Menikah',
      religion: 'Islam'
    },
    {
      id: 3,
      nik: '3201234567890003',
      name: 'Budi Santoso',
      birthDate: '1978-12-10',
      gender: 'Laki-laki',
      address: 'Jl. Kenanga No. 5 RT 03/RW 02',
      status: 'Pindah',
      occupation: 'Wiraswasta',
      education: 'S1',
      maritalStatus: 'Menikah',
      religion: 'Kristen'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      'Tetap': 'bg-green-100 text-green-800',
      'Pindah': 'bg-red-100 text-red-800',
      'Pendatang': 'bg-blue-100 text-blue-800'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Kelola Penduduk</h2>
          <p className="text-gray-600">Manajemen data penduduk Desa Fajar Baru</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload size={20} className="mr-2" />
            Import Data
          </Button>
          <Button variant="outline">
            <Download size={20} className="mr-2" />
            Export Data
          </Button>
          <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
            <UserPlus size={20} className="mr-2" />
            Tambah Penduduk
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Penduduk</p>
              <p className="text-2xl font-bold text-gray-800">2,847</p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Laki-laki</p>
              <p className="text-2xl font-bold text-gray-800">1,456</p>
            </div>
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">♂</span>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Perempuan</p>
              <p className="text-2xl font-bold text-gray-800">1,391</p>
            </div>
            <div className="h-8 w-8 bg-pink-100 rounded-full flex items-center justify-center">
              <span className="text-pink-600 font-bold">♀</span>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Kepala Keluarga</p>
              <p className="text-2xl font-bold text-gray-800">789</p>
            </div>
            <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">👥</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Cari berdasarkan NIK, nama, atau alamat..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">NIK</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Nama</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Tanggal Lahir</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Jenis Kelamin</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Alamat</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {residents.map((resident) => (
                <tr key={resident.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-mono text-sm">{resident.nik}</td>
                  <td className="py-4 px-4 font-medium">{resident.name}</td>
                  <td className="py-4 px-4 text-gray-600">{resident.birthDate}</td>
                  <td className="py-4 px-4 text-gray-600">{resident.gender}</td>
                  <td className="py-4 px-4 text-gray-600 max-w-xs truncate">{resident.address}</td>
                  <td className="py-4 px-4">
                    <Badge className={getStatusBadge(resident.status)}>
                      {resident.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminResidents;
