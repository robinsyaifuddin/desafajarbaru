
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Users, Calendar, Wifi, User, Settings } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    {
      label: 'Penduduk',
      value: '2,847',
      icon: Users
    },
    {
      label: 'RW/RT',
      value: '8/24',
      icon: MapPin
    },
    {
      label: 'Kegiatan',
      value: '15+',
      icon: Calendar
    },
    {
      label: 'Digital',
      value: '100%',
      icon: Wifi
    }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200 text-emerald-700 text-sm font-medium mb-8 shadow-sm">
              <Wifi className="w-4 h-4 mr-2" />
              Smart Village • Desa Fajar Baru
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 leading-tight">
              Desa Digital
              <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Masa Depan
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Menggabungkan kearifan lokal dengan teknologi modern untuk menciptakan kehidupan yang lebih baik di Way Kandis
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/profile">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <User className="mr-2 h-5 w-5" />
                  Profil Desa
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-4 text-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <Settings className="mr-2 h-5 w-5" />
                  Layanan
                </Button>
              </Link>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                  <stat.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</h3>
                <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Smart Village Features */}
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Digital Services',
                  description: 'Layanan administrasi online 24/7'
                },
                {
                  title: 'Smart Infrastructure',
                  description: 'Infrastruktur modern & berkelanjutan'
                },
                {
                  title: 'Community Connect',
                  description: 'Platform komunikasi warga terintegrasi'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/70 transition-all duration-300 animate-fade-in" style={{
                  animationDelay: `${index * 0.2 + 0.5}s`
                }}>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
