
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Send,
  Facebook,
  Instagram,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      value: 'Jl. Way Kandis No. 123, Bandar Lampung, Lampung 35142',
      color: 'bg-red-500'
    },
    {
      icon: Phone,
      title: 'Telepon',
      value: '(0721) 123-4567',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@fajar-baru.desa.id',
      color: 'bg-blue-500'
    },
    {
      icon: Clock,
      title: 'Jam Pelayanan',
      value: 'Senin-Kamis: 08:00-15:00 WIB, Jumat: 08:00-11:30 WIB',
      color: 'bg-orange-500'
    }
  ];

  const socialMedia = [
    { icon: Facebook, name: 'Facebook', link: '#', color: 'bg-blue-600' },
    { icon: Instagram, name: 'Instagram', link: '#', color: 'bg-pink-500' },
    { icon: Globe, name: 'Website', link: '#', color: 'bg-gray-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hubungi Kami
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami siap melayani dan membantu kebutuhan Anda. Jangan ragu untuk menghubungi 
              kami melalui berbagai cara yang tersedia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-3 text-village-green" size={24} />
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Subjek pesan"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-village hover:opacity-90">
                    <Send size={16} className="mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                        <p className="text-gray-600 text-sm">{info.value}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Media Sosial</h3>
                <div className="flex gap-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity`}
                    >
                      <social.icon className="text-white" size={20} />
                    </a>
                  ))}
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Lokasi</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p>Peta Lokasi Kantor Desa</p>
                    <p className="text-sm">Jl. Way Kandis No. 123</p>
                  </div>
                </div>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 bg-red-50 border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4">Kontak Darurat</h3>
                <div className="space-y-2 text-red-700">
                  <div className="flex items-center">
                    <Phone size={16} className="mr-2" />
                    <span className="font-semibold">Polsek:</span>
                    <span className="ml-2">(0721) 111-2222</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={16} className="mr-2" />
                    <span className="font-semibold">Puskesmas:</span>
                    <span className="ml-2">(0721) 333-4444</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={16} className="mr-2" />
                    <span className="font-semibold">Damkar:</span>
                    <span className="ml-2">113</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
