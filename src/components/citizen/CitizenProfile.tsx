
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCitizen } from '@/contexts/CitizenContext';
import { Camera, Save, Lock, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CitizenProfile = () => {
  const { citizen, updateProfile } = useCitizen();
  const { toast } = useToast();
  const [formData, setFormData] = useState(citizen || {});
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSaveProfile = () => {
    updateProfile(formData);
    toast({
      title: "Profil berhasil diperbarui",
      description: "Data profil Anda telah disimpan."
    });
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Password tidak cocok",
        description: "Konfirmasi password tidak sesuai dengan password baru.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Password berhasil diubah",
      description: "Password Anda telah diperbarui."
    });
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  if (!citizen) return null;

  return (
    <div className="space-y-6">
      <Tabs defaultValue="personal" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Informasi Pribadi</TabsTrigger>
          <TabsTrigger value="security">Keamanan</TabsTrigger>
          <TabsTrigger value="family">Kartu Keluarga</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Profil Saya
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Photo */}
              <div className="flex items-center space-x-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={citizen.profileImage} />
                  <AvatarFallback className="bg-gradient-village text-white text-xl">
                    {citizen.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Ubah Foto
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">
                    Format: JPG, PNG. Maksimal 2MB
                  </p>
                </div>
              </div>

              {/* Personal Information Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nik">NIK</Label>
                  <Input
                    id="nik"
                    value={formData.nik}
                    onChange={(e) => setFormData({...formData, nik: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthPlace">Tempat Lahir</Label>
                  <Input
                    id="birthPlace"
                    value={formData.birthPlace}
                    onChange={(e) => setFormData({...formData, birthPlace: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthDate">Tanggal Lahir</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Jenis Kelamin</Label>
                  <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Laki-laki">Laki-laki</SelectItem>
                      <SelectItem value="Perempuan">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Agama</Label>
                  <Select value={formData.religion} onValueChange={(value) => setFormData({...formData, religion: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Islam">Islam</SelectItem>
                      <SelectItem value="Kristen">Kristen</SelectItem>
                      <SelectItem value="Katolik">Katolik</SelectItem>
                      <SelectItem value="Hindu">Hindu</SelectItem>
                      <SelectItem value="Buddha">Buddha</SelectItem>
                      <SelectItem value="Konghucu">Konghucu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Status Perkawinan</Label>
                  <Select value={formData.maritalStatus} onValueChange={(value) => setFormData({...formData, maritalStatus: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Belum Menikah">Belum Menikah</SelectItem>
                      <SelectItem value="Menikah">Menikah</SelectItem>
                      <SelectItem value="Cerai Hidup">Cerai Hidup</SelectItem>
                      <SelectItem value="Cerai Mati">Cerai Mati</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Pendidikan Terakhir</Label>
                  <Input
                    id="education"
                    value={formData.education}
                    onChange={(e) => setFormData({...formData, education: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occupation">Pekerjaan</Label>
                  <Input
                    id="occupation"
                    value={formData.occupation}
                    onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Alamat Lengkap</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <Button onClick={handleSaveProfile} className="bg-gradient-village hover:opacity-90">
                <Save className="h-4 w-4 mr-2" />
                Simpan Perubahan
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Keamanan Akun
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Password Saat Ini</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">Password Baru</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Konfirmasi Password Baru</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                />
              </div>

              <Button onClick={handleChangePassword} className="bg-gradient-village hover:opacity-90">
                <Lock className="h-4 w-4 mr-2" />
                Ubah Password
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="family">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Kartu Keluarga
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Informasi Kartu Keluarga</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">No. KK:</span>
                      <p className="font-medium">3271040101900001</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Kepala Keluarga:</span>
                      <p className="font-medium">Muhammad Fajar Baru</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Nama</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">NIK</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Hubungan</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-2">Muhammad Fajar Baru</td>
                        <td className="px-4 py-2">3271040101900001</td>
                        <td className="px-4 py-2">Kepala Keluarga</td>
                        <td className="px-4 py-2">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Aktif</span>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-2">Siti Nurhasanah</td>
                        <td className="px-4 py-2">3271044201920002</td>
                        <td className="px-4 py-2">Istri</td>
                        <td className="px-4 py-2">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Aktif</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Button variant="outline">
                  Ajukan Perubahan Data KK
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CitizenProfile;
