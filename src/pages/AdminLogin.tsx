
import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Lock, User, AlertCircle } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { admin, login } = useAdmin();
  const navigate = useNavigate();

  // Redirect if already logged in
  if (admin?.isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (login(email, password)) {
        navigate('/admin/dashboard');
      } else {
        setError('Email atau password salah');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-green-600/10"></div>
      
      <Card className="w-full max-w-md p-8 shadow-2xl bg-white/95 backdrop-blur-sm border-0 relative z-10">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Admin Portal
          </h1>
          <p className="text-gray-600">
            Masuk ke sistem administrasi Desa Fajar Baru
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
              <AlertCircle size={16} />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email Administrator</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Masukkan email admin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white py-3"
            disabled={isLoading}
          >
            {isLoading ? 'Memverifikasi...' : 'Masuk ke Admin'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Sistem Administrasi Desa Fajar Baru
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AdminLogin;
