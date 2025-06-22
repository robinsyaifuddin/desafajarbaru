
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, User, Eye, Clock, Share2, MessageCircle, Heart, Facebook, Twitter, Linkedin, Link as LinkIcon, ArrowLeft } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
}

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Ahmad Ridwan',
      content: 'Alhamdulillah, sangat bangga dengan prestasi Desa Fajar Baru. Semoga terus maju dan berkembang untuk kesejahteraan masyarakat.',
      date: '2 jam yang lalu',
      likes: 12
    },
    {
      id: 2,
      author: 'Siti Nurhaliza',
      content: 'Program BUMDes Madani sangat bagus untuk ketahanan pangan. Mari kita dukung program-program desa untuk kemajuan bersama.',
      date: '5 jam yang lalu',
      likes: 8
    },
    {
      id: 3,
      author: 'Budi Santoso',
      content: 'Terima kasih kepada Kepala Desa dan jajarannya yang telah bekerja keras. Mudah-mudahan semua program dapat terlaksana dengan baik.',
      date: '1 hari yang lalu',
      likes: 15
    }
  ]);
  const [newComment, setNewComment] = useState('');
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Sample news data with detailed content
  const newsItems = {
    1: {
      id: 1,
      title: 'Desa Fajar Baru Raih Status Desa Maju dengan IDM 0.7578',
      category: 'Pemerintahan',
      excerpt: 'Dalam Musyawarah Desa 2024, Desa Fajar Baru berhasil meraih status Desa Maju dengan Indeks Desa Membangun (IDM) 0.7578 dari Kementerian Desa RI.',
      content: `
        <div class="prose max-w-none">
          <p class="text-lg font-medium mb-6">Pencapaian luar biasa telah diraih oleh Desa Fajar Baru, Kecamatan Jati Agung, Lampung Selatan. Dalam Musyawarah Desa yang digelar pada tahun 2024, desa yang dipimpin oleh M. Agus Budiantoro, S.HI, MH ini berhasil meraih status "Desa Maju" dengan Indeks Desa Membangun (IDM) sebesar 0.7578.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Indeks Desa Membangun (IDM)</h3>
          <p class="mb-4">Indeks Desa Membangun (IDM) merupakan indeks komposit yang menggambarkan tingkat perkembangan desa berdasarkan tiga dimensi utama: Dimensi Sosial, Dimensi Ekonomi, dan Dimensi Ekologi/Lingkungan. Dengan skor 0.7578, Desa Fajar Baru berhasil masuk dalam kategori "Desa Maju" yang menunjukkan pencapaian signifikan dalam berbagai aspek pembangunan desa.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Faktor Pendukung Keberhasilan</h3>
          <p class="mb-4">Keberhasilan ini tidak lepas dari berbagai program pembangunan yang telah dilaksanakan secara konsisten, meliputi:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Pembangunan infrastruktur jalan desa dan lingkungan di semua dusun</li>
            <li>Pengembangan BUMDes "Madani" dengan fokus pada ketahanan pangan</li>
            <li>Program bantuan sosial yang tepsasaran</li>
            <li>Peningkatan partisipasi masyarakat dalam pembangunan</li>
            <li>Penguatan tata kelola pemerintahan desa yang transparan</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Komitmen Kepemimpinan</h3>
          <p class="mb-4">Kepala Desa M. Agus Budiantoro yang menjabat periode 2019-2027 menyatakan bahwa pencapaian ini merupakan hasil kerja keras seluruh elemen masyarakat. "Status Desa Maju ini bukan hanya prestasi, tetapi juga tanggung jawab untuk terus meningkatkan kualitas hidup masyarakat," ujarnya.</p>
          
          <p class="mb-4">Beliau yang juga menjabat sebagai Sekretaris APDESI Provinsi Lampung periode 2023-2028 menambahkan bahwa berbagai penghargaan yang telah diraih desa, termasuk reward kinerja 3 tahun berturut-turut dari Kementerian Desa RI, menjadi motivasi untuk terus berinovasi dalam pembangunan desa.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Rencana Pembangunan Berkelanjutan</h3>
          <p class="mb-4">Dengan status Desa Maju yang telah diraih, Desa Fajar Baru berkomitmen untuk terus melanjutkan program-program pembangunan berkelanjutan. Fokus utama untuk periode mendatang meliputi:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Percepatan penurunan stunting melalui program ketahanan pangan</li>
            <li>Pengembangan sektor pariwisata dan ekonomi kreatif</li>
            <li>Peningkatan kualitas sumber daya manusia</li>
            <li>Penguatan kelembagaan desa</li>
            <li>Pembangunan infrastruktur yang ramah lingkungan</li>
          </ul>
          
          <p class="mt-6">Pencapaian status Desa Maju dengan IDM 0.7578 ini diharapkan dapat menjadi inspirasi bagi desa-desa lain di Kabupaten Lampung Selatan untuk terus berkomitmen dalam pembangunan yang berkelanjutan dan berpusat pada kesejahteraan masyarakat.</p>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
      date: '25 Januari 2024',
      author: 'M. Agus Budiantoro',
      views: 245,
      readTime: '8 min'
    },
    2: {
      id: 2,
      title: 'BUMDes Madani Kembangkan Program Hidroponik dengan Dana 296 Juta',
      category: 'UMKM',
      excerpt: 'Dana desa dialokasikan 20% untuk ketahanan pangan melalui pengembangan BUMDes Madani yang fokus pada sektor hidroponik, pembibitan, dan kemitraan jual gabah.',
      content: `
        <div class="prose max-w-none">
          <p class="text-lg font-medium mb-6">Badan Usaha Milik Desa (BUMDes) "Madani" Desa Fajar Baru kembali menunjukkan komitmennya dalam mendukung ketahanan pangan melalui program inovatif hidroponik. Dengan alokasi dana sebesar Rp 296 juta dari dana desa, program ini diharapkan dapat meningkatkan produktivitas pertanian dan kesejahteraan masyarakat.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Alokasi Dana untuk Ketahanan Pangan</h3>
          <p class="mb-4">Sesuai dengan kebijakan pemerintah desa, 20% dari total dana desa dialokasikan khusus untuk program ketahanan pangan. Dana sebesar Rp 296 juta ini akan digunakan untuk:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Pengembangan sistem hidroponik modern</li>
            <li>Program pembibitan tanaman hortikultura</li>
            <li>Kemitraan jual beli gabah dengan petani lokal</li>
            <li>Pelatihan dan pendampingan teknologi pertanian</li>
            <li>Pengadaan peralatan dan sarana produksi</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Program Hidroponik Unggulan</h3>
          <p class="mb-4">Program hidroponik yang dikembangkan BUMDes Madani merupakan terobosan dalam bidang pertanian modern. Sistem ini memiliki beberapa keunggulan:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Penggunaan air yang lebih efisien</li>
            <li>Produktivitas yang lebih tinggi dalam lahan terbatas</li>
            <li>Kualitas hasil panen yang lebih baik</li>
            <li>Dapat dilakukan sepanjang tahun</li>
            <li>Ramah lingkungan dan berkelanjutan</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Kemitraan dengan Petani Lokal</h3>
          <p class="mb-4">Selain program hidroponik, BUMDes Madani juga mengembangkan kemitraan strategis dengan petani lokal melalui program jual beli gabah. Program ini bertujuan untuk:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Memberikan kepastian pasar bagi petani</li>
            <li>Menstabilkan harga gabah di tingkat petani</li>
            <li>Meningkatkan nilai tambah produk pertanian</li>
            <li>Memperkuat rantai pasok pangan lokal</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Dampak Ekonomi dan Sosial</h3>
          <p class="mb-4">Program BUMDes Madani ini diharapkan memberikan dampak positif yang signifikan, antara lain:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Peningkatan pendapatan masyarakat</li>
            <li>Penciptaan lapangan kerja baru</li>
            <li>Transfer teknologi kepada masyarakat</li>
            <li>Peningkatan ketersediaan pangan lokal</li>
            <li>Penguatan ekonomi desa secara keseluruhan</li>
          </ul>
          
          <p class="mt-6">Dengan komitmen yang kuat dari pemerintah desa dan partisipasi aktif masyarakat, BUMDes Madani optimis dapat mencapai target yang telah ditetapkan dan berkontribusi nyata dalam mewujudkan ketahanan pangan di Desa Fajar Baru.</p>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80',
      date: '23 Januari 2024',
      author: 'Tim BUMDes',
      views: 189,
      readTime: '6 min'
    }
  };

  // Get article or default to first one
  const article = newsItems[parseInt(id || '1')] || newsItems[1];

  // Related news (exclude current article)
  const relatedNews = Object.values(newsItems).filter(item => item.id !== article.id).slice(0, 3);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: 'Pengguna Anonim',
        content: newComment,
        date: 'Baru saja',
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `${article.title} - ${article.excerpt}`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link berhasil disalin!');
        break;
    }
    setShowShareMenu(false);
  };

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
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => navigate('/news')}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Kembali ke Berita
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <div className="relative">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2"
                >
                  <Share2 size={16} />
                  Bagikan
                </Button>
                {showShareMenu && (
                  <div className="absolute right-0 top-12 bg-white border rounded-lg shadow-lg p-2 z-10 min-w-48">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('facebook')}
                      className="w-full justify-start"
                    >
                      <Facebook size={16} className="mr-2" />
                      Facebook
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('twitter')}
                      className="w-full justify-start"
                    >
                      <Twitter size={16} className="mr-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('linkedin')}
                      className="w-full justify-start"
                    >
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('copy')}
                      className="w-full justify-start"
                    >
                      <LinkIcon size={16} className="mr-2" />
                      Salin Link
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye size={14} />
                <span>{article.views} views</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Image */}
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <Card className="p-6 md:p-8 mb-8">
            <div 
              className="prose max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </Card>

          {/* Comments Section */}
          <Card className="p-6 md:p-8 mb-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2">
              <MessageCircle size={20} />
              Komentar ({comments.length})
            </h3>

            {/* Add Comment */}
            <div className="mb-8">
              <Textarea
                placeholder="Tulis komentar Anda..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-4"
                rows={4}
              />
              <Button 
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="bg-gradient-village hover:opacity-90"
              >
                Kirim Komentar
              </Button>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <Card key={comment.id} className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-village-green text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                      {comment.author.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-medium text-gray-800">{comment.author}</span>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700 mb-3 break-words">{comment.content}</p>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-village-green">
                        <Heart size={14} className="mr-1" />
                        {comment.likes}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Related News */}
          <Card className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Berita Terkait</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((news) => (
                <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 left-2">
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
                    <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm">
                      {news.title}
                    </h4>
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                      {news.excerpt}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full text-xs"
                      onClick={() => navigate(`/news/${news.id}`)}
                    >
                      Baca Artikel
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetail;
