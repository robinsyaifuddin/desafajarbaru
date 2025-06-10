
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Settings, 
  Save, 
  Upload,
  Eye,
  EyeOff,
  Shield,
  Globe,
  Mail,
  Phone,
  MapPin,
  Image,
  Users,
  Lock
} from 'lucide-react';

const AdminSettings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'Umum', icon: Settings },
    { id: 'contact', label: 'Kontak', icon: Phone },
    { id: 'security', label: 'Keamanan', icon: Shield },
    { id: 'website', label: 'Website', icon: Globe },
    { id: 'users', label: 'Pengguna', icon: Users }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Pengaturan</h2>
          <p className="text-gray-600">Kelola pengaturan sistem dan konfigurasi website</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
          <Save size={20} className="mr-2" />
          Simpan Perubahan
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <Card className="p-4 h-fit">
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <tab.icon size={20} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </Card>

        {/* Content Area */}
        <div className="lg:col-span-3">
          {activeTab === 'general' && (
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Pengaturan Umum</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="village-name">Nama Desa</Label>
                    <Input id="village-name" defaultValue="Desa Fajar Baru" />
                  </div>
                  <div>
                    <Label htmlFor="village-code">Kode Desa</Label>
                    <Input id="village-code" defaultValue="3201012345" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="village-description">Deskripsi Desa</Label>
                  <textarea 
                    id="village-description"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    rows={4}
                    defaultValue="Desa Fajar Baru adalah desa yang terletak di wilayah yang strategis dengan potensi pertanian dan pariwisata yang besar."
                  />
                </div>

                <div>
                  <Label htmlFor="village-logo">Logo Desa</Label>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Image size={24} className="text-gray-400" />
                    </div>
                    <Button variant="outline">
                      <Upload size={16} className="mr-2" />
                      Upload Logo
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="province">Provinsi</Label>
                    <Input id="province" defaultValue="Jawa Barat" />
                  </div>
                  <div>
                    <Label htmlFor="regency">Kabupaten</Label>
                    <Input id="regency" defaultValue="Bogor" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="district">Kecamatan</Label>
                    <Input id="district" defaultValue="Dramaga" />
                  </div>
                  <div>
                    <Label htmlFor="postal-code">Kode Pos</Label>
                    <Input id="postal-code" defaultValue="16680" />
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'contact' && (
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="village-address">Alamat Lengkap</Label>
                  <textarea 
                    id="village-address"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    rows={3}
                    defaultValue="Jl. Raya Dramaga No. 123, Desa Fajar Baru, Kec. Dramaga, Kab. Bogor, Jawa Barat 16680"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input id="phone" defaultValue="(0251) 8623456" />
                  </div>
                  <div>
                    <Label htmlFor="fax">Nomor Fax</Label>
                    <Input id="fax" defaultValue="(0251) 8623457" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Resmi</Label>
                    <Input id="email" type="email" defaultValue="info@fajarbaru.desa.id" />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="https://fajarbaru.desa.id" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="maps-embed">Google Maps Embed</Label>
                  <textarea 
                    id="maps-embed"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    rows={3}
                    placeholder="Masukkan kode embed Google Maps"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="latitude">Latitude</Label>
                    <Input id="latitude" defaultValue="-6.5518842" />
                  </div>
                  <div>
                    <Label htmlFor="longitude">Longitude</Label>
                    <Input id="longitude" defaultValue="106.7173659" />
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'security' && (
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Pengaturan Keamanan</h3>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="current-password">Password Saat Ini</Label>
                  <div className="relative">
                    <Input 
                      id="current-password" 
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Masukkan password saat ini"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="new-password">Password Baru</Label>
                  <Input 
                    id="new-password" 
                    type="password"
                    placeholder="Masukkan password baru"
                  />
                </div>

                <div>
                  <Label htmlFor="confirm-password">Konfirmasi Password Baru</Label>
                  <Input 
                    id="confirm-password" 
                    type="password"
                    placeholder="Konfirmasi password baru"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Keamanan Login</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm text-blue-700">Aktifkan autentikasi dua faktor</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm text-blue-700">Log aktivitas login</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-blue-700">Notifikasi login tidak biasa</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Aktivitas Login Terakhir</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Login Berhasil</p>
                        <p className="text-sm text-gray-600">IP: 192.168.1.100</p>
                      </div>
                      <span className="text-sm text-gray-500">2 jam yang lalu</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Login Berhasil</p>
                        <p className="text-sm text-gray-600">IP: 192.168.1.100</p>
                      </div>
                      <span className="text-sm text-gray-500">1 hari yang lalu</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'website' && (
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Pengaturan Website</h3>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="site-title">Judul Website</Label>
                  <Input id="site-title" defaultValue="Desa Fajar Baru - Portal Resmi" />
                </div>

                <div>
                  <Label htmlFor="site-tagline">Tagline</Label>
                  <Input id="site-tagline" defaultValue="Desa Maju, Rakyat Sejahtera" />
                </div>

                <div>
                  <Label htmlFor="meta-description">Meta Description</Label>
                  <textarea 
                    id="meta-description"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    rows={3}
                    defaultValue="Portal resmi Desa Fajar Baru. Informasi terkini tentang pemerintahan, layanan, dan kegiatan desa."
                  />
                </div>

                <div>
                  <Label htmlFor="meta-keywords">Meta Keywords</Label>
                  <Input id="meta-keywords" defaultValue="desa fajar baru, pemerintah desa, layanan desa, bogor" />
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Fitur Website</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm text-green-700">Aktifkan komentar pada berita</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm text-green-700">Tampilkan statistik pengunjung</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-green-700">Mode maintenance</span>
                    </label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="analytics-code">Google Analytics Code</Label>
                  <Input id="analytics-code" placeholder="G-XXXXXXXXXX" />
                </div>

                <div>
                  <Label htmlFor="footer-text">Teks Footer</Label>
                  <textarea 
                    id="footer-text"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    rows={2}
                    defaultValue="© 2024 Desa Fajar Baru. Semua hak cipta dilindungi."
                  />
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'users' && (
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Manajemen Pengguna</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Administrator Aktif</h4>
                  <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                    <Users size={16} className="mr-2" />
                    Tambah Admin
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">A</span>
                      </div>
                      <div>
                        <p className="font-medium">adminfajarbaru@gmail.com</p>
                        <p className="text-sm text-gray-600">Super Administrator</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Aktif</span>
                      <Button variant="ghost" size="sm">
                        <Lock size={16} />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">Peran dan Izin</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-medium text-yellow-700 mb-2">Super Administrator</h5>
                      <div className="grid grid-cols-2 gap-2 text-xs text-yellow-600">
                        <span>✓ Kelola semua konten</span>
                        <span>✓ Kelola pengguna</span>
                        <span>✓ Akses pengaturan</span>
                        <span>✓ Kelola keuangan</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Aktivitas Terakhir</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Login ke dashboard</p>
                        <p className="text-sm text-gray-600">adminfajarbaru@gmail.com</p>
                      </div>
                      <span className="text-sm text-gray-500">2 jam yang lalu</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Mengedit berita</p>
                        <p className="text-sm text-gray-600">adminfajarbaru@gmail.com</p>
                      </div>
                      <span className="text-sm text-gray-500">5 jam yang lalu</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
