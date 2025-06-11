
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Clock, CheckCircle, XCircle, Download } from 'lucide-react';

const PublicServices = () => {
  const [applications, setApplications] = useState([
    {
      id: 'APP001',
      service: 'Surat Keterangan Domisili',
      submittedDate: '2024-01-15',
      status: 'completed',
      documents: ['domisili-certificate.pdf']
    },
    {
      id: 'APP002',
      service: 'Surat Pengantar SKCK',
      submittedDate: '2024-01-18',
      status: 'processing',
      documents: []
    }
  ]);

  const services = [
    {
      name: 'Surat Keterangan Domisili',
      description: 'Surat yang menyatakan bahwa seseorang berdomisili di desa',
      requirements: ['KTP', 'KK', 'Surat Pengantar RT/RW'],
      processingTime: '3 hari kerja'
    },
    {
      name: 'Surat Keterangan Usaha',
      description: 'Surat keterangan untuk keperluan usaha atau UMKM',
      requirements: ['KTP', 'KK', 'Foto Tempat Usaha'],
      processingTime: '5 hari kerja'
    },
    {
      name: 'Surat Pengantar SKCK',
      description: 'Surat pengantar untuk pembuatan SKCK di Polres',
      requirements: ['KTP', 'KK', 'Pas Foto 4x6'],
      processingTime: '2 hari kerja'
    },
    {
      name: 'Surat Keterangan Tidak Mampu',
      description: 'Surat keterangan untuk bantuan sosial atau beasiswa',
      requirements: ['KTP', 'KK', 'Surat Keterangan Penghasilan'],
      processingTime: '4 hari kerja'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Selesai</Badge>;
      case 'processing':
        return <Badge className="bg-blue-100 text-blue-800"><Clock className="h-3 w-3 mr-1" />Diproses</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="h-3 w-3 mr-1" />Ditolak</Badge>;
      default:
        return <Badge variant="secondary">Menunggu</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="services" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="services">Pengajuan Layanan</TabsTrigger>
          <TabsTrigger value="status">Status Pengajuan</TabsTrigger>
          <TabsTrigger value="documents">Unduh Dokumen</TabsTrigger>
        </TabsList>

        <TabsContent value="services">
          <div className="grid gap-4">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2">Persyaratan:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {service.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        <Clock className="h-4 w-4 inline mr-1" />
                        Waktu proses: {service.processingTime}
                      </span>
                      <Button className="bg-gradient-village hover:opacity-90">
                        Ajukan Sekarang
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="status">
          <Card>
            <CardHeader>
              <CardTitle>Riwayat Pengajuan Layanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{app.service}</h4>
                      {getStatusBadge(app.status)}
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>ID Pengajuan: {app.id}</p>
                      <p>Tanggal Pengajuan: {new Date(app.submittedDate).toLocaleDateString('id-ID')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Dokumen yang Dapat Diunduh</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications
                  .filter(app => app.status === 'completed' && app.documents.length > 0)
                  .map((app) => (
                    <div key={app.id} className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">{app.service}</h4>
                      <div className="space-y-2">
                        {app.documents.map((doc, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{doc}</span>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Unduh
                            </Button>
                          </div>
                        ))}
                      </div>
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

export default PublicServices;
