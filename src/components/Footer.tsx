
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Profil Desa', 'Struktur Organisasi', 'Visi & Misi', 'Sejarah Desa'
  ];

  const services = [
    'Administrasi Penduduk', 'Surat Keterangan', 'IDM', 'APB Desa'
  ];

  const tourism = [
    'Air Terjun Way Kandis', 'Kebun Raya', 'Puncak Hijau', 'Sungai Way Kandis'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Village Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex-shrink-0">
                <img 
                  src="/lovable-uploads/6d651776-4595-4e2e-a27c-cbcc298cd82f.png" 
                  alt="Logo Desa Fajar Baru"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Desa Fajar Baru</h3>
                <p className="text-gray-400 text-sm">Jati Agung, Lampung Selatan</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Desa yang menggabungkan keindahan alam dengan kemajuan teknologi digital 
              untuk pelayanan terbaik bagi masyarakat.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Tentang Desa</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Tourism */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Kontak & Wisata</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-village-green mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Kec. Jati Agung<br />
                  Kab. Lampung Selatan, Lampung
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-village-green flex-shrink-0" />
                <span className="text-gray-300 text-sm">(0721) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-village-green flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@fajar-baru.desa.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-village-green flex-shrink-0" />
                <span className="text-gray-300 text-sm">Senin - Jumat: 08:00 - 16:00</span>
              </div>
            </div>

            {/* Tourism Links */}
            <div>
              <h5 className="font-medium text-white mb-3">Destinasi Wisata</h5>
              <ul className="space-y-2">
                {tourism.slice(0, 3).map((destination, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {destination}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Desa Fajar Baru. Semua hak cipta dilindungi.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                PPID
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Peta Situs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
