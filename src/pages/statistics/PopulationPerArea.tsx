
import React from 'react';
import { StatisticsLayout } from '@/components/StatisticsLayout';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { MapPin, Users, TrendingUp, Home } from 'lucide-react';

const PopulationPerArea = () => {
  const rwData = [
    { rw: 'RW 1', population: 420, area: 0.8, density: 525, male: 215, female: 205, families: 126 },
    { rw: 'RW 2', population: 456, area: 0.9, density: 507, male: 234, female: 222, families: 138 },
    { rw: 'RW 3', population: 389, area: 0.7, density: 556, male: 198, female: 191, families: 117 },
    { rw: 'RW 4', population: 523, area: 1.1, density: 475, male: 267, female: 256, families: 157 },
    { rw: 'RW 5', population: 398, area: 0.8, density: 498, male: 203, female: 195, families: 119 },
    { rw: 'RW 6', population: 445, area: 0.9, density: 494, male: 227, female: 218, families: 134 },
    { rw: 'RW 7', population: 367, area: 0.7, density: 524, male: 187, female: 180, families: 110 },
    { rw: 'RW 8', population: 378, area: 0.8, density: 473, male: 193, female: 185, families: 114 }
  ];

  const rtData = [
    { rt: 'RT 01/RW 01', population: 89, families: 27 },
    { rt: 'RT 02/RW 01', population: 95, families: 29 },
    { rt: 'RT 03/RW 01', population: 87, families: 26 },
    { rt: 'RT 04/RW 01', population: 92, families: 28 },
    { rt: 'RT 05/RW 01', population: 84, families: 25 },
    { rt: 'RT 01/RW 02', population: 98, families: 30 },
    { rt: 'RT 02/RW 02', population: 102, families: 31 },
    { rt: 'RT 03/RW 02', population: 89, families: 27 },
    { rt: 'RT 04/RW 02', population: 94, families: 28 },
    { rt: 'RT 05/RW 02', population: 96, families: 29 }
  ];

  const populationGrowth = [
    { year: '2020', total: 2634, rw1: 398, rw2: 432, rw3: 367, rw4: 489 },
    { year: '2021', total: 2698, rw1: 405, rw2: 441, rw3: 374, rw4: 501 },
    { year: '2022', total: 2756, rw1: 412, rw2: 448, rw3: 381, rw4: 512 },
    { year: '2023', total: 2801, rw1: 416, rw2: 452, rw3: 385, rw4: 518 },
    { year: '2024', total: 2847, rw1: 420, rw2: 456, rw3: 389, rw4: 523 }
  ];

  const densityData = rwData.map(rw => ({
    name: rw.rw,
    density: rw.density,
    color: rw.density > 520 ? '#ef4444' : rw.density > 500 ? '#f59e0b' : '#10b981'
  }));

  const summary = [
    { label: 'Total Wilayah', value: '8 RW', icon: MapPin, color: 'bg-blue-500' },
    { label: 'Kepadatan Rata-rata', value: '506/km²', icon: Users, color: 'bg-green-500' },
    { label: 'RW Terpadat', value: 'RW 3 (556/km²)', icon: TrendingUp, color: 'bg-orange-500' }
  ];

  return (
    <StatisticsLayout 
      title="Statistik Populasi Per Wilayah"
      description="Data distribusi dan kepadatan penduduk berdasarkan wilayah RW dan RT di Desa Fajar Baru Way Kandis"
    >
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Population by RW */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Populasi per RW</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={rwData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="rw" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [
                      name === 'population' ? `${value} jiwa` : 
                      name === 'families' ? `${value} KK` : value, 
                      name === 'population' ? 'Populasi' : 
                      name === 'families' ? 'Jumlah KK' : name
                    ]} 
                  />
                  <Bar dataKey="population" fill="#3b82f6" name="population" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Population Density */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Kepadatan Penduduk per RW</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={densityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} jiwa/km²`, 'Kepadatan']} />
                  <Bar dataKey="density" fill={(entry) => entry.color} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded" />
                <span>Rendah (&lt;500)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded" />
                <span>Sedang (500-520)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded" />
                <span>Tinggi (&gt;520)</span>
              </div>
            </div>
          </Card>

          {/* Population Growth Trend */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tren Pertumbuhan Penduduk 5 Tahun Terakhir</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={populationGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="total" stroke="#3b82f6" strokeWidth={3} name="Total Desa" />
                  <Line type="monotone" dataKey="rw1" stroke="#10b981" strokeWidth={2} name="RW 1" />
                  <Line type="monotone" dataKey="rw2" stroke="#f59e0b" strokeWidth={2} name="RW 2" />
                  <Line type="monotone" dataKey="rw3" stroke="#ef4444" strokeWidth={2} name="RW 3" />
                  <Line type="monotone" dataKey="rw4" stroke="#8b5cf6" strokeWidth={2} name="RW 4" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Gender Distribution by RW */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Distribusi Gender per RW</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rwData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rw" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="male" fill="#3b82f6" name="Laki-laki" />
                <Bar dataKey="female" fill="#ec4899" name="Perempuan" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Detailed RW Statistics Table */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Detail Statistik per RW</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">RW</th>
                  <th className="text-center py-3 px-4">Populasi</th>
                  <th className="text-center py-3 px-4">Laki-laki</th>
                  <th className="text-center py-3 px-4">Perempuan</th>
                  <th className="text-center py-3 px-4">Jumlah KK</th>
                  <th className="text-center py-3 px-4">Luas (km²)</th>
                  <th className="text-center py-3 px-4">Kepadatan</th>
                </tr>
              </thead>
              <tbody>
                {rwData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{row.rw}</td>
                    <td className="text-center py-3 px-4 font-bold">{row.population}</td>
                    <td className="text-center py-3 px-4 text-blue-600">{row.male}</td>
                    <td className="text-center py-3 px-4 text-pink-600">{row.female}</td>
                    <td className="text-center py-3 px-4">{row.families}</td>
                    <td className="text-center py-3 px-4">{row.area}</td>
                    <td className="text-center py-3 px-4">
                      <span className={`px-2 py-1 rounded text-sm font-medium ${
                        row.density > 520 ? 'bg-red-100 text-red-700' :
                        row.density > 500 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {row.density}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* RT Sample Data */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sampel Data RT (RW 1 & 2)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">RT di RW 1</h4>
              <div className="space-y-2">
                {rtData.slice(0, 5).map((rt, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span className="font-medium text-blue-800">{rt.rt}</span>
                    <div className="text-right">
                      <p className="font-bold text-blue-600">{rt.population} jiwa</p>
                      <p className="text-sm text-blue-500">{rt.families} KK</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">RT di RW 2</h4>
              <div className="space-y-2">
                {rtData.slice(5, 10).map((rt, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="font-medium text-green-800">{rt.rt}</span>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{rt.population} jiwa</p>
                      <p className="text-sm text-green-500">{rt.families} KK</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </StatisticsLayout>
  );
};

export default PopulationPerArea;
