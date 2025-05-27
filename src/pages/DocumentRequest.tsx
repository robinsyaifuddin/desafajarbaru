
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Upload, Clock, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';

const DocumentRequest = () => {
  const [formData, setFormData] = useState({
    documentType: '',
    name: '',
    nik: '',
    purpose: '',
    description: ''
  });

  const documentTypes = [
    'Surat Keterangan Domisili',
    'Surat Keterangan Usaha',
    'Surat Pengantar Nikah',
    'Surat Keterangan Tidak Mampu',
    'Surat Pindah Domisili',
    'Legalisir Dokumen'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Document request:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Pengajuan Dokumen
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ajukan permohonan dokumen administrasi secara online dengan mudah dan cepat
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Form Pengajuan</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="documentType">Jenis Dokumen</Label>
                    <Select onValueChange={(value) => setFormData({...formData, documentType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis dokumen" />
                      </SelectTrigger>
                      <SelectContent>
                        {documentTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Nama sesuai KTP"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nik">NIK</Label>
                      <Input
                        id="nik"
                        type="text"
                        placeholder="Nomor Induk Kependudukan"
                        value={formData.nik}
                        onChange={(e) => setFormData({...formData, nik: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="purpose">Keperluan</Label>
                    <Input
                      id="purpose"
                      type="text"
                      placeholder="Untuk keperluan apa dokumen ini"
                      value={formData.purpose}
                      onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Keterangan Tambahan</Label>
                    <Textarea
                      id="description"
                      placeholder="Keterangan atau catatan tambahan"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Dokumen Pendukung</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Drag & drop file atau klik untuk upload</p>
                      <p className="text-sm text-gray-500">Format: PDF, JPG, PNG (Max: 5MB)</p>
                      <Button variant="outline" className="mt-4">
                        Pilih File
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-village hover:opacity-90">
                    <FileText size={16} className="mr-2" />
                    Ajukan Permohonan
                  </Button>
                </form>
              </Card>
            </div>

            <div>
              <Card className="p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Status Pengajuan</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Clock className="text-yellow-500" size={20} />
                    <div>
                      <p className="font-medium text-gray-800">Surat Domisili</p>
                      <p className="text-sm text-gray-600">Sedang diproses</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="text-green-500" size={20} />
                    <div>
                      <p className="font-medium text-gray-800">Surat Usaha</p>
                      <p className="text-sm text-gray-600">Selesai</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Informasi Penting</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="border-l-4 border-village-green pl-3">
                    <p className="font-medium">Persyaratan Umum:</p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>KTP Asli</li>
                      <li>Kartu Keluarga</li>
                      <li>Surat Pengantar RT/RW</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-village-blue pl-3">
                    <p className="font-medium">Waktu Proses:</p>
                    <p>1-3 hari kerja tergantung jenis dokumen</p>
                  </div>
                  <div className="border-l-4 border-village-orange pl-3">
                    <p className="font-medium">Jam Pelayanan:</p>
                    <p>Senin-Kamis: 08:00-15:00 WIB<br />Jumat: 08:00-11:30 WIB</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocumentRequest;
