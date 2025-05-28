
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import NewsArticleDetail from '@/components/NewsArticleDetail';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Eye, ArrowRight, Clock, Share2 } from 'lucide-react';
import Footer from '@/components/Footer';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const categories = ['Semua', 'Pemerintahan', 'Kegiatan', 'Pembangunan', 'UMKM', 'Sosial'];

  const newsItems = [
    {
      id: 1,
      title: 'Pembangunan Jalan Utama Desa Fase II Dimulai',
      category: 'Pembangunan',
      excerpt: 'Pemerintah Desa Fajar Baru memulai pembangunan jalan utama fase kedua dengan anggaran Rp 500 juta untuk meningkatkan aksesibilitas...',
      content: 'Pembangunan jalan utama Desa Fajar Baru fase kedua resmi dimulai hari ini dengan total anggaran sebesar Rp 500 juta. Proyek ini merupakan kelanjutan dari fase pertama yang telah berhasil diselesaikan tahun lalu. Kepala Desa menyatakan bahwa pembangunan ini bertujuan untuk meningkatkan aksesibilitas dan mobilitas masyarakat, terutama untuk menghubungkan area pertanian dengan pusat desa. Pekerjaan meliputi pelebaran jalan, perbaikan drainase, dan pemasangan penerangan jalan. Diharapkan proyek ini dapat selesai dalam waktu 6 bulan ke depan.',
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
      content: 'Pelatihan digital marketing untuk pelaku UMKM Desa Fajar Baru telah sukses digelar dengan dihadiri 50 peserta. Pelatihan ini bertujuan untuk meningkatkan kemampuan pemasaran digital para pelaku usaha lokal. Materi yang disampaikan meliputi strategi media sosial, pembuatan konten yang menarik, dan teknik penjualan online. Para peserta sangat antusias dan berharap dapat menerapkan ilmu yang didapat untuk mengembangkan usaha mereka.',
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
      content: 'Musyawarah Desa untuk pembahasan APBDes 2024 telah dilaksanakan dengan melibatkan seluruh elemen masyarakat. Dalam pertemuan ini, dibahas alokasi anggaran untuk berbagai program pembangunan, termasuk infrastruktur, pendidikan, kesehatan, dan pemberdayaan masyarakat. Total anggaran yang direncanakan mencapai Rp 2,5 miliar dengan fokus utama pada peningkatan kualitas jalan desa dan fasilitas umum.',
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
      content: 'Festival Budaya Way Kandis 2024 telah sukses digelar dengan meriah dan dihadiri ribuan pengunjung dari berbagai daerah. Acara ini menampilkan berbagai pertunjukan seni tradisional Lampung, pameran produk UMKM lokal, dan lomba-lomba budaya. Festival ini tidak hanya menjadi ajang hiburan, tetapi juga sarana untuk melestarikan budaya lokal dan memperkenalkan potensi wisata Desa Fajar Baru kepada masyarakat luas.',
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
      content: 'Program bantuan sosial tunai untuk 150 keluarga penerima manfaat telah resmi disalurkan. Program ini merupakan bagian dari upaya pemerintah desa dalam pemulihan ekonomi masyarakat pasca pandemi. Setiap keluarga menerima bantuan sebesar Rp 300.000 per bulan selama 3 bulan. Penyaluran dilakukan secara transparan dengan melibatkan RT/RW setempat untuk memastikan tepat sasaran.',
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
      content: 'Kegiatan vaksinasi dosis booster COVID-19 telah berlangsung lancar di Balai Desa dengan target 200 warga per hari. Program ini dilaksanakan selama 5 hari berturut-turut dengan didukung tenaga medis dari Puskesmas setempat. Antusiasme masyarakat sangat tinggi, terbukti dari target yang tercapai 100%. Kegiatan ini merupakan bagian dari upaya pemerintah desa dalam menjaga kesehatan masyarakat dan mencegah penyebaran COVID-19.',
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

  const handleReadMore = (article: any) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Article Detail Modal */}
      {selectedArticle && (
        <NewsArticleDetail 
          article={selectedArticle} 
          onClose={handleCloseArticle} 
        />
      )}
      
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
                    <Button 
                      className="bg-gradient-village hover:opacity-90"
                      onClick={() => handleReadMore(filteredNews[0])}
                    >
                      Baca Selengkapnya <ArrowRight size={16} className="ml-2" />
                    </Button>
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
                    <span className="bg-village-green text-white px-3 py-1 rounded-full text-xs font-medium">
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-village-green text-village-green hover:bg-village-green hover:text-white flex-shrink-0"
                      onClick={() => handleReadMore(item)}
                    >
                      Baca
                    </Button>
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
