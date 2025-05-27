import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Users, CreditCard, MapPin, Clock, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Surat Keterangan Domisili',
      description: 'Pembuatan surat keterangan domisili untuk berbagai keperluan administratif',
      icon: FileText,
      color: 'bg-blue-500',
      requirements: ['KTP Asli', 'Kartu Keluarga', 'Surat Pengantar RT/RW'],
      time: '1-2 Hari Kerja',
      fee: 'Gratis'
    },
    {
      id: 2,
      title: 'Surat Keterangan Usaha',
      description: 'Surat keterangan untuk legalisasi usaha mikro dan kecil di desa',
      icon: CreditCard,
      color: 'bg-green-500',
      requirements: ['KTP Asli', 'Foto Tempat Usaha', 'Surat Pengantar RT/RW'],
      time: '2-3 Hari Kerja',
      fee: 'Rp 10.000'
    },
    {
      id: 3,
      title: 'Surat Pengantar Nikah',
      description: 'Surat pengantar untuk keperluan pernikahan di KUA',
      icon: Users,
      color: 'bg-pink-500',
      requirements: ['KTP Calon Pengantin', 'KK Kedua Belah Pihak', 'Surat Pengantar RT/RW'],
      time: '1 Hari Kerja',
      fee: 'Gratis'
    },
    {
      id: 4,
      title: 'Surat Keterangan Tidak Mampu',
      description: 'Surat keterangan untuk mendapatkan bantuan atau keringanan biaya',
      icon: FileText,
      color: 'bg-orange-500',
      requirements: ['KTP Asli', 'Kartu Keluarga', 'Surat Pengantar RT/RW', 'Foto Rumah'],
      time: '1-2 Hari Kerja',
      fee: 'Gratis'
    },
    {
      id: 5,
      title: 'Pindah Domisili',
      description: 'Layanan administrasi perpindahan domisili antar desa/kelurahan',
      icon: MapPin,
      color: 'bg-purple-500',
      requirements: ['KTP Asli', 'KK Asli', 'Surat Pengantar RT/RW', 'Surat Keterangan Pindah'],
      time: '3-5 Hari Kerja',
      fee: 'Rp 15.000'
    },
    {
      id: 6,
      title: 'Legalisir Dokumen',
      description: 'Legalisir berbagai dokumen untuk keperluan administrasi',
      icon: CheckCircle,
      color: 'bg-indigo-500',
      requirements: ['Dokumen Asli', 'Fotocopy Dokumen', 'KTP'],
      time: '1 Hari Kerja',
      fee: 'Rp 5.000/lembar'
    }
  ];

  const operationalHours = [
    { day: 'Senin - Kamis', time: '08:00 - 15:00 WIB' },
    { day: 'Jumat', time: '08:00 - 11:30 WIB' },
    { day: 'Sabtu - Minggu', time: 'Tutup' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Layanan Desa Fajar Baru
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Berbagai layanan administrasi dan publik yang tersedia untuk memudahkan 
              masyarakat dalam memenuhi kebutuhan dokumen dan perizinan
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={service.id} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-4`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Persyaratan:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle size={12} className="text-green-500 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="font-medium text-gray-800">Waktu:</span>
                      <p className="text-gray-600">{service.time}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Biaya:</span>
                      <p className="text-village-green font-semibold">{service.fee}</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/document-request">
                  <Button className="w-full bg-gradient-village hover:opacity-90">
                    Ajukan Permohonan <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Information Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Operational Hours */}
            <Card className="p-6 animate-fade-in">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-village-green mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Jam Operasional</h3>
              </div>
              <div className="space-y-3">
                {operationalHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-6 animate-fade-in">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-village-blue mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Informasi Kontak</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Kantor Desa Fajar Baru</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Jl. Way Kandis No. 123, Bandar Lampung
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    Telepon: (0721) 123-4567
                  </p>
                  <p className="text-gray-600 text-sm">
                    Email: pelayanan@fajar-baru.desa.id
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Prosedur Pengajuan</h4>
                  <ol className="text-sm text-gray-600 space-y-1">
                    <li>1. Siapkan dokumen persyaratan</li>
                    <li>2. Datang ke kantor desa pada jam operasional</li>
                    <li>3. Isi formulir permohonan</li>
                    <li>4. Serahkan dokumen ke petugas</li>
                    <li>5. Tunggu proses selesai sesuai estimasi waktu</li>
                  </ol>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="mt-12 p-8 bg-gradient-to-r from-village-green to-village-blue text-white text-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Butuh Bantuan Lebih Lanjut?</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Tim pelayanan publik Desa Fajar Baru siap membantu Anda dalam proses 
              pengurusan dokumen dan administrasi lainnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Phone size={16} className="mr-2" />
                Hubungi Kami
              </Button>
              <Link to="/document-request">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-village-green">
                  Download Formulir
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
