
import React, { useState } from 'react';
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
      readTime: '3 min'
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Berita Desa Fajar Baru
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
            <Card className="mb-12 overflow-hidden animate-fade-in">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={filteredNews[0].image} 
                    alt={filteredNews[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-village-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-village-blue text-white px-3 py-1 rounded-full text-xs">
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {filteredNews[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {filteredNews[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
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
                    <Button className="bg-gradient-village hover:opacity-90">
                      Baca Selengkapnya <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.slice(1).map((item, index) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-village-green text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
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
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={12} />
                        <span>{item.views}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-village-green text-village-green hover:bg-village-green hover:text-white">
                      Baca
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
