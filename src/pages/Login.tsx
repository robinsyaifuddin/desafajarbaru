
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Lock, Phone, MapPin, Users } from 'lucide-react';
import Footer from '@/components/Footer';
import { useCitizen } from '@/contexts/CitizenContext';
import { useAdmin } from '@/contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login: citizenLogin } = useCitizen();
  const { login: adminLogin } = useAdmin();
  
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '', nik: '', phone: '', address: '', email: '', password: ''
  });
  const [loginType, setLoginType] = useState<'citizen' | 'admin'>('citizen');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (loginType === 'citizen') {
      const success = citizenLogin(loginData.email, loginData.password);
      if (success) {
        toast({
          title: "Login berhasil",
          description: "Selamat datang di portal masyarakat!"
        });
        navigate('/citizen/dashboard');
      } else {
        toast({
          title: "Login gagal",
          description: "Email atau password salah.",
          variant: "destructive"
        });
      }
    } else {
      const success = adminLogin(loginData.email, loginData.password);
      if (success) {
        toast({
          title: "Login berhasil",
          description: "Selamat datang di panel admin!"
        });
        navigate('/admin/dashboard');
      } else {
        toast({
          title: "Login gagal",
          description: "Email atau password salah.",
          variant: "destructive"
        });
      }
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt:', registerData);
    toast({
      title: "Pendaftaran berhasil",
      description: "Akun Anda telah dibuat. Silakan login."
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <div className="w-20 h-20 bg-gradient-village rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-white" size={32} />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Portal Desa Fajar Baru
              </h1>
              <p className="text-gray-600">
                Masuk ke sistem atau daftar sebagai warga baru
              </p>
            </div>

            <Card className="p-6 animate-fade-in">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Masuk</TabsTrigger>
                  <TabsTrigger value="register">Daftar</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-4">
                  {/* Login Type Selector */}
                  <div className="flex space-x-2 mb-4">
                    <Button
                      type="button"
                      variant={loginType === 'citizen' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setLoginType('citizen')}
                      className="flex-1"
                    >
                      Masyarakat
                    </Button>
                    <Button
                      type="button"
                      variant={loginType === 'admin' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setLoginType('admin')}
                      className="flex-1"
                    >
                      Admin
                    </Button>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email / NIK</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="text"
                          placeholder={loginType === 'citizen' ? "m.fajarbaru@gmail.com" : "adminfajarbaru@gmail.com"}
                          value={loginData.email}
                          onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                          className="pl-10"
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
                          placeholder={loginType === 'citizen' ? "mfajarbaru" : "fajarbaru123"}
                          value={loginData.password}
                          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-village hover:opacity-90">
                      Masuk sebagai {loginType === 'citizen' ? 'Masyarakat' : 'Admin'}
                    </Button>
                    
                    <div className="text-center">
                      <a href="#" className="text-sm text-village-green hover:underline">
                        Lupa password?
                      </a>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="register" className="space-y-4">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Nama lengkap sesuai KTP"
                          value={registerData.name}
                          onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="nik">NIK</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="nik"
                          type="text"
                          placeholder="Nomor Induk Kependudukan"
                          value={registerData.nik}
                          onChange={(e) => setRegisterData({...registerData, nik: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">No. HP</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Nomor HP aktif"
                          value={registerData.phone}
                          onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Alamat</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="address"
                          type="text"
                          placeholder="RT/RW, Desa Fajar Baru"
                          value={registerData.address}
                          onChange={(e) => setRegisterData({...registerData, address: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reg-email">Email</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="reg-email"
                          type="email"
                          placeholder="Email aktif"
                          value={registerData.email}
                          onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reg-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="reg-password"
                          type="password"
                          placeholder="Buat password"
                          value={registerData.password}
                          onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-village hover:opacity-90">
                      Daftar
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </Card>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Dengan mendaftar, Anda menyetujui syarat dan ketentuan yang berlaku</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
