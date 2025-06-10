
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Plus,
  Download,
  Upload,
  Filter,
  Calendar,
  PieChart,
  BarChart3
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Cell,
  Pie
} from 'recharts';

const AdminFinance = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('2024');

  const budgetData = [
    { category: 'Belanja Pegawai', budget: 450000000, actual: 432000000, percentage: 96 },
    { category: 'Belanja Barang/Jasa', budget: 320000000, actual: 298000000, percentage: 93 },
    { category: 'Belanja Modal', budget: 280000000, actual: 245000000, percentage: 88 },
    { category: 'Belanja Bantuan Sosial', budget: 150000000, actual: 148000000, percentage: 99 },
    { category: 'Belanja Tidak Terduga', budget: 50000000, actual: 23000000, percentage: 46 }
  ];

  const monthlyExpenses = [
    { month: 'Jan', amount: 125000000 },
    { month: 'Feb', amount: 132000000 },
    { month: 'Mar', amount: 118000000 },
    { month: 'Apr', amount: 145000000 },
    { month: 'May', amount: 156000000 },
    { month: 'Jun', amount: 167000000 }
  ];

  const revenueData = [
    { source: 'Dana Desa', amount: 850000000, color: '#3b82f6' },
    { source: 'ADD (Alokasi Dana Desa)', amount: 320000000, color: '#10b981' },
    { source: 'PADes', amount: 125000000, color: '#f59e0b' },
    { source: 'Bantuan Prov/Kab', amount: 180000000, color: '#8b5cf6' },
    { source: 'Lain-lain', amount: 75000000, color: '#ef4444' }
  ];

  const transactions = [
    {
      id: 1,
      date: '2024-06-10',
      description: 'Pembayaran Honor Aparatur Desa',
      category: 'Belanja Pegawai',
      type: 'expense',
      amount: 25000000,
      status: 'Completed'
    },
    {
      id: 2,
      date: '2024-06-09',
      description: 'Penerimaan Dana Desa Tahap II',
      category: 'Dana Desa',
      type: 'income',
      amount: 425000000,
      status: 'Completed'
    },
    {
      id: 3,
      date: '2024-06-08',
      description: 'Pembelian ATK Kantor Desa',
      category: 'Belanja Barang/Jasa',
      type: 'expense',
      amount: 3500000,
      status: 'Completed'
    },
    {
      id: 4,
      date: '2024-06-07',
      description: 'Bantuan Sosial untuk Lansia',
      category: 'Belanja Bantuan Sosial',
      type: 'expense',
      amount: 15000000,
      status: 'Pending'
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Keuangan</h2>
          <p className="text-gray-600">Manajemen keuangan dan anggaran desa</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload size={20} className="mr-2" />
            Import Data
          </Button>
          <Button variant="outline">
            <Download size={20} className="mr-2" />
            Export Laporan
          </Button>
          <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
            <Plus size={20} className="mr-2" />
            Transaksi Baru
          </Button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Anggaran</p>
              <p className="text-2xl font-bold text-gray-800">Rp 1.25M</p>
              <p className="text-sm text-blue-600 flex items-center mt-1">
                <Calendar size={16} className="mr-1" />
                Tahun 2024
              </p>
            </div>
            <DollarSign className="h-12 w-12 text-blue-600" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Pendapatan</p>
              <p className="text-2xl font-bold text-gray-800">Rp 1.55M</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp size={16} className="mr-1" />
                +12.5% dari target
              </p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Pengeluaran</p>
              <p className="text-2xl font-bold text-gray-800">Rp 1.15M</p>
              <p className="text-sm text-orange-600 flex items-center mt-1">
                <TrendingDown size={16} className="mr-1" />
                92% dari anggaran
              </p>
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
              <TrendingDown className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Saldo Kas</p>
              <p className="text-2xl font-bold text-gray-800">Rp 400K</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                Tersedia
              </p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 text-xl">💰</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget vs Actual */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Anggaran vs Realisasi</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={budgetData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" angle={-45} textAnchor="end" height={80} />
              <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Bar dataKey="budget" fill="#e5e7eb" name="Anggaran" />
              <Bar dataKey="actual" fill="#3b82f6" name="Realisasi" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Revenue Sources */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sumber Pendapatan</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPieChart>
              <Pie
                data={revenueData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="amount"
                nameKey="source"
              >
                {revenueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
            </RechartsPieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-1 gap-2 mt-4">
            {revenueData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.source}</span>
                </div>
                <span className="text-sm font-medium">{formatCurrency(item.amount)}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Monthly Expenses Trend */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Tren Pengeluaran Bulanan</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyExpenses}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Bar dataKey="amount" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Transaksi Terbaru</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              Lihat Semua
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Tanggal</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Deskripsi</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Kategori</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Jenis</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Jumlah</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 text-gray-600">{transaction.date}</td>
                  <td className="py-4 px-4 font-medium">{transaction.description}</td>
                  <td className="py-4 px-4 text-gray-600">{transaction.category}</td>
                  <td className="py-4 px-4">
                    <Badge className={transaction.type === 'income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                      {transaction.type === 'income' ? 'Pemasukan' : 'Pengeluaran'}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 font-mono">
                    <span className={transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                      {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                      {transaction.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminFinance;
