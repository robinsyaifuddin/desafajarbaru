
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Lock } from 'lucide-react';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = login(loginData.email, loginData.password);
    
    if (success) {
      toast({
        title: "Login Berhasil",
        description: "Selamat datang di Portal Desa Fajar Baru",
      });
      navigate('/');
    } else {
      toast({
        title: "Login Gagal",
        description: "Email atau kata sandi tidak valid",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-white" size={32} />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Portal Desa Fajar Baru
              </h1>
              <p className="text-gray-600">
                Masuk ke sistem portal desa
              </p>
            </div>

            <Card className="p-6 animate-fade-in">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email / NIK</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="text"
                      placeholder="Masukan email/NIK"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Kata Sandi</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Masukan kata sandi"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                  Masuk
                </Button>
                
                <div className="text-center">
                  <a href="#" className="text-sm text-emerald-600 hover:underline">
                    Lupa kata sandi?
                  </a>
                </div>
              </form>
            </Card>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Dengan masuk, Anda menyetujui syarat dan ketentuan yang berlaku</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
