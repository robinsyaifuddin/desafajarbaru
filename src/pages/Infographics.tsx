import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, Users, Building, Leaf, ChevronRight, BarChart3, GraduationCap, Briefcase, Heart, UserCheck, Home, Award } from 'lucide-react';
import Footer from '@/components/Footer';
import RWPopulationSection from '@/components/RWPopulationSection';
import VillageGISMap from '@/components/VillageGISMap';

const Infographics = () => {
  const [activeStatTab, setActiveStatTab] = useState('population');

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

  const statisticsMenus = [
    {
      title: 'Statistik Penduduk',
      description: 'Data demografis dan karakteristik penduduk',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      items: [
        { name: 'Rentang Umur', path: '/infographics/age-range' },
        { name: 'Pendidikan', path: '/infographics/education' },
        { name: 'Pekerjaan', path: '/infographics/occupation' },
      ]
    },
    {
      title: 'Statistik Keluarga',
      description: 'Data struktur dan kondisi keluarga',
      icon: Building,
      color: 'from-green-500 to-green-600',
      items: [
        { name: 'Kelas Sosial', path: '/infographics/social-class' },
      ]
    },
    {
      title: 'Statistik Bantuan',
      description: 'Data penerima program bantuan sosial',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      items: [
        { name: 'Bantuan Penduduk', path: '/infographics/individual-aid' },
        { name: 'Bantuan Keluarga', path: '/infographics/family-aid' },
      ]
    }
  ];

  const detailedStats = {
    population: {
      title: 'Statistik Penduduk',
      icon: Users,
      data: [
        { label: 'Jenis Kelamin', male: 1423, female: 1424, icon: UserCheck },
        { label: 'Status Perkawinan', married: 1567, single: 892, divorced: 110, icon: Heart },
        { label: 'Agama', islam: 2456, christian: 234, other: 157, icon: Award },
        { label: 'Kewarganegaraan', wni: 2834, wna: 13, icon: Users }
      ]
    },
    family: {
      title: 'Statistik Keluarga',
      icon: Home,
      data: [
        { label: 'Kepala Keluarga', male: 789, female: 58, icon: Users },
        { label: 'Struktur Keluarga', nuclear: 678, extended: 169, icon: Home },
        { label: 'Tingkat Ekonomi', high: 123, middle: 567, low: 157, icon: TrendingUp }
      ]
    },
    aid: {
      title: 'Program Bantuan',
      icon: Heart,
      data: [
        { label: 'PKH', recipients: 234, amount: 'Rp 450M', icon: Heart },
        { label: 'BPNT', recipients: 345, amount: 'Rp 230M', icon: Users },
        { label: 'Bantuan Tunai', recipients: 156, amount: 'Rp 180M', icon: TrendingUp }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Increased padding top to prevent navbar overlap */}
      <div className="pt-28 lg:pt-36 pb-16">
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

          {/* Enhanced Statistics Section with Responsive Tabs */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Statistik Detail Desa
            </h2>
            
            <Tabs value={activeStatTab} onValueChange={setActiveStatTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-2xl grid-cols-3 h-auto p-1 bg-white border shadow-md rounded-xl">
                  <TabsTrigger 
                    value="population" 
                    className="flex flex-col sm:flex-row items-center gap-2 py-3 px-4 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                  >
                    <Users size={20} />
                    <span className="text-sm font-medium hidden sm:inline">Penduduk</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="family" 
                    className="flex flex-col sm:flex-row items-center gap-2 py-3 px-4 data-[state=active]:bg-green-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                  >
                    <Home size={20} />
                    <span className="text-sm font-medium hidden sm:inline">Keluarga</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="aid" 
                    className="flex flex-col sm:flex-row items-center gap-2 py-3 px-4 data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                  >
                    <Heart size={20} />
                    <span className="text-sm font-medium hidden sm:inline">Bantuan</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Tab Content */}
              {Object.entries(detailedStats).map(([key, stat]) => (
                <TabsContent key={key} value={key} className="mt-8">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <stat.icon className="text-gray-600" size={28} />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800">{stat.title}</h3>
                      </div>
                      <p className="text-gray-600">Data lengkap dan terkini mengenai {stat.title.toLowerCase()}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {stat.data.map((item, index) => (
                        <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-blue-500">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-50 rounded-lg">
                              <item.icon className="text-blue-600" size={20} />
                            </div>
                            <h4 className="font-semibold text-gray-800 text-sm">{item.label}</h4>
                          </div>
                          
                          <div className="space-y-2">
                            {item.male !== undefined && (
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-600">Laki-laki:</span>
                                <span className="font-bold text-blue-600">{item.male.toLocaleString()}</span>
                              </div>
                            )}
                            {item.female !== undefined && (
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-600">Perempuan:</span>
                                <span className="font-bold text-pink-600">{item.female.toLocaleString()}</span>
                              </div>
                            )}
                            {item.married !== undefined && (
                              <>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">Kawin:</span>
                                  <span className="font-bold text-green-600">{item.married.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">Belum Kawin:</span>
                                  <span className="font-bold text-orange-600">{item.single.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">Cerai:</span>
                                  <span className="font-bold text-red-600">{item.divorced.toLocaleString()}</span>
                                </div>
                              </>
                            )}
                            {item.islam !== undefined && (
                              <>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">Islam:</span>
                                  <span className="font-bold text-green-600">{item.islam.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">Kristen:</span>
                                  <span className="font-bold text-blue-600">{item.christian.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">Lainnya:</span>
                                  <span className="font-bold text-purple-600">{item.other.toLocaleString()}</span>
                                </div>
                              </>
                            )}
                            {item.wni !== undefined && (
                              <>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">WNI:</span>
                                  <span className="font-bold text-green-600">{item.wni.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">WNA:</span>
                                  <span className="font-bold text-blue-600">{item.wna.toLocaleString()}</span>
                                </div>
                              </>
                            )}
                            {item.nuclear !== undefined && (
                              <>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">Inti:</span>
                                  <span className="font-bold text-green-600">{item.nuclear.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">Besar:</span>
                                  <span className="font-bold text-blue-600">{item.extended.toLocaleString()}</span>
                                </div>
                              </>
                            )}
                            {item.high !== undefined && (
                              <>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">Tinggi:</span>
                                  <span className="font-bold text-green-600">{item.high.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">Menengah:</span>
                                  <span className="font-bold text-blue-600">{item.middle.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">Rendah:</span>
                                  <span className="font-bold text-orange-600">{item.low.toLocaleString()}</span>
                                </div>
                              </>
                            )}
                            {item.recipients !== undefined && (
                              <>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">Penerima:</span>
                                  <span className="font-bold text-blue-600">{item.recipients.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">Total:</span>
                                  <span className="font-bold text-green-600">{item.amount}</span>
                                </div>
                              </>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center mt-6">
                      {statisticsMenus
                        .filter(menu => 
                          (key === 'population' && menu.title.includes('Penduduk')) ||
                          (key === 'family' && menu.title.includes('Keluarga')) ||
                          (key === 'aid' && menu.title.includes('Bantuan'))
                        )
                        .map((menu, menuIndex) => 
                          menu.items.map((item, itemIndex) => (
                            <Link key={`${menuIndex}-${itemIndex}`} to={item.path}>
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                              >
                                {item.name}
                                <ChevronRight size={14} className="ml-1" />
                              </Button>
                            </Link>
                          ))
                        )}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {statistics.map((stat, index) => (
              <Card key={index} className="p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-12 h-12 md:w-16 md:h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                  <stat.icon className="text-white" size={window.innerWidth < 768 ? 20 : 32} />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{stat.title}</p>
              </Card>
            ))}
          </div>

          {/* RW Population Section */}
          <RWPopulationSection />

          {/* Village GIS Map */}
          <VillageGISMap />

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Population by RW */}
            <Card className="p-4 md:p-6 animate-fade-in">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">Distribusi Penduduk per RW</h3>
              <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={populationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Tooltip />
                    <Bar dataKey="population" fill="#059669" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Age Distribution */}
            <Card className="p-4 md:p-6 animate-fade-in">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">Distribusi Usia Penduduk</h3>
              <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ageGroupData}
                      cx="50%"
                      cy="50%"
                      outerRadius={window.innerWidth < 768 ? 60 : 80}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                      fontSize={window.innerWidth < 768 ? 10 : 12}
                    >
                      {ageGroupData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Economic Growth */}
            <Card className="p-4 md:p-6 animate-fade-in lg:col-span-2">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">Pertumbuhan Ekonomi Desa (dalam Rupiah)</h3>
              <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={economicData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Tooltip formatter={(value) => `Rp ${value.toLocaleString()}`} />
                    <Line type="monotone" dataKey="income" stroke="#3b82f6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* IDM Section */}
          <Card className="p-6 md:p-8 mb-12 bg-gradient-to-r from-village-green to-village-blue text-white animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Indeks Desa Membangun (IDM)</h3>
                <p className="mb-6 opacity-90 text-sm md:text-base">
                  Desa Fajar Baru telah mencapai status "Desa Berkembang" dengan skor IDM 0.7234, 
                  menunjukkan kemajuan signifikan dalam berbagai aspek pembangunan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" className="text-sm md:text-base">
                    Lihat Detail IDM <ChevronRight size={16} className="ml-2" />
                  </Button>
                  <Link to="/budget">
                    <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-village-green text-sm md:text-base">
                      Lihat APBDes <ChevronRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold mb-2">0.7234</div>
                <div className="text-lg md:text-xl opacity-90">Skor IDM 2024</div>
                <div className="text-sm opacity-75 mt-2">Status: Desa Berkembang</div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <Card className="p-4 md:p-6 text-center animate-fade-in">
              <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-3">Fasilitas Publik</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>Balai Desa</li>
                <li>Puskesmas Pembantu</li>
                <li>SD Negeri 1</li>
                <li>Masjid Al-Ikhlas</li>
                <li>Pasar Tradisional</li>
              </ul>
            </Card>

            <Card className="p-4 md:p-6 text-center animate-fade-in">
              <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-3">Mata Pencaharian</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>Petani: 45%</li>
                <li>Pedagang: 25%</li>
                <li>Buruh: 15%</li>
                <li>PNS: 10%</li>
                <li>Lainnya: 5%</li>
              </ul>
            </Card>

            <Card className="p-4 md:p-6 text-center animate-fade-in">
              <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-3">Tingkat Pendidikan</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
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
