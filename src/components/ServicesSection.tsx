
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Users, 
  Calendar, 
  MapPin, 
  Book, 
  Image,
  ChevronRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: 'IDM (Indeks Desa Membangun)',
      description: 'Data perkembangan dan kemajuan desa dalam berbagai aspek pembangunan',
      category: 'Data & Statistik',
      color: 'bg-blue-500',
      link: '/infographics'
    },
    {
      icon: Book,
      title: 'PPID',
      description: 'Pejabat Pengelola Informasi dan Dokumentasi untuk transparansi data',
      category: 'Transparansi',
      color: 'bg-green-500',
      link: '/profile'
    },
    {
      icon: Users,
      title: 'Administrasi Penduduk',
      description: 'Layanan pengelolaan data kependudukan dan pelayanan publik',
      category: 'Pelayanan',
      color: 'bg-purple-500',
      link: '/services'
    },
    {
      icon: FileText,
      title: 'APB Desa',
      description: 'Informasi transparan anggaran pendapatan dan belanja desa',
      category: 'Keuangan',
      color: 'bg-orange-500',
      link: '/budget'
    },
    {
      icon: Users,
      title: 'Belanja dan Bansos',
      description: 'Informasi anggaran desa dan program bantuan sosial',
      category: 'Bantuan Sosial',
      color: 'bg-red-500',
      link: '/budget'
    },
    {
      icon: Image,
      title: 'Galeri Kegiatan',
      description: 'Dokumentasi foto kegiatan dan acara desa',
      category: 'Dokumentasi',
      color: 'bg-indigo-500',
      link: '/gallery'
    }
  ];

  const documentServices = [
    { 
      name: 'Surat Keterangan Domisili', 
      link: '/document-request?type=domisili',
      value: 'Surat Keterangan Domisili'
    },
    { 
      name: 'Surat Keterangan Usaha', 
      link: '/document-request?type=usaha',
      value: 'Surat Keterangan Usaha'
    },
    { 
      name: 'Surat Pengantar KTP', 
      link: '/document-request?type=ktp',
      value: 'Surat Pengantar KTP'
    },
    { 
      name: 'Surat Keterangan Tidak Mampu', 
      link: '/document-request?type=tidak-mampu',
      value: 'Surat Keterangan Tidak Mampu'
    },
    { 
      name: 'Surat Pengantar Nikah', 
      link: '/document-request?type=nikah',
      value: 'Surat Pengantar Nikah'
    },
    { 
      name: 'Surat Keterangan Kelahiran', 
      link: '/document-request?type=kelahiran',
      value: 'Surat Keterangan Kelahiran'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Layanan Desa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Berbagai layanan digital dan administrasi untuk kemudahan masyarakat 
            dalam mengakses informasi dan pelayanan publik.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <service.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <span className="text-sm text-gray-500 font-medium">{service.category}</span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="ghost" size="sm" className="text-village-green hover:text-village-green hover:bg-green-50 p-0">
                      Akses Layanan <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Document Services */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Kebutuhan Dokumen
            </h3>
            <p className="text-gray-600 mb-8">
              Layanan pembuatan dokumen administrasi dengan proses yang mudah dan cepat. 
              Masyarakat dapat mengajukan permohonan secara online.
            </p>
            
            <div className="space-y-3">
              {documentServices.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-medium text-gray-800">{doc.name}</span>
                  <Link to={doc.link}>
                    <Button variant="ghost" size="sm" className="text-village-green">
                      <ChevronRight size={16} />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            <Link to="/document-request">
              <Button className="bg-gradient-village hover:opacity-90 text-white mt-6" size="lg">
                Ajukan Permohonan
              </Button>
            </Link>
          </div>

          <Card className="p-8 bg-gradient-to-br from-village-green to-village-blue text-white">
            <h4 className="text-2xl font-bold mb-4">Layanan Digital</h4>
            <p className="mb-6 opacity-90">
              Sistem layanan digital terintegrasi untuk memudahkan proses 
              administrasi dan pelayanan masyarakat.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-80">Digital</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Tersedia</div>
              </div>
            </div>

            <Link to="/services">
              <Button variant="secondary" className="w-full">
                Pelajari Lebih Lanjut
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
