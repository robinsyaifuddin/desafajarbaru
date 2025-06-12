
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Users, MapPin, TrendingUp, Home } from 'lucide-react';

const PopulationPerArea = () => {
  const populationByRW = [
    { rw: 'RW 1', population: 420, households: 125, density: 8.4 },
    { rw: 'RW 2', population: 485, households: 142, density: 9.7 },
    { rw: 'RW 3', population: 356, households: 108, density: 7.1 },
    { rw: 'RW 4', population: 512, households: 154, density: 10.2 },
    { rw: 'RW 5', population: 398, households: 118, density: 7.9 },
    { rw: 'RW 6', population: 345, households: 98, density: 6.9 },
    { rw: 'RW 7', population: 431, households: 128, density: 8.6 },
    { rw: 'RW 8', population: 400, households: 119, density: 8.0 }
  ];

  const populationByVillageArea = [
    { area: 'Pusat Desa', population: 1250, percentage: 43.9, color: '#3b82f6' },
    { area: 'Area Pertanian', population: 789, percentage: 27.7, color: '#10b981' },
    { area: 'Area Perkebunan', population: 456, percentage: 16.0, color: '#f59e0b' },
    { area: 'Area Wisata', population: 234, percentage: 8.2, color: '#ef4444' },
    { area: 'Area Industri', population: 118, percentage: 4.1, color: '#8b5cf6' }
  ];

  const growthTrend = [
    { year: '2020', rw1: 380, rw2: 420, rw3: 320, rw4: 450, rw5: 350, rw6: 310, rw7: 390, rw8: 360 },
    { year: '2021', rw1: 395, rw2: 440, rw3: 335, rw4: 470, rw5: 365, rw6: 325, rw7: 405, rw8: 375 },
    { year: '2022', rw1: 405, rw2: 460, rw3: 345, rw4: 490, rw5: 380, rw6: 335, rw7: 415, rw8: 385 },
    { year: '2023', rw1: 415, rw2: 475, rw3: 350, rw4: 505, rw5: 390, rw6: 340, rw7: 425, rw8: 395 },
    { year: '2024', rw1: 420, rw2: 485, rw3: 356, rw4: 512, rw5: 398, rw6: 345, rw7: 431, rw8: 400 }
  ];

  const totalPopulation = populationByRW.reduce((sum, item) => sum + item.population, 0);
  const totalHouseholds = populationByRW.reduce((sum, item) => sum + item.households, 0);
  const averageDensity = (populationByRW.reduce((sum, item) => sum + item.density, 0) / populationByRW.length).toFixed(1);

  const summary = [
    { label: 'Total Penduduk', value: totalPopulation.toLocaleString(), icon: Users, color: 'bg-blue-500' },
    { label: 'Total KK', value: totalHouseholds.toLocaleString(), icon: Home, color: 'bg-green-500' },
    { label: 'Rata-rata Kepadatan', value: `${averageDensity}/Ha`, icon: MapPin, color: 'bg-orange-500' },
    { label: 'Wilayah Terpadat', value: 'RW 4', icon: TrendingUp, color: 'bg-purple-500' }
  ];

  return (
    <StatisticsLayout
      title="Statistik Populasi Per Wilayah"
      description="Data sebaran dan kepadatan penduduk berdasarkan wilayah administratif di Desa Fajar Baru Way Kandis"
    >
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {summary.map((item, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{item.label}</p>
                  <p className="text-2xl font-bold text-gray-800">{item.value}</p>
                </div>
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}>
                  <item.icon className="text-white" size={24} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="distribution" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="distribution">Distribusi</TabsTrigger>
            <TabsTrigger value="density">Kepadatan</TabsTrigger>
            <TabsTrigger value="trends">Tren Pertumbuhan</TabsTrigger>
          </TabsList>

          <TabsContent value="distribution" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Population by RW */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Populasi per RW</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={populationByRW}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="rw" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="population" fill="#3b82f6" name="Populasi" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Population by Area */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Populasi per Area</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={populationByVillageArea}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="population"
                        label={({ area, percentage }) => `${area}: ${percentage}%`}
                      >
                        {populationByVillageArea.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} orang`, 'Jumlah']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="density" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Kepadatan Penduduk per RW</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={populationByRW}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="rw" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} orang/Ha`, 'Kepadatan']} />
                    <Bar dataKey="density" fill="#10b981" name="Kepadatan" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Density Details Table */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Detail Kepadatan per RW</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">RW</th>
                      <th className="text-center py-3 px-4">Populasi</th>
                      <th className="text-center py-3 px-4">Jumlah KK</th>
                      <th className="text-center py-3 px-4">Kepadatan (orang/Ha)</th>
                      <th className="text-center py-3 px-4">Kategori</th>
                    </tr>
                  </thead>
                  <tbody>
                    {populationByRW.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-4 font-medium">{row.rw}</td>
                        <td className="text-center py-3 px-4">{row.population}</td>
                        <td className="text-center py-3 px-4">{row.households}</td>
                        <td className="text-center py-3 px-4">{row.density}</td>
                        <td className="text-center py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            row.density > 9 ? 'bg-red-100 text-red-800' :
                            row.density > 8 ? 'bg-orange-100 text-orange-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {row.density > 9 ? 'Tinggi' : row.density > 8 ? 'Sedang' : 'Rendah'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Tren Pertumbuhan Populasi (2020-2024)</h3>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="rw1" stroke="#3b82f6" name="RW 1" />
                    <Line type="monotone" dataKey="rw2" stroke="#10b981" name="RW 2" />
                    <Line type="monotone" dataKey="rw3" stroke="#f59e0b" name="RW 3" />
                    <Line type="monotone" dataKey="rw4" stroke="#ef4444" name="RW 4" />
                    <Line type="monotone" dataKey="rw5" stroke="#8b5cf6" name="RW 5" />
                    <Line type="monotone" dataKey="rw6" stroke="#ec4899" name="RW 6" />
                    <Line type="monotone" dataKey="rw7" stroke="#06b6d4" name="RW 7" />
                    <Line type="monotone" dataKey="rw8" stroke="#84cc16" name="RW 8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Growth Analysis */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Analisis Pertumbuhan</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pertumbuhan Tercepat:</span>
                    <span className="font-bold text-green-600">RW 4 (+13.8%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pertumbuhan Terlambat:</span>
                    <span className="font-bold text-orange-600">RW 6 (+11.3%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rata-rata Pertumbuhan:</span>
                    <span className="font-bold text-blue-600">+12.4%</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Proyeksi 2025</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Estimasi Total Populasi:</span>
                    <span className="font-bold text-blue-600">3,200 orang</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Estimasi Total KK:</span>
                    <span className="font-bold text-green-600">960 KK</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tingkat Pertumbuhan:</span>
                    <span className="font-bold text-purple-600">+2.8% per tahun</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </StatisticsLayout>
  );
};

export default PopulationPerArea;
