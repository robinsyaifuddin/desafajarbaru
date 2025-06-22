
import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Users, Calendar, Award } from 'lucide-react';

const VillageProfile = () => {
  const profileData = [
    {
      title: 'Sejarah Desa',
      content: 'Desa Fajar Baru berdiri tahun 1960 setelah memisahkan diri dari Desa Karang Anyar. Melalui perjalanan panjang hingga menjadi desa definitif tahun 1991, kini dipimpin M. Agus Budiantoro, S.HI, MH periode 2019-2027.',
      icon: Calendar
    },
    {
      title: 'Visi Desa',
      content: 'Menjadi desa maju, mandiri, dan berdaya saing dengan peningkatan infrastruktur, ekonomi desa, serta kualitas kehidupan sosial dan ekologis.',
      icon: Award
    },
    {
      title: 'Program Unggulan',
      content: 'BUMDes "Madani" dengan fokus hidroponik dan ketahanan pangan, program bantuan sosial BLT-DD, pembangunan infrastruktur, dan pengembangan UMKM desa.',
      icon: Users
    }
  ];

  const achievements = [
    { title: 'Status Desa Maju', year: '2024', category: 'IDM 0,7578 - Kemendes RI' },
    { title: 'Penghargaan SDGs', year: '2023', category: 'Kementerian Desa RI' },
    { title: 'Kampung Pengawasan Partisipatif', year: '2024', category: 'Bawaslu Lampung Selatan' }
  ];

  return (
    <section id="profile" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Profil Desa Fajar Baru
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mengenal lebih dekat tentang sejarah, visi, misi, dan pencapaian Desa Fajar Baru
            dalam perjalanan menuju desa yang maju dan mandiri dengan status Desa Maju IDM 0,7578.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80"
              alt="Desa Fajar Baru"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-village opacity-20 rounded-2xl"></div>
          </div>

          {/* Profile Content */}
          <div className="space-y-6">
            {profileData.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-village rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Location Info */}
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-green-50 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-12 h-12 text-village-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lokasi</h3>
              <p className="text-gray-600">Jati Agung, Lampung Selatan<br />Provinsi Lampung</p>
            </div>
            <div>
              <Users className="w-12 h-12 text-village-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Penduduk</h3>
              <p className="text-gray-600">7.041 Jiwa<br />Luas 6,40 km²</p>
            </div>
            <div>
              <Award className="w-12 h-12 text-village-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Status</h3>
              <p className="text-gray-600">Desa Maju<br />IDM 0,7578</p>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Prestasi & Penghargaan Terkini</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-village rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                <p className="text-village-green font-medium mb-1">{achievement.year}</p>
                <p className="text-gray-600 text-sm">{achievement.category}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillageProfile;
