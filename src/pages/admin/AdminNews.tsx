
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';

const AdminNews = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const newsArticles = [
    {
      id: 1,
      title: 'Peluncuran Program Smart Village',
      excerpt: 'Desa Fajar Baru resmi meluncurkan program Smart Village...',
      author: 'Admin',
      date: '2024-06-10',
      status: 'Published',
      views: 234,
    },
    {
      id: 2,
      title: 'Gotong Royong Pembersihan Lingkungan',
      excerpt: 'Warga Desa Fajar Baru mengadakan gotong royong...',
      author: 'Admin',
      date: '2024-06-08',
      status: 'Published',
      views: 156,
    },
    {
      id: 3,
      title: 'Pelatihan Digital untuk UMKM',
      excerpt: 'Program pelatihan digital untuk pelaku UMKM...',
      author: 'Admin',
      date: '2024-06-05',
      status: 'Draft',
      views: 0,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Kelola Berita</h2>
          <p className="text-gray-600">Kelola artikel berita dan pengumuman desa</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
          <Plus size={20} className="mr-2" />
          Tambah Berita
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Cari berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Judul</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Penulis</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Tanggal</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Views</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {newsArticles.map((article) => (
                <tr key={article.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <h4 className="font-medium text-gray-800">{article.title}</h4>
                      <p className="text-sm text-gray-600 truncate max-w-xs">{article.excerpt}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{article.author}</td>
                  <td className="py-4 px-4 text-gray-600">{article.date}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      article.status === 'Published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {article.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{article.views}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminNews;
