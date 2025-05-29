
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building2, MapPin, Wifi, Smartphone, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Advanced Background with Gradient and Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-green-50">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-green-600/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full animate-pulse blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full animate-pulse delay-1000 blur-xl"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full animate-pulse delay-2000 blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full animate-pulse delay-500 blur-xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full bg-grid-pattern bg-repeat" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-7xl mx-auto">
          {/* Smart Village Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200/50 shadow-lg mb-8 animate-fade-in">
            <Globe className="w-4 h-4 text-emerald-600 mr-2" />
            <span className="text-sm font-medium text-emerald-700">Smart Village Digital</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full ml-2 animate-pulse"></div>
          </div>

          {/* Main Heading with Enhanced Typography */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="block mb-2">Selamat Datang di</span>
              <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-green-600 bg-clip-text text-transparent animate-fade-in">
                Desa Fajar Baru
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-emerald-600 font-medium mt-4">
                Smart Village
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Desa cerdas yang mengintegrasikan teknologi digital untuk memberikan pelayanan terbaik, 
              transparansi data, dan kemudahan akses informasi bagi seluruh masyarakat
            </p>
          </div>

          {/* Smart Features Icons with Responsive Marquee */}
          <div className="mb-12 overflow-hidden">
            {/* Desktop View - Static Grid */}
            <div className="hidden md:flex flex-wrap justify-center gap-4">
              <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm">
                <Wifi className="w-5 h-5 text-emerald-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Digital Connect</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm">
                <Smartphone className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Mobile Ready</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm">
                <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Data Insights</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm">
                <Globe className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Smart Services</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm">
                <Users className="w-5 h-5 text-indigo-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Community Hub</span>
              </div>
            </div>

            {/* Mobile View - Marquee Effect */}
            <div className="md:hidden relative">
              <div className="flex animate-marquee space-x-4">
                <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm whitespace-nowrap">
                  <Wifi className="w-4 h-4 text-emerald-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Digital Connect</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm whitespace-nowrap">
                  <Smartphone className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Mobile Ready</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm whitespace-nowrap">
                  <BarChart3 className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Data Insights</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm whitespace-nowrap">
                  <Globe className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Smart Services</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm whitespace-nowrap">
                  <Users className="w-4 h-4 text-indigo-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Community Hub</span>
                </div>
                {/* Duplicate items for seamless loop */}
                <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm whitespace-nowrap">
                  <Wifi className="w-4 h-4 text-emerald-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Digital Connect</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm whitespace-nowrap">
                  <Smartphone className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Mobile Ready</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30 shadow-sm whitespace-nowrap">
                  <BarChart3 className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Data Insights</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-5xl mx-auto">
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 hover:border-emerald-200/50 hover:-translate-y-2">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">2,847</h3>
              <p className="text-gray-600 font-medium">Total Penduduk</p>
              <div className="mt-2 text-xs text-emerald-600 font-medium">+2.3% dari tahun lalu</div>
            </div>
            
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 hover:border-blue-200/50 hover:-translate-y-2">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">789</h3>
              <p className="text-gray-600 font-medium">Kepala Keluarga</p>
              <div className="mt-2 text-xs text-blue-600 font-medium">+1.8% dari tahun lalu</div>
            </div>
            
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 hover:border-green-200/50 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">15</h3>
              <p className="text-gray-600 font-medium">Rukun Warga</p>
              <div className="mt-2 text-xs text-green-600 font-medium">100% Terdigitalisasi</div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 via-blue-600 to-green-600 hover:from-emerald-700 hover:via-blue-700 hover:to-green-700 text-white px-8 py-4 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Jelajahi Smart Village
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
            
            <Link to="/services/administrasi-penduduk" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-2 border-gray-300 hover:bg-gray-50 hover:border-emerald-300 text-gray-700 hover:text-emerald-700 px-8 py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/80"
              >
                Layanan Digital
              </Button>
            </Link>
          </div>

          {/* Enhanced Contact Info */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/30 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-600">
              <div className="flex items-center justify-center sm:justify-start">
                <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
                <span className="text-sm">Jl. Way Kandis No. 123, Bandar Lampung</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="text-sm">📞 (0721) 123-4567</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="text-sm">✉️ info@fajar-baru.desa.id</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
