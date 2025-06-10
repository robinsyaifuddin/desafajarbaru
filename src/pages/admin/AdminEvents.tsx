
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye,
  MapPin,
  Users,
  Clock,
  Filter
} from 'lucide-react';

const AdminEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Gotong Royong Pembersihan Lingkungan',
      description: 'Kegiatan gotong royong membersihkan lingkungan desa dan saluran air',
      date: '2024-06-15',
      time: '07:00',
      location: 'Balai Desa Fajar Baru',
      category: 'Lingkungan',
      status: 'Upcoming',
      participants: 45,
      maxParticipants: 100,
      organizer: 'Karang Taruna'
    },
    {
      id: 2,
      title: 'Pelatihan Digital Marketing UMKM',
      description: 'Workshop digital marketing untuk pelaku UMKM desa',
      date: '2024-06-20',
      time: '09:00',
      location: 'Ruang Serbaguna Desa',
      category: 'Pelatihan',
      status: 'Open',
      participants: 23,
      maxParticipants: 50,
      organizer: 'BUMDes'
    },
    {
      id: 3,
      title: 'Festival Budaya Desa Fajar Baru',
      description: 'Festival tahunan menampilkan budaya dan tradisi lokal',
      date: '2024-07-05',
      time: '16:00',
      location: 'Lapangan Desa',
      category: 'Budaya',
      status: 'Planning',
      participants: 12,
      maxParticipants: 200,
      organizer: 'Pemerintah Desa'
    },
    {
      id: 4,
      title: 'Vaksinasi Massal COVID-19',
      description: 'Program vaksinasi massal untuk masyarakat desa',
      date: '2024-06-12',
      time: '08:00',
      location: 'Puskesmas Fajar Baru',
      category: 'Kesehatan',
      status: 'Completed',
      participants: 156,
      maxParticipants: 150,
      organizer: 'Puskesmas'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      'Upcoming': 'bg-blue-100 text-blue-800',
      'Open': 'bg-green-100 text-green-800',
      'Planning': 'bg-yellow-100 text-yellow-800',
      'Completed': 'bg-gray-100 text-gray-800',
      'Cancelled': 'bg-red-100 text-red-800'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Lingkungan': 'bg-green-500',
      'Pelatihan': 'bg-blue-500',
      'Budaya': 'bg-purple-500',
      'Kesehatan': 'bg-red-500',
      'Olahraga': 'bg-orange-500',
      'Sosial': 'bg-pink-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Event</h2>
          <p className="text-gray-600">Kelola kegiatan dan acara desa</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
          <Plus size={20} className="mr-2" />
          Buat Event Baru
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Event</p>
              <p className="text-2xl font-bold text-gray-800">24</p>
            </div>
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Event Aktif</p>
              <p className="text-2xl font-bold text-gray-800">8</p>
            </div>
            <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">🎯</span>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Peserta</p>
              <p className="text-2xl font-bold text-gray-800">1,234</p>
            </div>
            <Users className="h-8 w-8 text-purple-600" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Event Bulan Ini</p>
              <p className="text-2xl font-bold text-gray-800">6</p>
            </div>
            <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-orange-600 font-bold">📅</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Cari event..."
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-4 h-4 rounded-full ${getCategoryColor(event.category)}`}
                  />
                  <h4 className="font-bold text-gray-800">{event.title}</h4>
                </div>
                <Badge className={getStatusBadge(event.status)}>
                  {event.status}
                </Badge>
              </div>

              <p className="text-gray-600 text-sm mb-4">{event.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                  <Clock size={16} className="ml-2" />
                  <span>{event.time} WIB</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users size={16} />
                  <span>{event.participants}/{event.maxParticipants} peserta</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-gray-500">Penyelenggara:</span>
                  <span className="font-medium text-gray-700 ml-1">{event.organizer}</span>
                </div>
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
              </div>

              {/* Progress bar for participants */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Pendaftaran</span>
                  <span>{Math.round((event.participants / event.maxParticipants) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Calendar View Option */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Kalender Event</h3>
          <Button variant="outline">
            <Calendar size={16} className="mr-2" />
            Tampilan Kalender
          </Button>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <Calendar className="mx-auto mb-4 h-16 w-16 text-gray-400" />
          <p className="text-gray-600">Tampilan kalender akan ditampilkan di sini</p>
          <p className="text-sm text-gray-500 mt-1">Lihat semua event dalam format kalender</p>
        </div>
      </Card>
    </div>
  );
};

export default AdminEvents;
