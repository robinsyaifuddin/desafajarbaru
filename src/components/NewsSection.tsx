
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ChevronRight } from 'lucide-react';

const NewsSection = () => {
  const featuredNews = {
    id: 1,
    title: 'Desa Fajar Baru Raih Penghargaan Desa Digital Terbaik 2024',
    excerpt: 'Dalam ajang kompetisi tingkat provinsi, Desa Fajar Baru berhasil meraih penghargaan sebagai desa dengan implementasi teknologi digital terbaik untuk pelayanan masyarakat.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    date: '15 Januari 2024',
    author: 'Admin Desa',
    category: 'Prestasi'
  };

  const latestNews = [
    {
      id: 2,
      title: 'Pembukaan Festival Wisata Alam Way Kandis 2024',
      excerpt: 'Festival tahunan yang menampilkan keindahan alam dan budaya lokal Desa Fajar Baru.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80',
      date: '12 Januari 2024',
      category: 'Wisata'
    },
    {
      id: 3,
      title: 'Program Bantuan UMKM Senilai 500 Juta Rupiah',
      excerpt: 'Pemerintah desa mengalokasikan dana untuk pengembangan usaha mikro kecil menengah.',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80',
      date: '10 Januari 2024',
      category: 'Ekonomi'
    },
    {
      id: 4,
      title: 'Gotong Royong Pembersihan Sungai Way Kandis',
      excerpt: 'Kegiatan bersama masyarakat untuk menjaga kelestarian lingkungan sungai utama desa.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80',
      date: '8 Januari 2024',
      category: 'Lingkungan'
    },
    {
      id: 5,
      title: 'Pelatihan Digital Marketing untuk Pelaku UMKM',
      excerpt: 'Workshop peningkatan kapasitas pelaku usaha dalam memasarkan produk secara digital.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80',
      date: '5 Januari 2024',
      category: 'Pelatihan'
    }
  ];

  const categories = ['Semua', 'Prestasi', 'Wisata', 'Ekonomi', 'Lingkungan', 'Pelatihan'];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Prestasi': 'bg-yellow-100 text-yellow-800',
      'Wisata': 'bg-green-100 text-green-800',
      'Ekonomi': 'bg-blue-100 text-blue-800',
      'Lingkungan': 'bg-green-100 text-green-800',
      'Pelatihan': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Berita Terkini
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ikuti perkembangan terbaru dan informasi penting seputar kegiatan 
            dan program pembangunan di Desa Fajar Baru.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Link key={index} to="/news">
              <Button
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-gradient-village hover:opacity-90" : "hover:bg-village-green hover:text-white"}
              >
                {category}
              </Button>
            </Link>
          ))}
        </div>

        {/* Featured News */}
        <Card className="overflow-hidden mb-12 hover:shadow-xl transition-shadow duration-300">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto">
              <img 
                src={featuredNews.image} 
                alt={featuredNews.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredNews.category)}`}>
                  {featuredNews.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                {featuredNews.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredNews.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Calendar size={16} className="mr-2" />
                <span className="mr-4">{featuredNews.date}</span>
                <User size={16} className="mr-2" />
                <span>{featuredNews.author}</span>
              </div>
              <Link to={`/news/${featuredNews.id}`}>
                <Button className="bg-gradient-village hover:opacity-90 text-white self-start">
                  Baca Selengkapnya <ChevronRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Latest Stories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Berita Terbaru</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.map((news, index) => (
              <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(news.category)}`}>
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Calendar size={12} className="mr-1" />
                    <span>{news.date}</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Link to={`/news/${news.id}`}>
                    <Button variant="ghost" size="sm" className="text-village-green hover:text-village-green hover:bg-green-50 p-0">
                      Baca lebih lanjut <ChevronRight size={14} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <Card className="p-8 bg-gradient-to-r from-village-green to-village-blue text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Dapatkan Update Terbaru</h3>
          <p className="mb-6 opacity-90">
            Berlangganan newsletter untuk mendapatkan informasi terkini tentang kegiatan dan program desa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-2 rounded-lg text-gray-800"
            />
            <Button variant="secondary" className="px-6">
              Berlangganan
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default NewsSection;
