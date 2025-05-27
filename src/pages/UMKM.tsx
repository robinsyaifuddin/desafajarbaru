
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, MapPin, Phone, ChevronRight, Package, TrendingUp } from 'lucide-react';
import Footer from '@/components/Footer';

const UMKM = () => {
  const umkmProducts = [
    {
      id: 1,
      name: 'Kerupuk Ikan Patin',
      owner: 'Ibu Sari Wulandari',
      category: 'Makanan',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      description: 'Kerupuk ikan patin asli dengan resep turun temurun, renyah dan gurih',
      phone: '08123456789',
      location: 'RW 03'
    },
    {
      id: 2,
      name: 'Kopi Robusta Way Kandis',
      owner: 'Bapak Ahmad Fauzi',
      category: 'Minuman',
      price: 'Rp 45.000',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      description: 'Kopi robusta premium dari kebun sendiri dengan cita rasa khas Lampung',
      phone: '08123456790',
      location: 'RW 05'
    },
    {
      id: 3,
      name: 'Tas Anyaman Pandan',
      owner: 'Ibu Dewi Sartika',
      category: 'Kerajinan',
      price: 'Rp 75.000',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      description: 'Tas anyaman pandan berkualitas tinggi dengan motif tradisional Lampung',
      phone: '08123456791',
      location: 'RW 02'
    },
    {
      id: 4,
      name: 'Dodol Durian',
      owner: 'Ibu Rina Marlina',
      category: 'Makanan',
      price: 'Rp 35.000',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      description: 'Dodol durian asli dengan durian pilihan dan proses tradisional',
      phone: '08123456792',
      location: 'RW 04'
    },
    {
      id: 5,
      name: 'Madu Hutan Alami',
      owner: 'Bapak Surya Wijaya',
      category: 'Makanan',
      price: 'Rp 85.000',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      description: 'Madu hutan alami murni tanpa campuran, dipanen langsung dari hutan',
      phone: '08123456793',
      location: 'RW 07'
    },
    {
      id: 6,
      name: 'Batik Tulis Lampung',
      owner: 'Ibu Maya Sari',
      category: 'Kerajinan',
      price: 'Rp 150.000',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      description: 'Batik tulis dengan motif khas Lampung, dibuat dengan teknik tradisional',
      phone: '08123456794',
      location: 'RW 01'
    }
  ];

  const categories = ['Semua', 'Makanan', 'Minuman', 'Kerajinan'];
  const [selectedCategory, setSelectedCategory] = React.useState('Semua');

  const filteredProducts = selectedCategory === 'Semua' 
    ? umkmProducts 
    : umkmProducts.filter(product => product.category === selectedCategory);

  const statistics = [
    { title: 'Total UMKM', value: '45', icon: Package, color: 'bg-blue-500' },
    { title: 'Produk Terdaftar', value: '127', icon: ShoppingCart, color: 'bg-green-500' },
    { title: 'Omzet per Bulan', value: '150 Jt', icon: TrendingUp, color: 'bg-orange-500' },
    { title: 'Rating Rata-rata', value: '4.8', icon: Star, color: 'bg-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              UMKM Desa Fajar Baru
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Produk berkualitas dari Usaha Mikro Kecil dan Menengah 
              yang dikembangkan oleh masyarakat desa dengan dedikasi tinggi
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {statistics.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </Card>
            ))}
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

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-village-green text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="text-yellow-400 fill-current" size={12} />
                      <span className="ml-1 text-xs font-semibold">{product.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-bold text-village-green">
                      {product.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      per kemasan
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-medium">Pemilik:</span>
                      <span className="ml-2">{product.owner}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin size={14} className="mr-1" />
                      <span>{product.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-village hover:opacity-90 text-white">
                      <ShoppingCart size={14} className="mr-2" />
                      Pesan
                    </Button>
                    <Button variant="outline" size="sm" className="border-village-green text-village-green hover:bg-village-green hover:text-white">
                      <Phone size={14} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Support Program */}
          <Card className="p-8 bg-gradient-to-r from-village-green to-village-blue text-white text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Program Pemberdayaan UMKM</h3>
            <p className="mb-6 opacity-90 max-w-3xl mx-auto">
              Pemerintah Desa Fajar Baru berkomitmen mendukung pengembangan UMKM melalui 
              pelatihan, bantuan modal, dan akses pasar yang lebih luas.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold">Rp 500 Jt</div>
                <div className="text-sm opacity-80">Dana Bantuan</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24</div>
                <div className="text-sm opacity-80">Pelatihan per Tahun</div>
              </div>
              <div>
                <div className="text-3xl font-bold">85%</div>
                <div className="text-sm opacity-80">Tingkat Keberhasilan</div>
              </div>
            </div>
            <Button variant="secondary" size="lg">
              Daftar Program UMKM <ChevronRight size={16} className="ml-2" />
            </Button>
          </Card>

          {/* How to Order */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Cara Memesan</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-village-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Pilih Produk</h4>
                <p className="text-gray-600 text-sm">Browse dan pilih produk UMKM yang diinginkan</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-village-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Hubungi Penjual</h4>
                <p className="text-gray-600 text-sm">Kontak langsung melalui WhatsApp atau telepon</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-village-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Konfirmasi Pesanan</h4>
                <p className="text-gray-600 text-sm">Tentukan jumlah, waktu, dan metode pengiriman</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Terima Produk</h4>
                <p className="text-gray-600 text-sm">Nikmati produk berkualitas dari UMKM lokal</p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UMKM;
