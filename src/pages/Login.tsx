
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Lock, Mail, Shield, UserPlus } from 'lucide-react';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for admin login
    if (loginData.email === 'adminfajarbaru@gmail.com' && loginData.password === 'fajarbaru123') {
      // Admin login - redirect to admin login page
      navigate('/admin-login');
      return;
    }
    
    const success = login(loginData.email, loginData.password);
    
    if (success) {
      toast({
        title: "Login Berhasil",
        description: "Selamat datang di Portal Desa Fajar Baru",
      });
      navigate('/citizen/dashboard');
    } else {
      toast({
        title: "Login Gagal",
        description: "Email atau kata sandi tidak valid",
        variant: "destructive",
      });
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Registrasi Gagal",
        description: "Konfirmasi kata sandi tidak sesuai",
        variant: "destructive",
      });
      return;
    }

    if (registerData.password.length < 6) {
      toast({
        title: "Registrasi Gagal",
        description: "Kata sandi minimal 6 karakter",
        variant: "destructive",
      });
      return;
    }

    // Simulate registration success
    toast({
      title: "Registrasi Berhasil",
      description: "Akun Anda telah dibuat. Silakan login untuk melanjutkan.",
    });
    
    // Clear form
    setRegisterData({ name: '', email: '', password: '', confirmPassword: '' });
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
                Masuk atau daftar ke sistem portal desa
              </p>
            </div>

            <Card className="p-6 animate-fade-in">
              <Tabs defaultValue="login" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login" className="flex items-center space-x-2">
                    <User size={16} />
                    <span>Masuk</span>
                  </TabsTrigger>
                  <TabsTrigger value="register" className="flex items-center space-x-2">
                    <UserPlus size={16} />
                    <span>Daftar</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email / NIK</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="login-email"
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
                      <Label htmlFor="login-password">Kata Sandi</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="login-password"
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
                </TabsContent>

                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name">Nama Lengkap</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-name"
                          type="text"
                          placeholder="Masukan nama lengkap"
                          value={registerData.name}
                          onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="Masukan email"
                          value={registerData.email}
                          onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Kata Sandi</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-password"
                          type="password"
                          placeholder="Masukan kata sandi"
                          value={registerData.password}
                          onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-confirm-password">Konfirmasi Kata Sandi</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-confirm-password"
                          type="password"
                          placeholder="Konfirmasi kata sandi"
                          value={registerData.confirmPassword}
                          onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Daftar
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              {/* Admin Login Link */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <button
                    onClick={() => navigate('/admin-login')}
                    className="flex items-center justify-center space-x-2 text-sm text-gray-600 hover:text-emerald-600 mx-auto group"
                  >
                    <Shield size={16} className="group-hover:scale-110 transition-transform" />
                    <span>Login sebagai Administrator</span>
                  </button>
                </div>
              </div>
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
