
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, Users, Building, Leaf, ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';

const Infographics = () => {
  const populationData = [
    { name: 'RW 1', population: 380 },
    { name: 'RW 2', population: 420 },
    { name: 'RW 3', population: 350 },
    { name: 'RW 4', population: 290 },
    { name: 'RW 5', population: 380 },
    { name: 'RW 6', population: 310 },
    { name: 'RW 7', population: 340 },
    { name: 'RW 8', population: 377 }
  ];

  const ageGroupData = [
    { name: '0-17 tahun', value: 890, color: '#059669' },
    { name: '18-35 tahun', value: 1200, color: '#3b82f6' },
    { name: '36-55 tahun', value: 650, color: '#f59e0b' },
    { name: '56+ tahun', value: 107, color: '#ef4444' }
  ];

  const economicData = [
    { year: '2020', income: 45000000 },
    { year: '2021', income: 52000000 },
    { year: '2022', income: 58000000 },
    { year: '2023', income: 65000000 },
    { year: '2024', income: 72000000 }
  ];

  const statistics = [
    { title: 'Total Penduduk', value: '2,847', icon: Users, color: 'bg-blue-500' },
    { title: 'Jumlah KK', value: '847', icon: Building, color: 'bg-green-500' },
    { title: 'Luas Wilayah', value: '847 Ha', icon: Leaf, color: 'bg-orange-500' },
    { title: 'Tingkat Partisipasi', value: '87%', icon: TrendingUp, color: 'bg-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Infografis Desa
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Data visual dan statistik komprehensif tentang perkembangan dan kondisi terkini 
              Desa Fajar Baru Way Kandis
            </p>
          </div>

          {/* Statistics Cards */}
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

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Population by RW */}
            <Card className="p-6 animate-fade-in">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Distribusi Penduduk per RW</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={populationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="population" fill="#059669" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Age Distribution */}
            <Card className="p-6 animate-fade-in">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Distribusi Usia Penduduk</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={ageGroupData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {ageGroupData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            {/* Economic Growth */}
            <Card className="p-6 animate-fade-in lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Pertumbuhan Ekonomi Desa (dalam Rupiah)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={economicData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => `Rp ${value.toLocaleString()}`} />
                  <Line type="monotone" dataKey="income" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* IDM Section */}
          <Card className="p-8 mb-12 bg-gradient-to-r from-village-green to-village-blue text-white animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Indeks Desa Membangun (IDM)</h3>
                <p className="mb-6 opacity-90">
                  Desa Fajar Baru telah mencapai status "Desa Berkembang" dengan skor IDM 0.7234, 
                  menunjukkan kemajuan signifikan dalam berbagai aspek pembangunan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" className="mb-4">
                    Lihat Detail IDM <ChevronRight size={16} className="ml-2" />
                  </Button>
                  <Link to="/budget">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-village-green">
                      Lihat APBDes <ChevronRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">0.7234</div>
                <div className="text-xl opacity-90">Skor IDM 2024</div>
                <div className="text-sm opacity-75 mt-2">Status: Desa Berkembang</div>
              </div>
            </div>
          </Card>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center animate-fade-in">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Fasilitas Publik</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Balai Desa</li>
                <li>Puskesmas Pembantu</li>
                <li>SD Negeri 1</li>
                <li>Masjid Al-Ikhlas</li>
                <li>Pasar Tradisional</li>
              </ul>
            </Card>

            <Card className="p-6 text-center animate-fade-in">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Mata Pencaharian</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Petani: 45%</li>
                <li>Pedagang: 25%</li>
                <li>Buruh: 15%</li>
                <li>PNS: 10%</li>
                <li>Lainnya: 5%</li>
              </ul>
            </Card>

            <Card className="p-6 text-center animate-fade-in">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Tingkat Pendidikan</h4>
              <ul className="text-gray-600 space-y-2">
                <li>SD: 40%</li>
                <li>SMP: 30%</li>
                <li>SMA: 20%</li>
                <li>Diploma: 7%</li>
                <li>Sarjana: 3%</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Infographics;
