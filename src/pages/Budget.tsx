
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, FileText, TrendingUp, DollarSign } from 'lucide-react';
import Footer from '@/components/Footer';

const Budget = () => {
  const budgetData = [
    { category: 'Pembangunan', allocated: 2500000000, used: 2100000000 },
    { category: 'Pendidikan', allocated: 800000000, used: 750000000 },
    { category: 'Kesehatan', allocated: 600000000, used: 580000000 },
    { category: 'Infrastruktur', allocated: 1200000000, used: 950000000 },
    { category: 'Sosial', allocated: 400000000, used: 380000000 },
    { category: 'Operasional', allocated: 700000000, used: 650000000 }
  ];

  const revenueData = [
    { source: 'Dana Desa', amount: 3200000000, color: '#059669' },
    { source: 'ADD', amount: 1800000000, color: '#3b82f6' },
    { source: 'PADes', amount: 500000000, color: '#f59e0b' },
    { source: 'Bantuan Provinsi', amount: 700000000, color: '#ef4444' }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.amount, 0);
  const totalBudget = budgetData.reduce((sum, item) => sum + item.allocated, 0);
  const totalUsed = budgetData.reduce((sum, item) => sum + item.used, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              APBDes 2024
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Anggaran Pendapatan dan Belanja Desa Fajar Baru Tahun 2024 - 
              Transparansi dan Akuntabilitas Pengelolaan Keuangan Desa
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Pendapatan</h3>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(totalRevenue)}</p>
            </Card>
            <Card className="p-6 text-center">
              <DollarSign className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Anggaran</h3>
              <p className="text-2xl font-bold text-blue-600">{formatCurrency(totalBudget)}</p>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Realisasi</h3>
              <p className="text-2xl font-bold text-orange-600">{formatCurrency(totalUsed)}</p>
              <p className="text-sm text-gray-500 mt-1">
                {((totalUsed / totalBudget) * 100).toFixed(1)}% dari anggaran
              </p>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Realisasi Anggaran per Bidang</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={budgetData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
                  <Tooltip formatter={(value) => [formatCurrency(Number(value)), '']} />
                  <Bar dataKey="allocated" fill="#e5e7eb" name="Dialokasikan" />
                  <Bar dataKey="used" fill="#059669" name="Direalisasikan" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Sumber Pendapatan</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={revenueData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="amount"
                    label={({ source, percent }) => `${source} ${(percent * 100).toFixed(0)}%`}
                  >
                    {revenueData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [formatCurrency(Number(value)), '']} />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Detailed Budget Table */}
          <Card className="p-6 mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Rincian Anggaran</h3>
              <Button className="bg-gradient-village hover:opacity-90">
                <Download size={16} className="mr-2" />
                Download Laporan
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="pb-3 font-semibold text-gray-800">Bidang</th>
                    <th className="pb-3 font-semibold text-gray-800 text-right">Anggaran</th>
                    <th className="pb-3 font-semibold text-gray-800 text-right">Realisasi</th>
                    <th className="pb-3 font-semibold text-gray-800 text-right">Persentase</th>
                    <th className="pb-3 font-semibold text-gray-800 text-right">Sisa</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetData.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3">{item.category}</td>
                      <td className="py-3 text-right">{formatCurrency(item.allocated)}</td>
                      <td className="py-3 text-right">{formatCurrency(item.used)}</td>
                      <td className="py-3 text-right">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          (item.used / item.allocated) * 100 > 90 
                            ? 'bg-red-100 text-red-700'
                            : (item.used / item.allocated) * 100 > 70
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {((item.used / item.allocated) * 100).toFixed(1)}%
                        </span>
                      </td>
                      <td className="py-3 text-right">{formatCurrency(item.allocated - item.used)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Program Prioritas 2024</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-village-green pl-4">
                  <h4 className="font-semibold text-gray-800">Pembangunan Jalan Desa</h4>
                  <p className="text-sm text-gray-600">Anggaran: Rp 1.2 Miliar</p>
                </div>
                <div className="border-l-4 border-village-blue pl-4">
                  <h4 className="font-semibold text-gray-800">Peningkatan Fasilitas Pendidikan</h4>
                  <p className="text-sm text-gray-600">Anggaran: Rp 500 Juta</p>
                </div>
                <div className="border-l-4 border-village-orange pl-4">
                  <h4 className="font-semibold text-gray-800">Program Kesehatan Masyarakat</h4>
                  <p className="text-sm text-gray-600">Anggaran: Rp 300 Juta</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Dokumentasi</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText size={16} className="mr-2" />
                  APBDes 2024 (PDF)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText size={16} className="mr-2" />
                  Laporan Realisasi Q1 2024
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText size={16} className="mr-2" />
                  Laporan Realisasi Q2 2024
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText size={16} className="mr-2" />
                  Perdes No. 1/2024 tentang APBDes
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Budget;
