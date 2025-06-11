import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { FileText, Send, Download, Clock, CheckCircle, XCircle, Upload, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const CitizenServices = () => {
  const {
    toast
  } = useToast();
  const [selectedService, setSelectedService] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const availableServices = [{
    id: 1,
    name: 'Surat Keterangan Domisili',
    description: 'Surat keterangan tempat tinggal',
    category: 'Administrasi',
    duration: '3 hari kerja'
  }, {
    id: 2,
    name: 'Surat Keterangan Usaha',
    description: 'Surat keterangan untuk keperluan usaha',
    category: 'Ekonomi',
    duration: '2 hari kerja'
  }, {
    id: 3,
    name: 'Surat Pengantar SKCK',
    description: 'Surat pengantar untuk pembuatan SKCK',
    category: 'Hukum',
    duration: '1 hari kerja'
  }, {
    id: 4,
    name: 'Surat Keterangan Tidak Mampu',
    description: 'Surat keterangan kondisi ekonomi',
    category: 'Sosial',
    duration: '2 hari kerja'
  }, {
    id: 5,
    name: 'Surat Keterangan Lahir',
    description: 'Surat keterangan kelahiran',
    category: 'Administrasi',
    duration: '1 hari kerja'
  }, {
    id: 6,
    name: 'Surat Keterangan Menikah',
    description: 'Surat keterangan untuk pernikahan',
    category: 'Administrasi',
    duration: '3 hari kerja'
  }, {
    id: 7,
    name: 'Surat Keterangan Kematian',
    description: 'Surat keterangan kematian',
    category: 'Administrasi',
    duration: '1 hari kerja'
  }, {
    id: 8,
    name: 'Surat Izin Keramaian',
    description: 'Surat izin untuk acara/keramaian',
    category: 'Perizinan',
    duration: '7 hari kerja'
  }, {
    id: 9,
    name: 'Surat Rekomendasi Bantuan',
    description: 'Surat rekomendasi untuk bantuan sosial',
    category: 'Sosial',
    duration: '5 hari kerja'
  }, {
    id: 10,
    name: 'Surat Keterangan Belum Menikah',
    description: 'Surat keterangan status lajang',
    category: 'Administrasi',
    duration: '2 hari kerja'
  }];
  const serviceRequests = [{
    id: 1,
    serviceName: 'Surat Keterangan Domisili',
    date: '2024-01-15',
    status: 'Selesai',
    statusColor: 'bg-green-500'
  }, {
    id: 2,
    serviceName: 'Surat Pengantar SKCK',
    date: '2024-01-20',
    status: 'Diproses',
    statusColor: 'bg-blue-500'
  }, {
    id: 3,
    serviceName: 'Surat Keterangan Usaha',
    date: '2024-01-25',
    status: 'Menunggu Verifikasi',
    statusColor: 'bg-yellow-500'
  }];
  const filteredServices = availableServices.filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.category.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleServiceRequest = () => {
    toast({
      title: "Pengajuan Berhasil",
      description: "Pengajuan layanan Anda telah dikirim dan sedang diproses."
    });
    setSelectedService(null);
  };
  const getStatusIcon = status => {
    switch (status) {
      case 'Selesai':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'Diproses':
        return <Clock size={16} className="text-blue-500" />;
      case 'Menunggu Verifikasi':
        return <Clock size={16} className="text-yellow-500" />;
      case 'Ditolak':
        return <XCircle size={16} className="text-red-500" />;
      default:
        return <Clock size={16} className="text-gray-500" />;
    }
  };
  return <div className="space-y-6">
      <Tabs defaultValue="request" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="request" className="text-sm">Pengajuan</TabsTrigger>
          <TabsTrigger value="status" className="text-sm">Status</TabsTrigger>
          <TabsTrigger value="documents" className="text-sm">Unduh</TabsTrigger>
        </TabsList>

        {/* Pengajuan Layanan */}
        <TabsContent value="request" className="space-y-6">
          {!selectedService ? <Card className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Pilih Layanan Publik</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input placeholder="Cari layanan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredServices.map(service => <Card key={service.id} className="p-4 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-emerald-500" onClick={() => setSelectedService(service)}>
                    <div className="flex items-start justify-between mb-3">
                      <FileText className="text-emerald-600" size={24} />
                      <Badge variant="outline" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock size={12} className="mr-1" />
                      {service.duration}
                    </div>
                  </Card>)}
              </div>
            </Card> : <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Formulir Pengajuan: {selectedService.name}
                </h3>
                <Button variant="outline" onClick={() => setSelectedService(null)}>
                  Kembali
                </Button>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Informasi Layanan</h4>
                  <p className="text-blue-700 text-sm mb-1">{selectedService.description}</p>
                  <p className="text-blue-700 text-sm">Estimasi waktu: {selectedService.duration}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="purpose">Keperluan</Label>
                    <Textarea id="purpose" placeholder="Jelaskan keperluan pengajuan surat ini..." rows={3} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Catatan Tambahan</Label>
                    <Textarea id="notes" placeholder="Catatan atau keterangan tambahan (opsional)..." rows={3} />
                  </div>

                  <div className="md:col-span-2 space-y-4">
                    <Label>Dokumen Pendukung</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                      <p className="text-gray-600 mb-2">Drag & drop atau klik untuk upload dokumen</p>
                      <p className="text-xs text-gray-500">Format yang didukung: PDF, JPG, PNG (Maks. 5MB)</p>
                      <Button variant="outline" className="mt-3">
                        Pilih File
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setSelectedService(null)}>
                    Batal
                  </Button>
                  <Button onClick={handleServiceRequest} className="bg-emerald-600 hover:bg-emerald-700">
                    <Send size={16} className="mr-2" />
                    Kirim Pengajuan
                  </Button>
                </div>
              </div>
            </Card>}
        </TabsContent>

        {/* Status Pengajuan */}
        <TabsContent value="status">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Status Pengajuan Layanan</h3>
            
            <div className="space-y-4">
              {serviceRequests.map(request => <Card key={request.id} className="p-4 border-l-4 border-l-emerald-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">{request.serviceName}</h4>
                      <p className="text-sm text-gray-600">Tanggal pengajuan: {request.date}</p>
                    </div>
                    <div className="flex items-center space-x-3 mt-3 md:mt-0">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(request.status)}
                        <Badge className={`${request.statusColor} text-white`}>
                          {request.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        Detail
                      </Button>
                    </div>
                  </div>
                </Card>)}
            </div>

            {serviceRequests.length === 0 && <div className="text-center py-8">
                <FileText className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500">Belum ada pengajuan layanan</p>
              </div>}
          </Card>
        </TabsContent>

        {/* Unduh Dokumen */}
        <TabsContent value="documents">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Dokumen yang Dapat Diunduh</h3>
            
            <div className="space-y-4">
              <Card className="p-4 border-l-4 border-l-green-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">Surat Keterangan Domisili</h4>
                    <p className="text-sm text-gray-600">Disetujui pada: 18 Januari 2024</p>
                    <p className="text-xs text-gray-500">No. Surat: 001/SK-DOM/I/2024</p>
                  </div>
                  <div className="flex items-center space-x-3 mt-3 md:mt-0">
                    <Badge className="bg-green-500 text-white">
                      Selesai
                    </Badge>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      <Download size={16} className="mr-2" />
                      Unduh
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center py-8 text-gray-500">
              <Download className="mx-auto text-gray-300 mb-4" size={48} />
              <p>Dokumen yang sudah selesai akan muncul di sini</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>;
};
export default CitizenServices;