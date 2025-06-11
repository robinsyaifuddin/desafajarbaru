import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Edit, Save, X, Shield, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
const CitizenProfile = () => {
  const {
    user
  } = useAuth();
  const {
    toast
  } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: user?.name || '',
    nik: '1871010101000001',
    birthPlace: 'Bandar Lampung',
    birthDate: '1990-01-01',
    gender: 'Laki-laki',
    religion: 'Islam',
    maritalStatus: 'Menikah',
    education: 'S1',
    occupation: 'Karyawan Swasta',
    address: 'Jl. Fajar Baru No. 123, RT 01/RW 01',
    phone: '081234567890',
    email: user?.email || ''
  });
  const [familyMembers] = useState([{
    name: 'Muhammad Fajar Baru',
    nik: '1871010101000001',
    relation: 'Kepala Keluarga',
    birthDate: '1990-01-01'
  }, {
    name: 'Siti Fatimah',
    nik: '1871010101000002',
    relation: 'Istri',
    birthDate: '1992-03-15'
  }, {
    name: 'Ahmad Fajar',
    nik: '1871010101000003',
    relation: 'Anak',
    birthDate: '2015-06-20'
  }]);
  const handleSave = () => {
    toast({
      title: "Profil Berhasil Diperbarui",
      description: "Data profil Anda telah disimpan dengan sukses."
    });
    setIsEditing(false);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };
  return <div className="space-y-6">
      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="personal" className="flex items-center space-x-2">
            <Edit size={16} />
            <span className="text-sm">Data Pribadi</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center space-x-2">
            
            <span className="text-sm">Keamanan</span>
          </TabsTrigger>
          <TabsTrigger value="family" className="flex items-center space-x-2">
            <Users size={16} />
            <span className="text-sm">Kartu Keluarga</span>
          </TabsTrigger>
        </TabsList>

        {/* Data Pribadi */}
        <TabsContent value="personal" className="space-y-6">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Informasi Pribadi</h3>
              {!isEditing ? <Button onClick={() => setIsEditing(true)} className="mt-4 md:mt-0 bg-emerald-600 hover:bg-emerald-700">
                  <Edit size={16} className="mr-2" />
                  Edit Profil
                </Button> : <div className="flex space-x-2 mt-4 md:mt-0">
                  <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700">
                    <Save size={16} className="mr-2" />
                    Simpan
                  </Button>
                  <Button variant="outline" onClick={handleCancel}>
                    <X size={16} className="mr-2" />
                    Batal
                  </Button>
                </div>}
            </div>

            {/* Foto Profil */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {user?.name?.charAt(0) || 'U'}
                </div>
                {isEditing && <button className="absolute -bottom-2 -right-2 bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700 transition-colors">
                    <Camera size={16} />
                  </button>}
              </div>
              <p className="text-sm text-gray-600">Foto Profil</p>
            </div>

            {/* Form Data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nama Lengkap</Label>
                <Input id="fullName" value={profileData.fullName} onChange={e => setProfileData({
                ...profileData,
                fullName: e.target.value
              })} disabled={!isEditing} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nik">NIK</Label>
                <Input id="nik" value={profileData.nik} onChange={e => setProfileData({
                ...profileData,
                nik: e.target.value
              })} disabled={!isEditing} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthPlace">Tempat Lahir</Label>
                <Input id="birthPlace" value={profileData.birthPlace} onChange={e => setProfileData({
                ...profileData,
                birthPlace: e.target.value
              })} disabled={!isEditing} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthDate">Tanggal Lahir</Label>
                <Input id="birthDate" type="date" value={profileData.birthDate} onChange={e => setProfileData({
                ...profileData,
                birthDate: e.target.value
              })} disabled={!isEditing} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Jenis Kelamin</Label>
                <Select value={profileData.gender} onValueChange={value => setProfileData({
                ...profileData,
                gender: value
              })} disabled={!isEditing}>
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
                <Label htmlFor="religion">Agama</Label>
                <Select value={profileData.religion} onValueChange={value => setProfileData({
                ...profileData,
                religion: value
              })} disabled={!isEditing}>
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
                <Label htmlFor="maritalStatus">Status Perkawinan</Label>
                <Select value={profileData.maritalStatus} onValueChange={value => setProfileData({
                ...profileData,
                maritalStatus: value
              })} disabled={!isEditing}>
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
                <Select value={profileData.education} onValueChange={value => setProfileData({
                ...profileData,
                education: value
              })} disabled={!isEditing}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SD">SD</SelectItem>
                    <SelectItem value="SMP">SMP</SelectItem>
                    <SelectItem value="SMA">SMA</SelectItem>
                    <SelectItem value="D3">D3</SelectItem>
                    <SelectItem value="S1">S1</SelectItem>
                    <SelectItem value="S2">S2</SelectItem>
                    <SelectItem value="S3">S3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation">Pekerjaan</Label>
                <Input id="occupation" value={profileData.occupation} onChange={e => setProfileData({
                ...profileData,
                occupation: e.target.value
              })} disabled={!isEditing} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input id="phone" value={profileData.phone} onChange={e => setProfileData({
                ...profileData,
                phone: e.target.value
              })} disabled={!isEditing} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={profileData.email} onChange={e => setProfileData({
                ...profileData,
                email: e.target.value
              })} disabled={!isEditing} />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address">Alamat Lengkap</Label>
                <Textarea id="address" value={profileData.address} onChange={e => setProfileData({
                ...profileData,
                address: e.target.value
              })} disabled={!isEditing} rows={3} />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Keamanan Akun */}
        <TabsContent value="security">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Keamanan Akun</h3>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-700">Ubah Kata Sandi</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Kata Sandi Saat Ini</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Kata Sandi Baru</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi Baru</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Ubah Kata Sandi
                </Button>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-700 mb-4">Pertanyaan Keamanan</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="securityQuestion">Pertanyaan Keamanan</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih pertanyaan keamanan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pet">Apa nama hewan peliharaan pertama Anda?</SelectItem>
                        <SelectItem value="school">Apa nama sekolah dasar Anda?</SelectItem>
                        <SelectItem value="mother">Apa nama gadis ibu Anda?</SelectItem>
                        <SelectItem value="city">Di kota mana Anda dilahirkan?</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="securityAnswer">Jawaban</Label>
                    <Input id="securityAnswer" type="text" />
                  </div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Simpan Pertanyaan Keamanan
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Kartu Keluarga */}
        <TabsContent value="family">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Kartu Keluarga (KK)</h3>
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Ajukan Perubahan Data KK
              </Button>
            </div>
            
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Nomor KK: 1871010101000001</h4>
              <p className="text-blue-700 text-sm">Kepala Keluarga: Muhammad Fajar Baru</p>
              <p className="text-blue-700 text-sm">Alamat: Jl. Fajar Baru No. 123, RT 01/RW 01, Desa Fajar Baru</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Anggota Keluarga</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">NIK</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hubungan</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal Lahir</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {familyMembers.map((member, index) => <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {member.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {member.nik}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {member.relation}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {member.birthDate}
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>;
};
export default CitizenProfile;