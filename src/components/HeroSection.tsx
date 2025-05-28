
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Users, Calendar, Star, User, Settings, Phone, Mail } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { label: 'Penduduk', value: '2,847', icon: Users },
    { label: 'RW', value: '8', icon: MapPin },
    { label: 'RT', value: '24', icon: MapPin },
    { label: 'Kegiatan/Bulan', value: '15+', icon: Calendar },
  ];

  const highlights = [
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      title: 'Pemandangan Alam',
      description: 'Keindahan alam yang memukau mata'
    },
    {
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
      title: 'Infrastruktur Modern',
      description: 'Fasilitas lengkap dan modern'
    },
    {
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80',
      title: 'Produk Unggulan',
      description: 'UMKM berkualitas tinggi'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-green-900/70 to-blue-800/80" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="text-white animate-fade-in">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                  Selamat Datang di Desa Fajar Baru
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Harmoni
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Alam & Digital
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-lg">
                Nikmati keindahan alam Way Kandis dengan sentuhan teknologi modern untuk kehidupan yang lebih baik.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/profile">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg group">
                    <User className="mr-2 h-5 w-5" />
                    Profil Desa
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm">
                    <Settings className="mr-2 h-5 w-5" />
                    Layanan
                  </Button>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">(0721) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">info@fajar-baru.desa.id</span>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="group overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-500 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="flex items-center p-6">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg mr-6 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="text-white">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-blue-100 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1 + 0.5}s`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-blue-100 text-sm font-medium">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Quick Access with elegant design */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-4">Layanan Digital Desa</h2>
              <p className="text-xl text-blue-100 mb-12">Akses mudah ke berbagai layanan administratif dan informasi desa</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['IDM Desa', 'PPID', 'APB Desa', 'Bantuan Sosial'].map((item, index) => (
                  <Button 
                    key={index} 
                    variant="outline" 
                    className="h-20 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm group animate-fade-in"
                    style={{animationDelay: `${index * 0.1 + 0.8}s`}}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-200">
                      {item}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-orange-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-80">Scroll untuk melihat lebih</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
