
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MapPin, Building, Award, Eye, Calendar, Target, Heart } from 'lucide-react';
import Footer from '@/components/Footer';

const Profile = () => {
  const villageData = {
    establishment: '1965',
    area: '847 Ha',
    population: '2,847 jiwa',
    families: '847 KK',
    rw: '8 RW',
    rt: '24 RT'
  };

  const officials = [
    {
      name: 'Bapak Suryadi, S.Sos',
      position: 'Kepala Desa',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      period: '2019 - 2025'
    },
    {
      name: 'Ibu Siti Aminah, S.E',
      position: 'Sekretaris Desa',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?auto=format&fit=crop&w=400&q=80',
      period: '2020 - 2026'
    },
    {
      name: 'Bapak Ahmad Fauzi, S.H',
      position: 'Kasi Pemerintahan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      period: '2020 - 2026'
    },
    {
      name: 'Ibu Dewi Sartika, S.Pd',
      position: 'Kasi Kesejahteraan',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      period: '2021 - 2027'
    }
  ];

  const achievements = [
    {
      year: '2023',
      award: 'Desa Terbaik Tingkat Kecamatan',
      category: 'Pembangunan Infrastruktur'
    },
    {
      year: '2022',
      award: 'Desa Wisata Terpopuler',
      category: 'Pariwisata Daerah'
    },
    {
      year: '2021',
      award: 'Desa Mandiri Energi',
      category: 'Lingkungan Hidup'
    },
    {
      year: '2020',
      award: 'Desa Bebas Buta Huruf',
      category: 'Pendidikan'
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
              Desa Fajar Baru Way Kandis, Bandar Lampung
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
                Desa Fajar Baru didirikan pada tahun 1965 sebagai bagian dari program transmigrasi 
                pemerintah Indonesia. Nama "Fajar Baru" dipilih untuk melambangkan harapan dan 
                semangat baru para penduduk yang datang dari berbagai daerah di Indonesia.
              </p>
              <p className="mb-4">
                Awalnya, desa ini merupakan area hutan yang kemudian dibuka dan dikembangkan 
                menjadi pemukiman. Para transmigran yang datang sebagian besar berasal dari 
                Jawa Tengah dan Jawa Timur, membawa serta budaya dan tradisi yang kemudian 
                berpadu dengan budaya lokal Lampung.
              </p>
              <p>
                Seiring berjalannya waktu, Desa Fajar Baru berkembang menjadi salah satu desa 
                yang mandiri dan sejahtera di Kecamatan Way Kandis. Dengan potensi alam yang 
                melimpah dan masyarakat yang gotong royong, desa ini terus berkembang hingga 
                menjadi desa wisata yang menarik bagi pengunjung.
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
                "Mewujudkan Desa Fajar Baru sebagai desa yang mandiri, sejahtera, dan berdaya 
                saing dengan tetap melestarikan nilai-nilai budaya dan lingkungan hidup"
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
                  Meningkatkan kualitas pelayanan publik yang profesional dan transparan
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-village-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Mengembangkan potensi ekonomi desa melalui UMKM dan pariwisata
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-village-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Membangun infrastruktur desa yang mendukung kesejahteraan masyarakat
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-village-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Melestarikan budaya lokal dan menjaga kelestarian lingkungan
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

          {/* Geographic Information */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Letak Geografis</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Koordinat:</span>
                  <span>5°22'S, 105°16'E</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Ketinggian:</span>
                  <span>45-120 mdpl</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Iklim:</span>
                  <span>Tropis</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Curah Hujan:</span>
                  <span>2.500 mm/tahun</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Suhu Rata-rata:</span>
                  <span>26-32°C</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Batas Wilayah</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Utara:</span>
                  <span>Desa Sukarame</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Selatan:</span>
                  <span>Desa Sukamaju</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Timur:</span>
                  <span>Desa Way Kandis</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Barat:</span>
                  <span>Hutan Lindung</span>
                </div>
              </div>
              <Link to="/village-map">
                <Button className="w-full mt-6 bg-gradient-village hover:opacity-90">
                  <MapPin size={16} className="mr-2" />
                  Lihat Peta Desa
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
