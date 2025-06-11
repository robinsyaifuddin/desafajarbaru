import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Send, Upload, Camera, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const CitizenComplaints = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    type: '',
    category: '',
    title: '',
    description: '',
    location: ''
  });
  const complaintCategories = ['Infrastruktur', 'Kebersihan', 'Keamanan', 'Pelayanan Publik', 'Lingkungan', 'Pendidikan', 'Kesehatan', 'Ekonomi', 'Lainnya'];
  const complaints = [{
    id: 1,
    type: 'Pengaduan',
    title: 'Jalan Berlubang di RT 03',
    category: 'Infrastruktur',
    date: '2024-01-20',
    status: 'Ditindaklanjuti',
    statusColor: 'bg-blue-500',
    response: 'Pengaduan telah diterima dan sedang dikoordinasikan dengan dinas terkait.'
  }, {
    id: 2,
    type: 'Aspirasi',
    title: 'Pembangunan Taman Bermain Anak',
    category: 'Lingkungan',
    date: '2024-01-18',
    status: 'Diproses',
    statusColor: 'bg-yellow-500',
    response: 'Aspirasi sedang dikaji oleh tim perencanaan desa.'
  }, {
    id: 3,
    type: 'Pengaduan',
    title: 'Lampu Jalan Mati',
    category: 'Infrastruktur',
    date: '2024-01-15',
    status: 'Selesai',
    statusColor: 'bg-green-500',
    response: 'Lampu jalan telah diperbaiki. Terima kasih atas laporannya.'
  }];
  const handleSubmit = () => {
    if (!formData.type || !formData.category || !formData.title || !formData.description) {
      toast({
        title: "Form Belum Lengkap",
        description: "Mohon lengkapi semua field yang diperlukan.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Berhasil Dikirim",
      description: `${formData.type} Anda telah berhasil dikirim dan akan ditindaklanjuti.`
    });
    setFormData({
      type: '',
      category: '',
      title: '',
      description: '',
      location: ''
    });
  };
  const getStatusIcon = status => {
    switch (status) {
      case 'Selesai':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'Ditindaklanjuti':
        return <AlertTriangle size={16} className="text-blue-500" />;
      case 'Diproses':
        return <Clock size={16} className="text-yellow-500" />;
      default:
        return <Clock size={16} className="text-gray-500" />;
    }
  };
  return <div className="space-y-6">
      <Tabs defaultValue="submit" className="space-y-6">
        <TabsList className="grid grid-cols-2 w-full max-w-md">
          <TabsTrigger value="submit" className="text-sm">Pengaduan/Aspirasi</TabsTrigger>
          <TabsTrigger value="status" className="text-sm">Status & Riwayat</TabsTrigger>
        </TabsList>

        {/* Form Pengaduan/Aspirasi */}
        <TabsContent value="submit">
          <Card className="p-6">
            <div className="flex items-center mb-6">
              <MessageSquare className="text-emerald-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">Kirim Pengaduan atau Aspirasi</h3>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="type">Jenis Laporan *</Label>
                  <Select value={formData.type} onValueChange={value => setFormData({
                  ...formData,
                  type: value
                })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis laporan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pengaduan">Pengaduan</SelectItem>
                      <SelectItem value="Aspirasi">Aspirasi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Kategori *</Label>
                  <Select value={formData.category} onValueChange={value => setFormData({
                  ...formData,
                  category: value
                })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      {complaintCategories.map(category => <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Judul/Subjek *</Label>
                <Input id="title" value={formData.title} onChange={e => setFormData({
                ...formData,
                title: e.target.value
              })} placeholder="Masukkan judul pengaduan/aspirasi" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Lokasi Kejadian</Label>
                <Input id="location" value={formData.location} onChange={e => setFormData({
                ...formData,
                location: e.target.value
              })} placeholder="Contoh: Jl. Fajar Baru RT 01/RW 01" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Deskripsi Detail *</Label>
                <Textarea id="description" value={formData.description} onChange={e => setFormData({
                ...formData,
                description: e.target.value
              })} placeholder="Jelaskan detail pengaduan/aspirasi Anda..." rows={5} />
              </div>

              <div className="space-y-4">
                <Label>Bukti Pendukung (Foto/Video/Dokumen)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Camera className="mx-auto text-gray-400 mb-2" size={32} />
                    <p className="text-gray-600 mb-2">Upload Foto</p>
                    <Button variant="outline" size="sm">
                      Pilih Foto
                    </Button>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                    <p className="text-gray-600 mb-2">Upload Dokumen</p>
                    <Button variant="outline" size="sm">
                      Pilih File
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Format yang didukung: JPG, PNG, MP4, PDF (Maks. 10MB per file)
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Catatan Penting:</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Pastikan informasi yang disampaikan akurat dan faktual</li>
                  <li>• Gunakan bahasa yang sopan dan tidak menyinggung pihak lain</li>
                  <li>• Lampirkan bukti pendukung untuk memperkuat laporan Anda</li>
                  <li>• Pengaduan/aspirasi akan ditindaklanjuti dalam 3-7 hari kerja</li>
                </ul>
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline">
                  Reset Form
                </Button>
                <Button onClick={handleSubmit} className="bg-emerald-600 hover:bg-emerald-700">
                  <Send size={16} className="mr-2" />
                  Kirim Laporan
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Status & Riwayat */}
        <TabsContent value="status">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Status & Riwayat Pengaduan/Aspirasi</h3>
            
            <div className="space-y-4">
              {complaints.map(complaint => <Card key={complaint.id} className="p-4 border-l-4 border-l-emerald-500">
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {complaint.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {complaint.category}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-1">{complaint.title}</h4>
                        <p className="text-sm text-gray-600">Tanggal: {complaint.date}</p>
                      </div>
                      <div className="flex items-center space-x-2 mt-3 md:mt-0">
                        {getStatusIcon(complaint.status)}
                        <Badge className={`${complaint.statusColor} text-white`}>
                          {complaint.status}
                        </Badge>
                      </div>
                    </div>
                    
                    {complaint.response && <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong>Tanggapan:</strong> {complaint.response}
                        </p>
                      </div>}
                    
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">
                        Lihat Detail
                      </Button>
                    </div>
                  </div>
                </Card>)}
            </div>

            {complaints.length === 0 && <div className="text-center py-8">
                <MessageSquare className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500">Belum ada pengaduan atau aspirasi</p>
              </div>}
          </Card>
        </TabsContent>
      </Tabs>
    </div>;
};
export default CitizenComplaints;