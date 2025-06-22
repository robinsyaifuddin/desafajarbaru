
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Eye, ArrowRight, Clock } from 'lucide-react';
import Footer from '@/components/Footer';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Pemerintahan', 'Kegiatan', 'Pembangunan', 'UMKM', 'Sosial'];

  const newsItems = [
    {
      id: 1,
      title: 'Desa Fajar Baru Raih Status Desa Maju dengan IDM 0.7578',
      category: 'Pemerintahan',
      excerpt: 'Dalam Musyawarah Desa 2024, Desa Fajar Baru berhasil meraih status Desa Maju dengan Indeks Desa Membangun (IDM) 0.7578 dari Kementerian Desa RI...',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80',
      date: '25 Januari 2024',
      author: 'M. Agus Budiantoro',
      views: 245,
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'BUMDes Madani Kembangkan Program Hidroponik dengan Dana 296 Juta',
      category: 'UMKM',
      excerpt: 'Dana desa dialokasikan 20% untuk ketahanan pangan melalui pengembangan BUMDes Madani yang fokus pada sektor hidroponik, pembibitan, dan kemitraan jual gabah...',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80',
      date: '23 Januari 2024',
      author: 'Tim BUMDes',
      views: 189,
      readTime: '4 min'
    },
    {
      id: 3,
      title: 'Pembangunan Masjid As-Safinatu Al-Abbas Dimulai',
      category: 'Kegiatan',
      excerpt: 'Peletakan batu pertama Masjid As-Safinatu Al-Abbas dilaksanakan pada 31 Maret 2023 dengan wakaf tanah 600 m² dan dana awal Rp 120 juta...',
      image: 'https://images.unsplash.com/photo-1564769625392-651b2abd5e37?auto=format&fit=crop&w=600&q=80',
      date: '20 Januari 2024',
      author: 'Panitia Pembangunan',
      views: 312,
      readTime: '5 min'
    },
    {
      id: 4,
      title: 'Program BLT-DD Disalurkan untuk 145 KK',
      category: 'Sosial',
      excerpt: 'Bantuan Langsung Tunai Dana Desa (BLT-DD) tahun 2023 telah disalurkan kepada 145 Kepala Keluarga dengan total bantuan Rp 87 juta...',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80',
      date: '18 Januari 2024',
      author: 'Tim PKH Desa',
      views: 467,
      readTime: '3 min'
    },
    {
      id: 5,
      title: 'Pembangunan Infrastruktur Jalan Desa Tahap II',
      category: 'Pembangunan',
      excerpt: 'Melalui Musrenbang Desa, pembangunan jalan desa dan lingkungan di semua dusun memasuki tahap kedua dengan fokus pada jalan tani...',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
      date: '15 Januari 2024',
      author: 'Tim Pembangunan',
      views: 523,
      readTime: '6 min'
    },
    {
      id: 6,
      title: 'Kampung Pengawasan Partisipatif Pilkada 2024',
      category: 'Pemerintahan',
      excerpt: 'Desa Fajar Baru terpilih sebagai ikon Kampung Pengawasan Partisipatif dalam Pilkada 2024 oleh Bawaslu Lampung Selatan...',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
      date: '12 Januari 2024',
      author: 'Bawaslu Lamsel',
      views: 178,
      readTime: '4 min'
    }
  ];

  const filteredNews = selectedCategory === 'Semua' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Pembangunan': 'bg-blue-100 text-blue-800',
      'UMKM': 'bg-green-100 text-green-800',
      'Pemerintahan': 'bg-purple-100 text-purple-800',
      'Kegiatan': 'bg-yellow-100 text-yellow-800',
      'Sosial': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Berita Desa Fajar Baru
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Informasi terkini seputar kegiatan, pembangunan, dan perkembangan 
              terbaru di Desa Fajar Baru, Jati Agung, Lampung Selatan
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-village hover:opacity-90" 
                  : "hover:bg-village-green hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured News */}
          {filteredNews.length > 0 && (
            <Card className="mb-12 overflow-hidden animate-fade-in hover:shadow-xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-96">
                  <img 
                    src={filteredNews[0].image} 
                    alt={filteredNews[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-village-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(filteredNews[0].category)}`}>
                      {filteredNews[0].category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{filteredNews[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{filteredNews[0].readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 line-clamp-2">
                    {filteredNews[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {filteredNews[0].excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{filteredNews[0].author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{filteredNews[0].views} views</span>
                      </div>
                    </div>
                    <Link to={`/news/${filteredNews[0].id}`}>
                      <Button className="bg-gradient-village hover:opacity-90">
                        Baca Selengkapnya <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* News Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.slice(1).map((item, index) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User size={12} />
                        <span className="truncate max-w-20">{item.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={12} />
                        <span>{item.views}</span>
                      </div>
                    </div>
                    <Link to={`/news/${item.id}`}>
                      <Button 
                        size="sm" 
                        className="bg-village-green hover:bg-village-green/90 text-white"
                      >
                        Baca
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Section */}
          <Card className="mt-12 p-6 lg:p-8 bg-gradient-to-r from-village-green to-village-blue text-white text-center">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Dapatkan Update Terbaru</h3>
            <p className="mb-6 opacity-90 text-sm lg:text-base">
              Berlangganan newsletter untuk mendapatkan informasi terkini tentang kegiatan dan program desa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 text-sm"
              />
              <Button variant="secondary" className="px-6 flex-shrink-0">
                Berlangganan
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
