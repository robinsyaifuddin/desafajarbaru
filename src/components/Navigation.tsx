
import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Profil Desa', href: '/profile' },
    { name: 'Infografis', href: '/infographics' },
    { name: 'Berita', href: '/news' },
    { name: 'Galeri', href: '/gallery' },
    { name: 'Layanan', href: '/services' },
    { name: 'Wisata', href: '/tourism' },
    { name: 'UMKM', href: '/umkm' },
  ];

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Handle hash links for sections on homepage
    if (href.startsWith('/#') && location.pathname === '/') {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-gradient-village text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>Way Kandis, Bandar Lampung</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(0721) 123-4567</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Mail size={14} />
            <span>info@fajar-baru.desa.id</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-village rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">FB</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-800">Desa Fajar Baru</h1>
              <p className="text-sm text-gray-600">Way Kandis, Bandar Lampung</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-village-green transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/login">
              <Button className="bg-gradient-village hover:opacity-90 text-white">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-in">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-village-green transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-gradient-village hover:opacity-90 text-white w-full mt-4">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
