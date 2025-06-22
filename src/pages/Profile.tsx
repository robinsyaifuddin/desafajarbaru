
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MapPin, Building, Award, Eye, Calendar, Target, Heart } from 'lucide-react';
import Footer from '@/components/Footer';

const Profile = () => {
  const villageData = {
    establishment: '1960',
    area: '6,40 km²',
    population: '7.041 jiwa',
    families: '1.800 KK',
    rw: '8 RW',
    rt: '24 RT'
  };

  const officials = [
    {
      name: 'M. Agus Budiantoro, S.HI, MH',
      position: 'Kepala Desa',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      period: '2019 - 2027'
    },
    {
      name: 'Sekretaris Desa',
      position: 'Sekretaris Desa',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?auto=format&fit=crop&w=400&q=80',
      period: '2020 - 2026'
    },
    {
      name: 'Kaur Keuangan',
      position: 'Kaur Keuangan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      period: '2020 - 2026'
    },
    {
      name: 'Kasi Kesejahteraan',
      position: 'Kasi Kesejahteraan',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      period: '2021 - 2027'
    }
  ];

  const achievements = [
    {
      year: '2024',
      award: 'Status Desa Maju',
      category: 'IDM 0,7578 - Kemendes RI'
    },
    {
      year: '2024',
      award: 'Kampung Pengawasan Partisipatif',
      category: 'Bawaslu Lampung Selatan'
    },
    {
      year: '2023',
      award: 'Koordinator Terbaik ke-3',
      category: 'Sosialisasi Perda Lampung'
    },
    {
      year: '2023',
      award: 'Penghargaan SDGs',
      category: 'Kementerian Desa RI'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Profil Desa Fajar Baru
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mengenal lebih dekat sejarah, visi misi, dan struktur pemerintahan 
              Desa Fajar Baru, Kecamatan Jati Agung, Kabupaten Lampung Selatan
            </p>
          </div>

          {/* Village Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <Card className="p-4 text-center animate-fade-in">
              <Calendar className="w-8 h-8 text-village-green mx-auto mb-2" />
              <div className="font-bold text-lg text-gray-800">{villageData.establishment}</div>
              <div className="text-xs text-gray-600">Tahun Berdiri</div>
            </Card>
            <Card className="p-4 text-center animate-fade-in">
              <MapPin className="w-8 h-8 text-village-blue mx-auto mb-2" />
              <div className="font-bold text-lg text-gray-800">{villageData.area}</div>
              <div className="text-xs text-gray-600">Luas Wilayah</div>
            </Card>
            <Card className="p-4 text-center animate-fade-in">
              <Users className="w-8 h-8 text-village-orange mx-auto mb-2" />
              <div className="font-bold text-lg text-gray-800">{villageData.population}</div>
              <div className="text-xs text-gray-600">Jumlah Penduduk</div>
            </Card>
            <Card className="p-4 text-center animate-fade-in">
              <Building className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="font-bold text-lg text-gray-800">{villageData.families}</div>
              <div className="text-xs text-gray-600">Kepala Keluarga</div>
            </Card>
            <Card className="p-4 text-center animate-fade-in">
              <Target className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <div className="font-bold text-lg text-gray-800">{villageData.rw}</div>
              <div className="text-xs text-gray-600">Rukun Warga</div>
            </Card>
            <Card className="p-4 text-center animate-fade-in">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="font-bold text-lg text-gray-800">{villageData.rt}</div>
              <div className="text-xs text-gray-600">Rukun Tetangga</div>
            </Card>
          </div>

          {/* History Section */}
          <Card className="p-8 mb-12 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Sejarah Desa</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                Pada mulanya Desa Fajar Baru merupakan bagian dari Desa Karang Anyar, yang pada tahun 1959 
                disebut dengan susukan Fajar Baru. Selanjutnya tahun 1960 memisahkan diri dari Desa Karang Anyar 
                dengan kepala desa A. Sastro Rejo.
              </p>
              <p className="mb-4">
                Tahun 1965 setelah G30S kembali menggabungkan diri dengan Desa Karang Anyar yang waktu itu 
                dipimpin Kepala Desa Hadi Sumarto, tahun 1968 dipimpin A.Hakim hingga tahun 1984. Pada tahun 
                tersebut diadakan pemekaran desa dan sebagai penjabat Kepala Desa Bapak Aliesan dengan sebutan 
                Desa Fajar Baru Kecamatan Tanjung Bintang Kabupaten Lampung Selatan.
              </p>
              <p className="mb-4">
                Pada tanggal 20 Oktober 1986 ditetapkan menjadi Desa Persiapan dengan Kepala Desa Persiapan 
                diangkat Sdr. Aliesan selama 5 tahun. Desa Fajar Baru definitif menjadi desa tahun 1991, 
                dan tahun 1992 diadakan Pilkades pertama yang terpilih lagi Sdr. Aliesan hingga tahun 2002.
              </p>
              <p className="mb-4">
                Setelah beberapa periode kepemimpinan yang dipimpin oleh Pariman, Suparno, Ir. Zoehery Zoel, 
                dan Solichen S.Sos, pada tahun 2013 terpilih Sdr. Sucipto yang menjabat hingga 2019.
              </p>
              <p>
                Kepala Desa saat ini, M. Agus Budiantoro, S.HI, MH (lahir 16 Agustus 1986 di Bandar Lampung), 
                memulai karier sebagai guru honorer, kemudian sebagai anggota BPD (2013–2019), dan pada 2019 
                terpilih sebagai Kepala Desa periode 2019–2027. Beliau dikenal sebagai sosok yang aktif 
                berorganisasi dan menjabat sebagai Sekretaris APDESI Provinsi Lampung (2023–2028).
              </p>
            </div>
          </Card>

          {/* Vision Mission */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 animate-fade-in">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-village-green mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Visi Desa</h3>
              </div>
              <blockquote className="text-lg text-gray-700 italic border-l-4 border-village-green pl-4">
                "Menjadi desa maju, mandiri, dan berdaya saing dengan peningkatan infrastruktur, 
                ekonomi desa, serta kualitas kehidupan sosial dan ekologis"
              </blockquote>
            </Card>

            <Card className="p-8 animate-fade-in">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-village-blue mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Misi Desa</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-village-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Melanjutkan peningkatan infrastruktur jalan lingkungan dan jalan usaha tani
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-village-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Meningkatkan ketahanan pangan melalui penguatan BUMDes "Madani"
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-village-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Meningkatkan kesejahteraan masyarakat lewat program BLT-DD dan bantuan sosial
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-village-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Mendukung pembangunan religi dan sosial serta menjaga partisipasi demokratis
                </li>
              </ul>
            </Card>
          </div>

          {/* Officials */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Struktur Pemerintahan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {officials.map((official, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={official.image} 
                      alt={official.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{official.name}</h3>
                  <p className="text-village-green text-sm font-medium mb-2">{official.position}</p>
                  <p className="text-gray-500 text-xs">{official.period}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <Card className="p-8 mb-12 animate-fade-in">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-village-orange mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Prestasi & Penghargaan</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-village-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {achievement.year}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{achievement.award}</h4>
                    <p className="text-gray-600 text-sm">{achievement.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Programs Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Program Unggulan</h3>
              <div className="space-y-4 text-gray-700">
                <div className="border-l-4 border-village-green pl-4">
                  <h4 className="font-semibold mb-1">BUMDes "Madani"</h4>
                  <p className="text-sm">Pengembangan hidroponik, pembibitan, dan kemitraan jual gabah dengan alokasi dana Rp296 juta</p>
                </div>
                <div className="border-l-4 border-village-blue pl-4">
                  <h4 className="font-semibold mb-1">Ketahanan Pangan</h4>
                  <p className="text-sm">Program sapi/kambing desa dan alokasi 20% dana desa untuk ketahanan pangan</p>
                </div>
                <div className="border-l-4 border-village-orange pl-4">
                  <h4 className="font-semibold mb-1">Masjid As-Safinatu Al-Abbas</h4>
                  <p className="text-sm">Pembangunan masjid dengan waqaf tanah 600 m² dan dana awal Rp120 juta</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Program Sosial</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">BLT-DD 2023</span>
                  <span className="text-village-green font-semibold">35 KPM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Bantuan Yatim</span>
                  <span className="text-village-blue font-semibold">80 Anak</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Bantuan Duafa</span>
                  <span className="text-village-orange font-semibold">45 Orang</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Siltap Aparat & Kader</span>
                  <span className="text-purple-500 font-semibold">Rutin</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Geographic Information */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Letak Geografis</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Luas Wilayah:</span>
                  <span>6,40 km²</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status IDM:</span>
                  <span className="text-village-green font-semibold">Desa Maju (0,7578)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Kecamatan:</span>
                  <span>Jati Agung</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Kabupaten:</span>
                  <span>Lampung Selatan</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Provinsi:</span>
                  <span>Lampung</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">UMKM & Produk Unggulan</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-village-green rounded-full mr-3"></div>
                  <span>Eco-sabun ramah lingkungan</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-village-blue rounded-full mr-3"></div>
                  <span>Kerajinan tapis tradisional</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-village-orange rounded-full mr-3"></div>
                  <span>Tas dan kerajinan tangan</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Produk hidroponik BUMDes</span>
                </div>
              </div>
              <Link to="/services">
                <Button className="w-full mt-6 bg-gradient-village hover:opacity-90">
                  <MapPin size={16} className="mr-2" />
                  Lihat Layanan Desa
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
