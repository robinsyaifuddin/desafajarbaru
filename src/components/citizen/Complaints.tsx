
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Send, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Complaints = () => {
  const { toast } = useToast();
  const [complaintForm, setComplaintForm] = useState({
    category: '',
    title: '',
    description: '',
    priority: 'medium'
  });

  const [complaints] = useState([
    {
      id: 'COM001',
      title: 'Jalan Rusak di RT 03',
      category: 'Infrastruktur',
      description: 'Jalan di depan rumah warga rusak parah dan berlubang',
      status: 'responded',
      submittedDate: '2024-01-10',
      response: 'Terima kasih atas laporannya. Tim akan melakukan perbaikan minggu depan.'
    },
    {
      id: 'COM002',
      title: 'Lampu Jalan Mati',
      category: 'Infrastruktur',
      description: 'Lampu jalan di Jl. Melati sudah mati selama 3 hari',
      status: 'processing',
      submittedDate: '2024-01-15',
      response: null
    }
  ]);

  const categories = [
    'Infrastruktur',
    'Kebersihan',
    'Keamanan',
    'Pelayanan Publik',
    'Kesehatan',
    'Pendidikan',
    'Lainnya'
  ];

  const handleSubmitComplaint = () => {
    if (!complaintForm.category || !complaintForm.title || !complaintForm.description) {
      toast({
        title: "Form tidak lengkap",
        description: "Harap isi semua field yang diperlukan.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Pengaduan berhasil dikirim",
      description: "Pengaduan Anda telah diterima dan akan ditindaklanjuti."
    });

    setComplaintForm({
      category: '',
      title: '',
      description: '',
      priority: 'medium'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'responded':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Ditanggapi</Badge>;
      case 'processing':
        return <Badge className="bg-blue-100 text-blue-800"><Clock className="h-3 w-3 mr-1" />Diproses</Badge>;
      case 'resolved':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Selesai</Badge>;
      default:
        return <Badge variant="secondary">Diterima</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="submit" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="submit">Kirim Pengaduan</TabsTrigger>
          <TabsTrigger value="history">Riwayat Pengaduan</TabsTrigger>
        </TabsList>

        <TabsContent value="submit">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Kirim Pengaduan/Aspirasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Kategori</Label>
                  <Select value={complaintForm.category} onValueChange={(value) => setComplaintForm({...complaintForm, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Prioritas</Label>
                  <Select value={complaintForm.priority} onValueChange={(value) => setComplaintForm({...complaintForm, priority: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Rendah</SelectItem>
                      <SelectItem value="medium">Sedang</SelectItem>
                      <SelectItem value="high">Tinggi</SelectItem>
                      <SelectItem value="urgent">Mendesak</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Judul Pengaduan</Label>
                <Input
                  id="title"
                  value={complaintForm.title}
                  onChange={(e) => setComplaintForm({...complaintForm, title: e.target.value})}
                  placeholder="Masukkan judul pengaduan"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Deskripsi Detail</Label>
                <Textarea
                  id="description"
                  value={complaintForm.description}
                  onChange={(e) => setComplaintForm({...complaintForm, description: e.target.value})}
                  placeholder="Jelaskan pengaduan Anda secara detail"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Bukti Pendukung (Opsional)</Label>
                <Input type="file" multiple accept="image/*,video/*,.pdf" />
                <p className="text-sm text-gray-500">
                  Format: JPG, PNG, MP4, PDF. Maksimal 5MB per file
                </p>
              </div>

              <Button onClick={handleSubmitComplaint} className="bg-gradient-village hover:opacity-90">
                <Send className="h-4 w-4 mr-2" />
                Kirim Pengaduan
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Riwayat Pengaduan & Aspirasi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complaints.map((complaint) => (
                  <div key={complaint.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{complaint.title}</h4>
                      {getStatusBadge(complaint.status)}
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-2">
                      <p>ID: {complaint.id} | Kategori: {complaint.category}</p>
                      <p>Tanggal: {new Date(complaint.submittedDate).toLocaleDateString('id-ID')}</p>
                    </div>
                    
                    <p className="text-sm mb-3">{complaint.description}</p>
                    
                    {complaint.response && (
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h5 className="font-medium text-blue-800 mb-1">Tanggapan:</h5>
                        <p className="text-sm text-blue-700">{complaint.response}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Complaints;
