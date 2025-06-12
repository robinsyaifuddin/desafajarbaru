
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Users, 
  Clock, 
  CheckCircle, 
  Phone, 
  MapPin,
  Calendar,
  CreditCard,
  Shield,
  BookOpen
} from 'lucide-react';

const Services = () => {
  const layananUtama = [
    {
      kategori: 'Administrasi Kependudukan',
      deskripsi: 'Layanan dokumen kependudukan seperti KTP, KK, dan akta',
      icon: Users,
      color: 'bg-blue-500',
      services: [
        'Pembuatan KTP Baru',
        'Perubahan Data KTP',
        'Pembuatan Kartu Keluarga',
        'Surat Pengantar Akta Kelahiran',
        'Surat Pengantar Akta Kematian'
      ],
      link: '/administrasi-penduduk'
    },
    {
      kategori: 'Surat Keterangan',
      deskripsi: 'Berbagai surat keterangan untuk keperluan administrasi',
      icon: FileText,
      color: 'bg-green-500',
      services: [
        'Surat Keterangan Domisili',
        'Surat Keterangan Usaha',
        'Surat Keterangan Tidak Mampu',
        'Surat Keterangan Kelakuan Baik',
        'Surat Pengantar Nikah'
      ],
      link: '/document-request'
    },
    {
      kategori: 'Pelayanan Online',
      deskripsi: 'Layanan digital untuk kemudahan masyarakat',
      icon: Shield,
      color: 'bg-purple-500',
      services: [
        'Pengajuan Dokumen Online',
        'Cek Status Permohonan',
        'Jadwal Pelayanan',
        'Konsultasi Online',
        'Download Formulir'
      ],
      link: '/document-request'
    }
  ];

  const infoLayanan = [
    { label: 'Jam Pelayanan', value: 'Senin-Kamis: 08:00-15:00, Jumat: 08:00-11:30', icon: Clock },
    { label: 'Lokasi', value: 'Kantor Desa Fajar Baru, Jl. Way Kandis No. 123', icon: MapPin },
    { label: 'Kontak', value: '(0721) 123-4567', icon: Phone },
    { label: 'Email', value: 'pelayanan@fajar-baru.desa.id', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Layanan Desa
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Berbagai layanan administrasi dan pelayanan publik untuk kemudahan masyarakat 
              Desa Fajar Baru Way Kandis
            </p>
          </div>

          {/* Main Services */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {layananUtama.map((layanan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className={`w-12 h-12 ${layanan.color} rounded-full flex items-center justify-center mr-4`}>
                      <layanan.icon className="text-white" size={24} />
                    </div>
                    {layanan.kategori}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{layanan.deskripsi}</p>
                  
                  <div className="space-y-2 mb-6">
                    {layanan.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={12} className="text-green-500 mr-2" />
                        {service}
                      </div>
                    ))}
                  </div>
                  
                  <Link to={layanan.link}>
                    <Button className="w-full bg-gradient-village hover:opacity-90">
                      Akses Layanan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {infoLayanan.map((info, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-village-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-village-green" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{info.label}</h3>
                <p className="text-gray-600 text-sm">{info.value}</p>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <Card className="p-8 bg-gradient-to-r from-village-green to-village-blue text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Butuh Bantuan?</h3>
                <p className="mb-6 opacity-90">
                  Tim layanan kami siap membantu Anda dengan berbagai kebutuhan administrasi. 
                  Hubungi kami atau datang langsung ke kantor desa.
                </p>
                <div className="flex gap-4">
                  <Button variant="secondary">
                    <Phone size={16} className="mr-2" />
                    Hubungi Kami
                  </Button>
                  <Link to="/document-request">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-village-green">
                      Ajukan Dokumen
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={48} className="text-white" />
                </div>
                <p className="text-sm opacity-80">Layanan 24/7 Online</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
