
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
      content: 'Terima kasih atas informasinya yang sangat bermanfaat. Semoga program ini dapat berjalan dengan lancar.',
      date: '2 jam yang lalu',
      likes: 5
    },
    {
      id: 2,
      author: 'Siti Nurhaliza',
      content: 'Sangat bangga dengan perkembangan desa kita. Mari kita dukung semua program pembangunan.',
      date: '5 jam yang lalu',
      likes: 3
    }
  ]);
  const [newComment, setNewComment] = useState('');
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Sample news data - in a real app, this would come from an API
  const newsItems = {
    1: {
      id: 1,
      title: 'Pembangunan Jalan Utama Desa Fase II Dimulai',
      category: 'Pembangunan',
      excerpt: 'Pemerintah Desa Fajar Baru memulai pembangunan jalan utama fase kedua dengan anggaran Rp 500 juta untuk meningkatkan aksesibilitas...',
      content: `
        <p>Pembangunan jalan utama Desa Fajar Baru fase kedua resmi dimulai hari ini dengan total anggaran sebesar Rp 500 juta. Proyek ini merupakan kelanjutan dari fase pertama yang telah berhasil diselesaikan tahun lalu.</p>
        
        <p>Kepala Desa menyatakan bahwa pembangunan ini bertujuan untuk meningkatkan aksesibilitas dan mobilitas masyarakat, terutama untuk menghubungkan area pertanian dengan pusat desa. "Dengan adanya jalan yang baik, diharapkan dapat memperlancar distribusi hasil pertanian dan meningkatkan perekonomian masyarakat," ujar Kepala Desa.</p>
        
        <p>Pekerjaan meliputi pelebaran jalan dari 4 meter menjadi 6 meter, perbaikan sistem drainase sepanjang 2 kilometer, dan pemasangan penerangan jalan LED yang hemat energi. Seluruh material yang digunakan dipastikan berkualitas tinggi untuk memastikan daya tahan jalan dalam jangka panjang.</p>
        
        <p>Tim konstruksi yang terdiri dari 25 pekerja telah dimobilisasi dan akan bekerja secara bertahap untuk meminimalisir gangguan terhadap aktivitas masyarakat sehari-hari. Jadwal kerja diatur dari pukul 07.00 hingga 16.00 WIB untuk menghindari jam sibuk.</p>
        
        <p>Proyek ini diharapkan dapat selesai dalam waktu 6 bulan ke depan, tepatnya pada bulan Juli 2024. Masyarakat diminta untuk bersabar dan mendukung kelancaran pembangunan demi kemajuan bersama.</p>
        
        <p>Selain pembangunan jalan, pemerintah desa juga merencanakan pembangunan jembatan penghubung di area sungai Way Kandis yang akan dimulai setelah proyek jalan selesai. Hal ini merupakan bagian dari rencana pembangunan infrastruktur jangka panjang Desa Fajar Baru.</p>
      `,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      date: '25 Januari 2024',
      author: 'Admin Desa',
      views: 245,
      readTime: '5 min'
    },
    2: {
      id: 2,
      title: 'Pelatihan UMKM Digital Marketing Sukses Digelar',
      category: 'UMKM',
      excerpt: 'Sebanyak 50 pelaku UMKM mengikuti pelatihan digital marketing yang diselenggarakan oleh Dinas Koperasi dan UMKM Kota Bandar Lampung...',
      content: `
        <p>Pelatihan digital marketing untuk pelaku UMKM Desa Fajar Baru telah sukses digelar dengan dihadiri 50 peserta dari berbagai sektor usaha. Kegiatan yang berlangsung selama 3 hari ini bertujuan untuk meningkatkan kemampuan pemasaran digital para pelaku usaha lokal.</p>
        
        <p>Materi pelatihan meliputi strategi media sosial, pembuatan konten yang menarik, teknik penjualan online, dan analisis pasar digital. Para peserta juga mendapat kesempatan praktik langsung membuat akun bisnis di berbagai platform media sosial.</p>
        
        <p>"Pelatihan ini sangat bermanfaat bagi kami para pelaku UMKM. Sekarang kami lebih paham bagaimana cara memasarkan produk secara online dan menjangkau lebih banyak pelanggan," ujar Ibu Sari, salah satu peserta yang memiliki usaha keripik pisang.</p>
        
        <p>Narasumber pelatihan adalah praktisi digital marketing berpengalaman dari Jakarta yang telah membantu ratusan UMKM mengembangkan bisnis mereka. Pelatihan ini juga didukung penuh oleh Dinas Koperasi dan UMKM Kota Bandar Lampung.</p>
        
        <p>Sebagai tindak lanjut, akan dibentuk komunitas digital marketing UMKM Desa Fajar Baru untuk saling berbagi pengalaman dan tips. Pemerintah desa juga berkomitmen memberikan pendampingan berkelanjutan untuk memastikan implementasi ilmu yang telah didapat.</p>
      `,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80',
      date: '23 Januari 2024',
      author: 'Humas Desa',
      views: 189,
      readTime: '4 min'
    }
  };

  const article = newsItems[parseInt(id || '1')] || newsItems[1];

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: 'Pengguna',
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
            <div className="prose max-w-none">
              <p className="text-lg font-medium text-gray-700 mb-6 leading-relaxed">
                {article.excerpt}
              </p>
              <div 
                className="text-gray-700 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </Card>

          {/* Comments Section */}
          <Card className="p-6 md:p-8">
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetail;
