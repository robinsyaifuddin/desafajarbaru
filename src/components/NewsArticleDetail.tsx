
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, User, Eye, Clock, Share2, MessageCircle, Heart, Facebook, Twitter, Linkedin, Link as LinkIcon, X } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
}

interface NewsArticle {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  views: number;
  readTime: string;
}

interface NewsArticleDetailProps {
  article: NewsArticle;
  onClose: () => void;
}

const NewsArticleDetail: React.FC<NewsArticleDetailProps> = ({ article, onClose }) => {
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

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={onClose}>
              <X size={16} />
            </Button>
            <span className="bg-village-green text-white px-3 py-1 rounded-full text-sm">
              {article.category}
            </span>
          </div>
          <div className="relative">
            <Button 
              variant="outline" 
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

        {/* Article Content */}
        <div className="p-6">
          {/* Article Image */}
          <div className="relative mb-6">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
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

          {/* Article Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {article.title}
          </h1>

          {/* Article Content */}
          <div className="prose max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="text-lg font-medium mb-4">{article.excerpt}</p>
            <div className="space-y-4">
              <p>{article.content}</p>
              <p>
                Program ini merupakan bagian dari komitmen pemerintah desa untuk terus meningkatkan 
                kualitas hidup masyarakat melalui berbagai inovasi dan pembangunan yang berkelanjutan. 
                Dengan dukungan penuh dari seluruh elemen masyarakat, diharapkan program-program 
                unggulan ini dapat memberikan dampak positif yang signifikan bagi kemajuan Desa Fajar Baru.
              </p>
              <p>
                Kepala Desa menambahkan bahwa transparansi dan akuntabilitas dalam setiap program 
                pembangunan menjadi prioritas utama. Masyarakat diundang untuk aktif berpartisipasi 
                dan memberikan masukan konstruktif untuk perbaikan berkelanjutan.
              </p>
              <p>
                Untuk informasi lebih lanjut mengenai program-program desa, masyarakat dapat 
                menghubungi kantor desa atau mengakses website resmi desa. Mari bersama-sama 
                membangun Desa Fajar Baru yang lebih maju dan sejahtera.
              </p>
            </div>
          </div>

          {/* Comments Section */}
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageCircle size={20} />
              Komentar ({comments.length})
            </h3>

            {/* Add Comment */}
            <div className="mb-6">
              <Textarea
                placeholder="Tulis komentar Anda..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-3"
                rows={3}
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
            <div className="space-y-4">
              {comments.map((comment) => (
                <Card key={comment.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-village-green text-white rounded-full flex items-center justify-center font-semibold">
                      {comment.author.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-gray-800">{comment.author}</span>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{comment.content}</p>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-village-green">
                        <Heart size={14} className="mr-1" />
                        {comment.likes}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NewsArticleDetail;
