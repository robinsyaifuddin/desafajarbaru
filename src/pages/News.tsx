
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
      title: 'Pembangunan Jalan Utama Desa Fase II Dimulai',
      category: 'Pembangunan',
      excerpt: 'Pemerintah Desa Fajar Baru memulai pembangunan jalan utama fase kedua dengan anggaran Rp 500 juta untuk meningkatkan aksesibilitas...',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      date: '25 Januari 2024',
      author: 'Admin Desa',
      views: 245,
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Pelatihan UMKM Digital Marketing Sukses Digelar',
      category: 'UMKM',
      excerpt: 'Sebanyak 50 pelaku UMKM mengikuti pelatihan digital marketing yang diselenggarakan oleh Dinas Koperasi dan UMKM Kota Bandar Lampung...',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80',
      date: '23 Januari 2024',
      author: 'Humas Desa',
      views: 189,
      readTime: '4 min'
    },
    {
      id: 3,
      title: 'Musyawarah Desa Membahas APBDes 2024',
      category: 'Pemerintahan',
      excerpt: 'Kepala Desa bersama BPD dan tokoh masyarakat membahas Anggaran Pendapatan dan Belanja Desa tahun 2024 dengan fokus pembangunan infrastruktur...',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
      date: '20 Januari 2024',
      author: 'Sekretaris Desa',
      views: 312,
      readTime: '5 min'
    },
    {
      id: 4,
      title: 'Festival Budaya Way Kandis Meriah Digelar',
      category: 'Kegiatan',
      excerpt: 'Festival budaya tahunan Way Kandis sukses digelar dengan berbagai pertunjukan seni tradisional dan pameran produk lokal...',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
      date: '18 Januari 2024',
      author: 'Karang Taruna',
      views: 467,
      readTime: '3 min'
    },
    {
      id: 5,
      title: 'Program Bantuan Sosial Tunai Disalurkan',
      category: 'Sosial',
      excerpt: 'Penyaluran bantuan sosial tunai kepada 150 keluarga penerima manfaat sebagai upaya pemulihan ekonomi pasca pandemi...',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
      date: '15 Januari 2024',
      author: 'Tim PKH',
      views: 523,
      readTime: '2 min'
    },
    {
      id: 6,
      title: 'Vaksinasi COVID-19 Dosis Booster Berlangsung',
      category: 'Sosial',
      excerpt: 'Kegiatan vaksinasi dosis booster COVID-19 diselenggarakan di Balai Desa dengan target 200 warga per hari...',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
      date: '12 Januari 2024',
      author: 'Puskesmas',
      views: 178,
      readTime: '2 min'
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
              terbaru di Desa Fajar Baru Way Kandis
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
                <div className="relative">
                  <img 
                    src={filteredNews[0].image} 
                    alt={filteredNews[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-village-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
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
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
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
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 lg:p-6">
                  <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
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
                        variant="outline" 
                        size="sm" 
                        className="border-village-green text-village-green hover:bg-village-green hover:text-white flex-shrink-0"
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
