
import React, { useEffect } from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Education = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const educationData = [
    { level: 'Tidak Sekolah', count: 145, color: '#ef4444' },
    { level: 'SD/Sederajat', count: 890, color: '#f97316' },
    { level: 'SMP/Sederajat', count: 672, color: '#eab308' },
    { level: 'SMA/Sederajat', count: 548, color: '#22c55e' },
    { level: 'Diploma', count: 234, color: '#3b82f6' },
    { level: 'Sarjana (S1)', count: 289, color: '#8b5cf6' },
    { level: 'Pascasarjana (S2/S3)', count: 69, color: '#ec4899' }
  ];

  const byGenderData = [
    { level: 'Tidak Sekolah', male: 67, female: 78 },
    { level: 'SD', male: 445, female: 445 },
    { level: 'SMP', male: 342, female: 330 },
    { level: 'SMA', male: 278, female: 270 },
    { level: 'Diploma', male: 105, female: 129 },
    { level: 'Sarjana', male: 134, female: 155 },
    { level: 'Pascasarjana', male: 32, female: 37 }
  ];

  const totalPopulation = educationData.reduce((sum, item) => sum + item.count, 0);

  return (
    <StatisticsLayout
      title="Statistik Pendidikan Dalam KK"
      description="Data tingkat pendidikan penduduk Desa Fajar Baru berdasarkan kepala keluarga"
    >
      <div className="min-h-screen">
        <Tabs defaultValue="overview" className="w-full">
          <div className="sticky top-32 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200 mb-6">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-auto p-1 bg-white/90 border shadow-lg rounded-xl">
              <TabsTrigger 
                value="overview" 
                className="flex flex-col sm:flex-row items-center gap-2 py-3 px-2 sm:px-4 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all duration-300 hover:bg-blue-50 cursor-pointer text-xs sm:text-sm font-medium"
              >
                <span>📊</span>
                <span className="hidden sm:inline">Ringkasan</span>
                <span className="sm:hidden">Ring.</span>
              </TabsTrigger>
              <TabsTrigger 
                value="charts" 
                className="flex flex-col sm:flex-row items-center gap-2 py-3 px-2 sm:px-4 data-[state=active]:bg-green-500 data-[state=active]:text-white rounded-lg transition-all duration-300 hover:bg-green-50 cursor-pointer text-xs sm:text-sm font-medium"
              >
                <span>📈</span>
                <span className="hidden sm:inline">Grafik</span>
                <span className="sm:hidden">Graf.</span>
              </TabsTrigger>
              <TabsTrigger 
                value="details" 
                className="flex flex-col sm:flex-row items-center gap-2 py-3 px-2 sm:px-4 data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-lg transition-all duration-300 hover:bg-purple-50 cursor-pointer text-xs sm:text-sm font-medium"
              >
                <span>📋</span>
                <span className="hidden sm:inline">Detail</span>
                <span className="sm:hidden">Det.</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="space-y-6 pb-20">
            <TabsContent value="overview" className="space-y-6 animate-fade-in">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <Card className="p-4 lg:p-6 text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                  <h3 className="text-sm lg:text-lg font-semibold text-gray-800 mb-2">Total Penduduk</h3>
                  <p className="text-2xl lg:text-3xl font-bold text-blue-600">{totalPopulation.toLocaleString()}</p>
                </Card>
                <Card className="p-4 lg:p-6 text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
                  <h3 className="text-sm lg:text-lg font-semibold text-gray-800 mb-2">Berpendidikan Tinggi</h3>
                  <p className="text-2xl lg:text-3xl font-bold text-purple-600">
                    {(educationData.slice(-3).reduce((sum, item) => sum + item.count, 0)).toLocaleString()}
                  </p>
                </Card>
                <Card className="p-4 lg:p-6 text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
                  <h3 className="text-sm lg:text-lg font-semibold text-gray-800 mb-2">Pendidikan Menengah</h3>
                  <p className="text-2xl lg:text-3xl font-bold text-green-600">
                    {(educationData.slice(2, 4).reduce((sum, item) => sum + item.count, 0)).toLocaleString()}
                  </p>
                </Card>
                <Card className="p-4 lg:p-6 text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-500">
                  <h3 className="text-sm lg:text-lg font-semibold text-gray-800 mb-2">Tingkat Literasi</h3>
                  <p className="text-2xl lg:text-3xl font-bold text-emerald-600">
                    {(((totalPopulation - educationData[0].count) / totalPopulation) * 100).toFixed(1)}%
                  </p>
                </Card>
              </div>

              {/* Education Level Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {educationData.map((item, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4" style={{borderLeftColor: item.color}}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-800 text-sm">{item.level}</h4>
                      <div className="w-4 h-4 rounded-full" style={{backgroundColor: item.color}}></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">Jumlah:</span>
                        <span className="font-bold text-lg" style={{color: item.color}}>{item.count.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">Persentase:</span>
                        <span className="font-semibold text-sm text-gray-700">
                          {((item.count / totalPopulation) * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="charts" className="space-y-6 animate-fade-in">
              {/* Charts */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
                <Card className="p-4 lg:p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-6">Distribusi Tingkat Pendidikan</h3>
                  <div className="h-64 sm:h-80 lg:h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={educationData}
                          cx="50%"
                          cy="50%"
                          outerRadius={window.innerWidth < 640 ? 60 : window.innerWidth < 1024 ? 80 : 100}
                          dataKey="count"
                          label={({ level, percent }) => 
                            window.innerWidth < 640 
                              ? `${(percent * 100).toFixed(0)}%` 
                              : `${level} ${(percent * 100).toFixed(1)}%`
                          }
                          labelLine={false}
                          fontSize={window.innerWidth < 640 ? 10 : 12}
                        >
                          {educationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => value.toLocaleString()} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                <Card className="p-4 lg:p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-6">Perbandingan Berdasarkan Jenis Kelamin</h3>
                  <div className="h-64 sm:h-80 lg:h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={byGenderData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="level" 
                          angle={-45} 
                          textAnchor="end" 
                          height={window.innerWidth < 640 ? 60 : 80}
                          fontSize={window.innerWidth < 640 ? 10 : 12}
                        />
                        <YAxis fontSize={window.innerWidth < 640 ? 10 : 12} />
                        <Tooltip />
                        <Bar dataKey="male" fill="#3b82f6" name="Laki-laki" />
                        <Bar dataKey="female" fill="#ec4899" name="Perempuan" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="details" className="space-y-6 animate-fade-in">
              {/* Detailed Table */}
              <Card className="p-4 lg:p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-6">Tabel Detail Tingkat Pendidikan</h3>
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <table className="w-full border-collapse min-w-full">
                    <thead className="sticky top-0 bg-gray-50">
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-800 text-sm lg:text-base">Tingkat Pendidikan</th>
                        <th className="text-center py-3 px-2 sm:px-4 font-semibold text-gray-800 text-sm lg:text-base">Jumlah</th>
                        <th className="text-center py-3 px-2 sm:px-4 font-semibold text-gray-800 text-sm lg:text-base">%</th>
                        <th className="text-center py-3 px-2 sm:px-4 font-semibold text-gray-800 text-sm lg:text-base">L</th>
                        <th className="text-center py-3 px-2 sm:px-4 font-semibold text-gray-800 text-sm lg:text-base">P</th>
                      </tr>
                    </thead>
                    <tbody>
                      {educationData.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                          <td className="py-3 px-2 sm:px-4 font-medium text-sm lg:text-base">{item.level}</td>
                          <td className="text-center py-3 px-2 sm:px-4 font-semibold text-sm lg:text-base">{item.count}</td>
                          <td className="text-center py-3 px-2 sm:px-4 text-sm lg:text-base">
                            {((item.count / totalPopulation) * 100).toFixed(1)}%
                          </td>
                          <td className="text-center py-3 px-2 sm:px-4 text-blue-600 font-medium text-sm lg:text-base">{byGenderData[index]?.male || 0}</td>
                          <td className="text-center py-3 px-2 sm:px-4 text-pink-600 font-medium text-sm lg:text-base">{byGenderData[index]?.female || 0}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </StatisticsLayout>
  );
};

export default Education;
