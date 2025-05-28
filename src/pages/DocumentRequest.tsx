import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import BackNavigation from '@/components/BackNavigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Upload, Clock, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';

const DocumentRequest = () => {
  const [searchParams] = useSearchParams();
  const docType = searchParams.get('type');
  
  const [formData, setFormData] = useState({
    documentType: '',
    name: '',
    nik: '',
    purpose: '',
    description: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Auto-select document type based on URL parameter
    if (docType) {
      const documentTypeMap: { [key: string]: string } = {
        'domisili': 'Surat Keterangan Domisili',
        'usaha': 'Surat Keterangan Usaha',
        'ktp': 'Surat Pengantar KTP',
        'tidak-mampu': 'Surat Keterangan Tidak Mampu',
        'nikah': 'Surat Pengantar Nikah',
        'kelahiran': 'Surat Keterangan Kelahiran'
      };
      
      const selectedType = documentTypeMap[docType];
      if (selectedType) {
        setFormData(prev => ({ ...prev, documentType: selectedType }));
      }
    }
  }, [docType]);

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

  const getDocumentTitle = () => {
    if (formData.documentType) {
      return `Pengajuan ${formData.documentType}`;
    }
    return 'Pengajuan Dokumen';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <BackNavigation title={getDocumentTitle()} />
      
      <div className="pt-8 pb-16 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {getDocumentTitle()}
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Ajukan permohonan dokumen administrasi secara online dengan mudah dan cepat
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2">
              <Card className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">Form Pengajuan</h3>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="documentType">Jenis Dokumen</Label>
                    <Select 
                      value={formData.documentType} 
                      onValueChange={(value) => setFormData({...formData, documentType: value})}
                    >
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
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-6 text-center">
                      <Upload className="w-8 h-8 md:w-12 md:h-12 text-gray-400 mx-auto mb-2 md:mb-4" />
                      <p className="text-gray-600 mb-2 text-sm md:text-base">Drag & drop file atau klik untuk upload</p>
                      <p className="text-xs md:text-sm text-gray-500">Format: PDF, JPG, PNG (Max: 5MB)</p>
                      <Button variant="outline" className="mt-4 w-full md:w-auto">
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

            <div className="space-y-6">
              <Card className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Status Pengajuan</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Clock className="text-yellow-500" size={20} />
                    <div>
                      <p className="font-medium text-gray-800 text-sm md:text-base">Surat Domisili</p>
                      <p className="text-xs md:text-sm text-gray-600">Sedang diproses</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="text-green-500" size={20} />
                    <div>
                      <p className="font-medium text-gray-800 text-sm md:text-base">Surat Usaha</p>
                      <p className="text-xs md:text-sm text-gray-600">Selesai</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Informasi Penting</h3>
                <div className="space-y-3 text-xs md:text-sm text-gray-600">
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
