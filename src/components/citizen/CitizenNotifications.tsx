import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, CheckCircle, AlertTriangle, Info, Trash2, Mail } from 'lucide-react';
const CitizenNotifications = () => {
  const [notifications, setNotifications] = useState([{
    id: 1,
    type: 'service',
    title: 'Pengajuan Surat Keterangan Domisili Disetujui',
    message: 'Pengajuan surat keterangan domisili Anda dengan nomor #SK001 telah disetujui dan dapat diunduh.',
    date: '2024-01-25 10:30',
    isRead: false,
    priority: 'high'
  }, {
    id: 2,
    type: 'complaint',
    title: 'Tanggapan Pengaduan Jalan Berlubang',
    message: 'Pengaduan Anda tentang jalan berlubang di RT 03 telah ditindaklanjuti. Perbaikan akan dilaksanakan minggu depan.',
    date: '2024-01-24 14:15',
    isRead: false,
    priority: 'medium'
  }, {
    id: 3,
    type: 'announcement',
    title: 'Musyawarah Desa Perencanaan APBD 2024',
    message: 'Mengundang seluruh warga untuk menghadiri musyawarah desa pada tanggal 5 Februari 2024 di Balai Desa.',
    date: '2024-01-23 09:00',
    isRead: true,
    priority: 'medium'
  }, {
    id: 4,
    type: 'service',
    title: 'Pengajuan Surat Pengantar SKCK Sedang Diproses',
    message: 'Pengajuan surat pengantar SKCK Anda sedang dalam tahap verifikasi. Estimasi selesai 2 hari kerja.',
    date: '2024-01-22 16:45',
    isRead: true,
    priority: 'low'
  }, {
    id: 5,
    type: 'poll',
    title: 'Polling Baru: Prioritas Pembangunan Desa 2024',
    message: 'Kami mengundang Anda untuk berpartisipasi dalam polling prioritas pembangunan desa.',
    date: '2024-01-21 11:20',
    isRead: true,
    priority: 'medium'
  }]);
  const getNotificationIcon = (type, priority) => {
    const iconClass = priority === 'high' ? 'text-red-500' : priority === 'medium' ? 'text-yellow-500' : 'text-blue-500';
    switch (type) {
      case 'service':
        return <CheckCircle className={iconClass} size={20} />;
      case 'complaint':
        return <AlertTriangle className={iconClass} size={20} />;
      case 'announcement':
      case 'poll':
        return <Info className={iconClass} size={20} />;
      default:
        return <Bell className={iconClass} size={20} />;
    }
  };
  const getNotificationBadge = type => {
    const badges = {
      service: {
        text: 'Layanan',
        color: 'bg-emerald-500'
      },
      complaint: {
        text: 'Pengaduan',
        color: 'bg-orange-500'
      },
      announcement: {
        text: 'Pengumuman',
        color: 'bg-blue-500'
      },
      poll: {
        text: 'Polling',
        color: 'bg-purple-500'
      }
    };
    return badges[type] || {
      text: 'Notifikasi',
      color: 'bg-gray-500'
    };
  };
  const markAsRead = id => {
    setNotifications(prev => prev.map(notif => notif.id === id ? {
      ...notif,
      isRead: true
    } : notif));
  };
  const markAsUnread = id => {
    setNotifications(prev => prev.map(notif => notif.id === id ? {
      ...notif,
      isRead: false
    } : notif));
  };
  const deleteNotification = id => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({
      ...notif,
      isRead: true
    })));
  };
  const unreadCount = notifications.filter(n => !n.isRead).length;
  const allNotifications = notifications;
  const unreadNotifications = notifications.filter(n => !n.isRead);
  const readNotifications = notifications.filter(n => n.isRead);
  const NotificationCard = ({
    notification
  }) => {
    const badge = getNotificationBadge(notification.type);
    return <Card className={`p-4 ${!notification.isRead ? 'border-l-4 border-l-emerald-500 bg-emerald-50/30' : 'border-l-4 border-l-gray-200'}`}>
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 mt-1">
            {getNotificationIcon(notification.type, notification.priority)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <Badge className={`${badge.color} text-white text-xs`}>
                {badge.text}
              </Badge>
              {!notification.isRead && <Badge variant="outline" className="text-xs border-emerald-500 text-emerald-600">
                  Baru
                </Badge>}
            </div>
            <h4 className={`font-semibold mb-1 ${!notification.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
              {notification.title}
            </h4>
            <p className="text-sm text-gray-600 mb-2">
              {notification.message}
            </p>
            <p className="text-xs text-gray-500">
              {notification.date}
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-1">
              {!notification.isRead ? <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)} className="text-emerald-600 hover:bg-emerald-50">
                  <CheckCircle size={16} />
                </Button> : <Button variant="ghost" size="sm" onClick={() => markAsUnread(notification.id)} className="text-gray-600 hover:bg-gray-50">
                  <Mail size={16} />
                </Button>}
              <Button variant="ghost" size="sm" onClick={() => deleteNotification(notification.id)} className="text-red-600 hover:bg-red-50">
                <Trash2 size={16} />
              </Button>
            </div>
          </div>
        </div>
      </Card>;
  };
  return <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <Bell className="text-emerald-600 mr-3" size={24} />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Notifikasi</h3>
              <p className="text-sm text-gray-600">
                {unreadCount} notifikasi belum dibaca dari {allNotifications.length} total
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0}>
              Tandai Semua Dibaca
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="all" className="relative text-xs font-normal text-center">
              Semua
              {unreadCount > 0 && <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {unreadCount}
                </Badge>}
            </TabsTrigger>
            <TabsTrigger value="unread" className="text-xs font-thin">
              Belum Dibaca ({unreadCount})
            </TabsTrigger>
            <TabsTrigger value="read" className="text-xs font-thin text-center">
              Sudah Dibaca ({readNotifications.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {allNotifications.length > 0 ? allNotifications.map(notification => <NotificationCard key={notification.id} notification={notification} />) : <div className="text-center py-8">
                <Bell className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500">Tidak ada notifikasi</p>
              </div>}
          </TabsContent>

          <TabsContent value="unread" className="space-y-4">
            {unreadNotifications.length > 0 ? unreadNotifications.map(notification => <NotificationCard key={notification.id} notification={notification} />) : <div className="text-center py-8">
                <CheckCircle className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500">Semua notifikasi sudah dibaca</p>
              </div>}
          </TabsContent>

          <TabsContent value="read" className="space-y-4">
            {readNotifications.length > 0 ? readNotifications.map(notification => <NotificationCard key={notification.id} notification={notification} />) : <div className="text-center py-8">
                <Bell className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500">Belum ada notifikasi yang dibaca</p>
              </div>}
          </TabsContent>
        </Tabs>
      </Card>
    </div>;
};
export default CitizenNotifications;