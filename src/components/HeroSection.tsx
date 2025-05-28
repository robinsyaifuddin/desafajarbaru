
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-emerald-300 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-200 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Selamat Datang di
              <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Desa Fajar Baru
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Desa yang berdedikasi untuk memberikan pelayanan terbaik kepada masyarakat 
              dengan transparansi, inovasi, dan kemudahan akses informasi
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">2,847</h3>
              <p className="text-gray-600">Total Penduduk</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Building2 className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">789</h3>
              <p className="text-gray-600">Kepala Keluarga</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">15</h3>
              <p className="text-gray-600">Rukun Warga</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Jelajahi Desa
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Link to="/services/administrasi-penduduk">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-4 text-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                Layanan
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-gray-600">
            <p className="text-sm md:text-base">
              📍 Jl. Way Kandis No. 123, Bandar Lampung | 📞 (0721) 123-4567 | ✉️ info@fajar-baru.desa.id
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
