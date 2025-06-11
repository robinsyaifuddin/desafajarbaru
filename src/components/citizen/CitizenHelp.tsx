import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCircle, Search, Phone, Mail, MessageCircle, Book, Video, FileText } from 'lucide-react';
const CitizenHelp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const faqData = [{
    category: 'Akun & Login',
    items: [{
      question: 'Bagaimana cara mengubah kata sandi akun saya?',
      answer: 'Untuk mengubah kata sandi: 1) Masuk ke tab "Profil Saya", 2) Pilih "Keamanan Akun", 3) Isi kata sandi lama dan kata sandi baru, 4) Klik "Ubah Kata Sandi".'
    }, {
      question: 'Saya lupa kata sandi, bagaimana cara mengatasinya?',
      answer: 'Klik "Lupa kata sandi?" pada halaman login, masukkan email/NIK Anda, dan ikuti instruksi yang dikirim ke email Anda.'
    }, {
      question: 'Bagaimana cara memperbarui data profil saya?',
      answer: 'Masuk ke tab "Profil Saya", klik tombol "Edit Profil", ubah data yang diperlukan, lalu klik "Simpan".'
    }]
  }, {
    category: 'Layanan Publik',
    items: [{
      question: 'Dokumen apa saja yang diperlukan untuk mengajukan surat keterangan domisili?',
      answer: 'Dokumen yang diperlukan: 1) Fotokopi KTP, 2) Fotokopi Kartu Keluarga, 3) Surat pengantar dari RT/RW, 4) Pas foto 3x4 (2 lembar).'
    }, {
      question: 'Berapa lama waktu pemrosesan pengajuan layanan?',
      answer: 'Waktu pemrosesan bervariasi: Surat keterangan domisili (3 hari kerja), Surat pengantar SKCK (1 hari kerja), Surat keterangan usaha (2 hari kerja). Anda akan mendapat notifikasi ketika dokumen sudah selesai.'
    }, {
      question: 'Bagaimana cara mengunduh dokumen yang sudah selesai?',
      answer: 'Masuk ke tab "Layanan Publik" > "Unduh Dokumen". Dokumen yang sudah selesai akan muncul dengan tombol "Unduh". Klik tombol tersebut untuk mengunduh dokumen.'
    }, {
      question: 'Apakah ada biaya untuk mengajukan layanan online?',
      answer: 'Sebagian besar layanan gratis. Untuk layanan tertentu yang memerlukan biaya, akan ada pemberitahuan dan instruksi pembayaran sebelum pengajuan diproses.'
    }]
  }, {
    category: 'Pengaduan & Aspirasi',
    items: [{
      question: 'Apa perbedaan antara pengaduan dan aspirasi?',
      answer: 'Pengaduan adalah laporan terkait masalah atau keluhan (jalan rusak, fasilitas rusak, dll). Aspirasi adalah saran atau usulan untuk kemajuan desa (pembangunan fasilitas baru, program baru, dll).'
    }, {
      question: 'Berapa lama tanggapan pengaduan/aspirasi saya?',
      answer: 'Pengaduan/aspirasi akan ditanggapi dalam 3-7 hari kerja. Anda akan mendapat notifikasi melalui sistem dan dapat melihat status di tab "Pengaduan & Aspirasi".'
    }, {
      question: 'Apakah pengaduan saya akan ditindaklanjuti?',
      answer: 'Semua pengaduan akan dikaji dan ditindaklanjuti sesuai kewenangan desa. Jika memerlukan koordinasi dengan instansi lain, akan disampaikan informasinya kepada Anda.'
    }]
  }, {
    category: 'Partisipasi',
    items: [{
      question: 'Bagaimana cara mengikuti polling atau survei?',
      answer: 'Masuk ke tab "Partisipasi", pilih polling/survei yang aktif, baca pertanyaan dengan seksama, pilih jawaban Anda, dan klik "Pilih" untuk memberikan suara.'
    }, {
      question: 'Apakah saya bisa mengubah pilihan dalam polling?',
      answer: 'Setelah memberikan suara, Anda tidak dapat mengubah pilihan. Pastikan pilihan Anda sudah tepat sebelum mengklik tombol "Pilih".'
    }, {
      question: 'Bagaimana cara mendaftar untuk menghadiri kegiatan desa?',
      answer: 'Di tab "Partisipasi" bagian "Kegiatan Mendatang", klik tombol "Daftar Hadir" pada kegiatan yang ingin Anda ikuti.'
    }]
  }];
  const tutorials = [{
    title: 'Cara Mengajukan Surat Keterangan Domisili',
    type: 'video',
    duration: '3 menit',
    description: 'Panduan lengkap mengajukan surat keterangan domisili melalui portal online'
  }, {
    title: 'Mengelola Profil dan Data Pribadi',
    type: 'artikel',
    duration: '5 menit baca',
    description: 'Cara memperbarui dan mengelola data profil Anda dengan aman'
  }, {
    title: 'Menggunakan Fitur Pengaduan dan Aspirasi',
    type: 'video',
    duration: '4 menit',
    description: 'Tutorial lengkap cara menyampaikan pengaduan dan aspirasi'
  }, {
    title: 'Berpartisipasi dalam Polling dan Survei',
    type: 'artikel',
    duration: '3 menit baca',
    description: 'Panduan berpartisipasi dalam kegiatan polling dan survei desa'
  }];
  const contactInfo = [{
    type: 'phone',
    title: 'Telepon Kantor Desa',
    value: '(0721) 123-4567',
    description: 'Senin - Jumat, 08:00 - 16:00 WIB',
    icon: Phone
  }, {
    type: 'email',
    title: 'Email Resmi',
    value: 'info@fajar-baru.desa.id',
    description: 'Untuk pertanyaan umum dan bantuan teknis',
    icon: Mail
  }, {
    type: 'whatsapp',
    title: 'WhatsApp Layanan',
    value: '+62 812-3456-7890',
    description: 'Bantuan cepat via WhatsApp',
    icon: MessageCircle
  }];
  const filteredFAQ = faqData.map(category => ({
    ...category,
    items: category.items.filter(item => item.question.toLowerCase().includes(searchTerm.toLowerCase()) || item.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(category => category.items.length > 0);
  return <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center mb-6">
          <HelpCircle className="text-emerald-600 mr-3" size={24} />
          <h3 className="text-xl font-semibold text-gray-800">Bantuan & FAQ</h3>
        </div>

        <Tabs defaultValue="faq" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="faq" className="text-sm">FAQ</TabsTrigger>
            <TabsTrigger value="tutorials" className="text-sm">Tutorial</TabsTrigger>
            <TabsTrigger value="contact" className="text-sm">Kontak</TabsTrigger>
          </TabsList>

          {/* FAQ Section */}
          <TabsContent value="faq" className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input placeholder="Cari pertanyaan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10" />
            </div>

            <div className="space-y-6">
              {filteredFAQ.map((category, categoryIndex) => <Card key={categoryIndex} className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Book className="text-emerald-600 mr-2" size={20} />
                    {category.category}
                  </h4>
                  
                  <Accordion type="single" collapsible>
                    {category.items.map((item, itemIndex) => <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
                        <AccordionTrigger className="text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>)}
                  </Accordion>
                </Card>)}
            </div>

            {filteredFAQ.length === 0 && searchTerm && <div className="text-center py-8">
                <Search className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500">Tidak ditemukan hasil untuk "{searchTerm}"</p>
              </div>}
          </TabsContent>

          {/* Tutorials Section */}
          <TabsContent value="tutorials" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tutorials.map((tutorial, index) => <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {tutorial.type === 'video' ? <Video className="text-emerald-600" size={24} /> : <FileText className="text-emerald-600" size={24} />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">{tutorial.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{tutorial.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{tutorial.duration}</span>
                        <Button size="sm" variant="outline" className="hover:bg-emerald-50">
                          {tutorial.type === 'video' ? 'Tonton' : 'Baca'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>)}
            </div>
          </TabsContent>

          {/* Contact Section */}
          <TabsContent value="contact" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <IconComponent className="text-emerald-600 mx-auto mb-4" size={32} />
                    <h4 className="font-semibold text-gray-800 mb-2">{contact.title}</h4>
                    <p className="text-lg font-mono text-emerald-600 mb-2">{contact.value}</p>
                    <p className="text-sm text-gray-600">{contact.description}</p>
                    <Button variant="outline" size="sm" className="mt-4 hover:bg-emerald-50">
                      {contact.type === 'phone' ? 'Telepon' : contact.type === 'email' ? 'Kirim Email' : 'Buka WhatsApp'}
                    </Button>
                  </Card>;
            })}
            </div>

            <Card className="p-6 bg-emerald-50">
              <h4 className="font-semibold text-gray-800 mb-4">Jam Pelayanan</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Hari Kerja</p>
                  <p className="text-gray-600">Senin - Jumat: 08:00 - 16:00 WIB</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Sabtu</p>
                  <p className="text-gray-600">08:00 - 12:00 WIB</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Layanan Darurat</p>
                  <p className="text-gray-600">24 jam via WhatsApp</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Online Support</p>
                  <p className="text-gray-600">24/7 melalui portal</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
    </div>;
};
export default CitizenHelp;