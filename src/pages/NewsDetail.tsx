import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, User, Eye, Clock, Share2, MessageCircle, Heart, Facebook, Twitter, Linkedin, Link as LinkIcon, ArrowLeft } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
}

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Ahmad Ridwan',
      content: 'Alhamdulillah, sangat bangga dengan prestasi Desa Fajar Baru. Semoga terus maju dan berkembang untuk kesejahteraan masyarakat.',
      date: '2 jam yang lalu',
      likes: 12
    },
    {
      id: 2,
      author: 'Siti Nurhaliza',
      content: 'Program BUMDes Madani sangat bagus untuk ketahanan pangan. Mari kita dukung program-program desa untuk kemajuan bersama.',
      date: '5 jam yang lalu',
      likes: 8
    },
    {
      id: 3,
      author: 'Budi Santoso',
      content: 'Terima kasih kepada Kepala Desa dan jajarannya yang telah bekerja keras. Mudah-mudahan semua program dapat terlaksana dengan baik.',
      date: '1 hari yang lalu',
      likes: 15
    }
  ]);
  const [newComment, setNewComment] = useState('');
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Complete news data with detailed content for all articles
  const newsItems = {
    1: {
      id: 1,
      title: 'Desa Fajar Baru Raih Status Desa Maju dengan IDM 0.7578',
      category: 'Pemerintahan',
      excerpt: 'Dalam Musyawarah Desa 2024, Desa Fajar Baru berhasil meraih status Desa Maju dengan Indeks Desa Membangun (IDM) 0.7578 dari Kementerian Desa RI.',
      content: `
        <div class="prose max-w-none">
          <p class="text-lg font-medium mb-6">Pencapaian luar biasa telah diraih oleh Desa Fajar Baru, Kecamatan Jati Agung, Lampung Selatan. Dalam Musyawarah Desa yang digelar pada tahun 2024, desa yang dipimpin oleh M. Agus Budiantoro, S.HI, MH ini berhasil meraih status "Desa Maju" dengan Indeks Desa Membangun (IDM) sebesar 0.7578.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Indeks Desa Membangun (IDM)</h3>
          <p class="mb-4">Indeks Desa Membangun (IDM) merupakan indeks komposit yang menggambarkan tingkat perkembangan desa berdasarkan tiga dimensi utama: Dimensi Sosial, Dimensi Ekonomi, dan Dimensi Ekologi/Lingkungan. Dengan skor 0.7578, Desa Fajar Baru berhasil masuk dalam kategori "Desa Maju" yang menunjukkan pencapaian signifikan dalam berbagai aspek pembangunan desa.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Faktor Pendukung Keberhasilan</h3>
          <p class="mb-4">Keberhasilan ini tidak lepas dari berbagai program pembangunan yang telah dilaksanakan secara konsisten, meliputi:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Pembangunan infrastruktur jalan desa dan lingkungan di semua dusun</li>
            <li>Pengembangan BUMDes "Madani" dengan fokus pada ketahanan pangan</li>
            <li>Program bantuan sosial yang tepat sasaran</li>
            <li>Peningkatan partisipasi masyarakat dalam pembangunan</li>
            <li>Penguatan tata kelola pemerintahan desa yang transparan</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Komitmen Kepemimpinan</h3>
          <p class="mb-4">Kepala Desa M. Agus Budiantoro yang menjabat periode 2019-2027 menyatakan bahwa pencapaian ini merupakan hasil kerja keras seluruh elemen masyarakat. "Status Desa Maju ini bukan hanya prestasi, tetapi juga tanggung jawab untuk terus meningkatkan kualitas hidup masyarakat," ujarnya.</p>
          
          <p class="mb-4">Beliau yang juga menjabat sebagai Sekretaris APDESI Provinsi Lampung periode 2023-2028 menambahkan bahwa berbagai penghargaan yang telah diraih desa, termasuk reward kinerja 3 tahun berturut-turut dari Kementerian Desa RI, menjadi motivasi untuk terus berinovasi dalam pembangunan desa.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Rencana Pembangunan Berkelanjutan</h3>
          <p class="mb-4">Dengan status Desa Maju yang telah diraih, Desa Fajar Baru berkomitmen untuk terus melanjutkan program-program pembangunan berkelanjutan. Fokus utama untuk periode mendatang meliputi:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Percepatan penurunan stunting melalui program ketahanan pangan</li>
            <li>Pengembangan sektor pariwisata dan ekonomi kreatif</li>
            <li>Peningkatan kualitas sumber daya manusia</li>
            <li>Penguatan kelembagaan desa</li>
            <li>Pembangunan infrastruktur yang ramah lingkungan</li>
          </ul>
          
          <p class="mt-6">Pencapaian status Desa Maju dengan IDM 0.7578 ini diharapkan dapat menjadi inspirasi bagi desa-desa lain di Kabupaten Lampung Selatan untuk terus berkomitmen dalam pembangunan yang berkelanjutan dan berpusat pada kesejahteraan masyarakat.</p>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
      date: '25 Januari 2024',
      author: 'M. Agus Budiantoro',
      views: 245,
      readTime: '8 min'
    },
    2: {
      id: 2,
      title: 'BUMDes Madani Kembangkan Program Hidroponik dengan Dana 296 Juta',
      category: 'UMKM',
      excerpt: 'Dana desa dialokasikan 20% untuk ketahanan pangan melalui pengembangan BUMDes Madani yang fokus pada sektor hidroponik, pembibitan, dan kemitraan jual gabah.',
      content: `
        <div class="prose max-w-none">
          <p class="text-lg font-medium mb-6">Badan Usaha Milik Desa (BUMDes) "Madani" Desa Fajar Baru kembali menunjukkan komitmennya dalam mendukung ketahanan pangan melalui program inovatif hidroponik. Dengan alokasi dana sebesar Rp 296 juta dari dana desa, program ini diharapkan dapat meningkatkan produktivitas pertanian dan kesejahteraan masyarakat.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Alokasi Dana untuk Ketahanan Pangan</h3>
          <p class="mb-4">Sesuai dengan kebijakan pemerintah desa, 20% dari total dana desa dialokasikan khusus untuk program ketahanan pangan. Dana sebesar Rp 296 juta ini akan digunakan untuk:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Pengembangan sistem hidroponik modern</li>
            <li>Program pembibitan tanaman hortikultura</li>
            <li>Kemitraan jual beli gabah dengan petani lokal</li>
            <li>Pelatihan dan pendampingan teknologi pertanian</li>
            <li>Pengadaan peralatan dan sarana produksi</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Program Hidroponik Unggulan</h3>
          <p class="mb-4">Program hidroponik yang dikembangkan BUMDes Madani merupakan terobosan dalam bidang pertanian modern. Sistem ini memiliki beberapa keunggulan:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Penggunaan air yang lebih efisien</li>
            <li>Produktivitas yang lebih tinggi dalam lahan terbatas</li>
            <li>Kualitas hasil panen yang lebih baik</li>
            <li>Dapat dilakukan sepanjang tahun</li>
            <li>Ramah lingkungan dan berkelanjutan</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Kemitraan dengan Petani Lokal</h3>
          <p class="mb-4">Selain program hidroponik, BUMDes Madani juga mengembangkan kemitraan strategis dengan petani lokal melalui program jual beli gabah. Program ini bertujuan untuk:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Memberikan kepastian pasar bagi petani</li>
            <li>Menstabilkan harga gabah di tingkat petani</li>
            <li>Meningkatkan nilai tambah produk pertanian</li>
            <li>Memperkuat rantai pasok pangan lokal</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Dampak Ekonomi dan Sosial</h3>
          <p class="mb-4">Program BUMDes Madani ini diharapkan memberikan dampak positif yang signifikan, antara lain:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Peningkatan pendapatan masyarakat</li>
            <li>Penciptaan lapangan kerja baru</li>
            <li>Transfer teknologi kepada masyarakat</li>
            <li>Peningkatan ketersediaan pangan lokal</li>
            <li>Penguatan ekonomi desa secara keseluruhan</li>
          </ul>
          
          <p class="mt-6">Dengan komitmen yang kuat dari pemerintah desa dan partisipasi aktif masyarakat, BUMDes Madani optimis dapat mencapai target yang telah ditetapkan dan berkontribusi nyata dalam mewujudkan ketahanan pangan di Desa Fajar Baru.</p>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80',
      date: '23 Januari 2024',
      author: 'Tim BUMDes',
      views: 189,
      readTime: '6 min'
    },
    3: {
      id: 3,
      title: 'Pembangunan Masjid As-Safinatu Al-Abbas Dimulai',
      category: 'Kegiatan',
      excerpt: 'Peletakan batu pertama Masjid As-Safinatu Al-Abbas dilaksanakan pada 31 Maret 2023 dengan wakaf tanah 600 m² dan dana awal Rp 120 juta.',
      content: `
        <div class="prose max-w-none">
          <p class="text-lg font-medium mb-6">Sebuah momentum bersejarah bagi masyarakat Desa Fajar Baru telah terjadi pada tanggal 31 Maret 2023, yakni peletakan batu pertama pembangunan Masjid As-Safinatu Al-Abbas. Pembangunan masjid ini merupakan wujud nyata dari semangat gotong royong dan kebersamaan warga desa dalam membangun sarana ibadah yang representatif.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Wakaf Tanah dan Dana Awal</h3>
          <p class="mb-4">Pembangunan masjid ini dimulai dengan kebaikan hati Hj. Yusuf Abbas yang mewakafkan tanah seluas 600 m² untuk lokasi masjid. Selain itu, dana awal sebesar Rp 120 juta juga telah terkumpul melalui dukungan yayasan Arab dan sumbangan masyarakat setempat.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Desain dan Konsep Bangunan</h3>
          <p class="mb-4">Masjid As-Safinatu Al-Abbas dirancang dengan konsep arsitektur Islam modern yang memadukan nilai-nilai tradisional dengan kebutuhan masa kini. Beberapa fitur unggulan dari desain masjid ini meliputi:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Kapasitas jamaah hingga 500 orang</li>
            <li>Ruang serbaguna untuk kegiatan keagamaan</li>
            <li>Fasilitas wudhu yang memadai</li>
            <li>Area parkir yang luas</li>
            <li>Taman dan ruang terbuka hijau</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Dukungan Masyarakat</h3>
          <p class="mb-4">Antusiasme masyarakat Desa Fajar Baru terhadap pembangunan masjid ini sangat tinggi. Hal ini terlihat dari:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Partisipasi aktif dalam gotong royong pembangunan</li>
            <li>Sumbangan dana secara sukarela dari berbagai kalangan</li>
            <li>Dukungan moral dan doa dari seluruh warga</li>
            <li>Komitmen untuk menjaga dan merawat masjid</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Tahapan Pembangunan</h3>
          <p class="mb-4">Pembangunan Masjid As-Safinatu Al-Abbas dilaksanakan secara bertahap dengan rencana sebagai berikut:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Tahap I: Pembangunan struktur utama dan atap</li>
            <li>Tahap II: Penyelesaian interior dan fasilitas pendukung</li>
            <li>Tahap III: Landscaping dan fasilitas luar</li>
            <li>Tahap IV: Pengadaan peralatan dan perlengkapan masjid</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Manfaat bagi Masyarakat</h3>
          <p class="mb-4">Kehadiran Masjid As-Safinatu Al-Abbas diharapkan memberikan manfaat yang besar bagi masyarakat:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Tempat ibadah yang nyaman dan representatif</li>
            <li>Pusat kegiatan keagamaan dan sosial</li>
            <li>Sarana pendidikan agama untuk anak-anak</li>
            <li>Tempat berkumpul dan mempererat silaturahmi</li>
            <li>Simbol kemajuan spiritual masyarakat desa</li>
          </ul>
          
          <p class="mt-6">Pembangunan Masjid As-Safinatu Al-Abbas ini diharapkan dapat segera selesai dan menjadi kebanggaan masyarakat Desa Fajar Baru. Semoga masjid ini dapat menjadi pusat kegiatan ibadah dan dakwah yang bermanfaat bagi kemajuan spiritual masyarakat.</p>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1564769625392-651b2abd5e37?auto=format&fit=crop&w=800&q=80',
      date: '20 Januari 2024',
      author: 'Panitia Pembangunan',
      views: 312,
      readTime: '5 min'
    },
    4: {
      id: 4,
      title: 'Program BLT-DD Disalurkan untuk 145 KK',
      category: 'Sosial',
      excerpt: 'Bantuan Langsung Tunai Dana Desa (BLT-DD) tahun 2023 telah disalurkan kepada 145 Kepala Keluarga dengan total bantuan Rp 87 juta.',
      content: `
        <div class="prose max-w-none">
          <p class="text-lg font-medium mb-6">Program Bantuan Langsung Tunai Dana Desa (BLT-DD) tahun 2023 di Desa Fajar Baru telah berhasil disalurkan kepada 145 Kepala Keluarga (KK) dengan total bantuan mencapai Rp 87 juta. Program ini merupakan bentuk komitmen pemerintah desa dalam membantu masyarakat yang terdampak ekonomi, terutama di masa pemulihan pasca pandemi.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Kriteria Penerima BLT-DD</h3>
          <p class="mb-4">Penyaluran BLT-DD dilakukan dengan kriteria yang ketat dan transparan untuk memastikan bantuan tepat sasaran:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Keluarga Penerima Manfaat (KPM) yang terdaftar dalam Data Terpadu Kesejahteraan Sosial (DTKS)</li>
            <li>Memiliki Kartu Keluarga (KK) dan berdomisili di Desa Fajar Baru</li>
            <li>Tidak menerima bantuan sosial sejenis dari program lain</li>
            <li>Termasuk dalam kategori keluarga miskin atau rentan miskin</li>
            <li>Telah melalui proses verifikasi dan validasi data</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Mekanisme Penyaluran</h3>
          <p class="mb-4">Penyaluran BLT-DD dilakukan melalui mekanisme yang terstruktur dan akuntabel:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Musyawarah desa untuk penetapan penerima</li>
            <li>Pengumuman daftar penerima di tempat umum</li>
            <li>Koordinasi dengan RT/RW setempat</li>
            <li>Penyaluran langsung kepada KK penerima</li>
            <li>Dokumentasi dan pelaporan yang lengkap</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Dampak Program</h3>
          <p class="mb-4">Program BLT-DD memberikan dampak positif yang signifikan bagi masyarakat penerima:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Membantu memenuhi kebutuhan dasar keluarga</li>
            <li>Meringankan beban ekonomi masyarakat</li>
            <li>Meningkatkan daya beli masyarakat</li>
            <li>Mendukung ekonomi lokal</li>
            <li>Mengurangi tingkat kemiskinan desa</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Komitmen Transparansi</h3>
          <p class="mb-4">Pemerintah Desa Fajar Baru berkomitmen penuh terhadap transparansi dalam pelaksanaan program BLT-DD:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Publikasi daftar penerima di website desa</li>
            <li>Papan pengumuman di kantor desa dan tempat umum</li>
            <li>Laporan penggunaan dana secara berkala</li>
            <li>Membuka ruang pengaduan dan saran masyarakat</li>
            <li>Monitoring dan evaluasi program secara rutin</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Program Pendukung Lainnya</h3>
          <p class="mb-4">Selain BLT-DD, pemerintah desa juga melaksanakan program bantuan sosial lainnya:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Bantuan santunan untuk 80 anak yatim</li>
            <li>Bantuan untuk 45 kaum duafa</li>
            <li>Program sapi ketahanan pangan</li>
            <li>Tunjangan siltap untuk aparat desa</li>
            <li>Bantuan untuk guru ngaji dan kader posyandu</li>
          </ul>
          
          <p class="mt-6">Kepala Desa M. Agus Budiantoro menyampaikan bahwa program BLT-DD ini merupakan amanah yang harus dilaksanakan dengan penuh tanggung jawab. "Kami berkomitmen untuk terus membantu masyarakat yang membutuhkan melalui program-program yang tepat sasaran dan bermanfaat," ujarnya.</p>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
      date: '18 Januari 2024',
      author: 'Tim PKH Desa',
      views: 467,
      readTime: '6 min'
    },
    5: {
      id: 5,
      title: 'Pembangunan Infrastruktur Jalan Desa Tahap II',
      category: 'Pembangunan',
      excerpt: 'Melalui Musrenbang Desa, pembangunan jalan desa dan lingkungan di semua dusun memasuki tahap kedua dengan fokus pada jalan tani.',
      content: `
        <div class="prose max-w-none">
          <p class="text-lg font-medium mb-6">Pembangunan infrastruktur jalan di Desa Fajar Baru memasuki tahap kedua dengan fokus utama pada pembangunan jalan tani dan perbaikan akses jalan lingkungan di seluruh dusun. Program yang dihasilkan dari Musyawarah Perencanaan Pembangunan (Musrenbang) Desa ini merupakan prioritas utama dalam meningkatkan konektivitas dan aksesibilitas masyarakat.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Ruang Lingkup Pembangunan</h3>
          <p class="mb-4">Tahap kedua pembangunan infrastruktur jalan mencakup area yang lebih luas dengan fokus pada:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Pembangunan jalan tani untuk memudahkan akses ke lahan pertanian</li>
            <li>Perbaikan jalan lingkungan di semua dusun</li>
            <li>Pembangunan jalan penghubung antar dusun</li>
            <li>Peningkatan kualitas jalan eksisting</li>
            <li>Pembangunan sistem drainase yang memadai</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Hasil Musrenbang Desa 2024</h3>
          <p class="mb-4">Keputusan untuk melanjutkan pembangunan jalan tahap kedua merupakan hasil dari Musyawarah Perencanaan Pembangunan (Musrenbang) Desa yang melibatkan partisipasi aktif masyarakat:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Identifikasi kebutuhan prioritas dari setiap dusun</li>
            <li>Pemetaan rute jalan yang strategis</li>
            <li>Penentuan spesifikasi teknis pembangunan</li>
            <li>Alokasi anggaran dari dana desa</li>
            <li>Jadwal pelaksanaan yang terkoordinasi</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Spesifikasi Teknis</h3>
          <p class="mb-4">Pembangunan jalan tahap kedua menggunakan spesifikasi teknis yang berkualitas:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Lebar jalan minimum 3,5 meter untuk jalan desa</li>
            <li>Lebar jalan minimum 2,5 meter untuk jalan tani</li>
            <li>Konstruksi perkerasan beton dengan ketebalan sesuai standar</li>
            <li>Sistem drainase dengan saluran samping</li>
            <li>Rambu-rambu jalan dan marka jalan yang memadai</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Manfaat bagi Masyarakat</h3>
          <p class="mb-4">Pembangunan infrastruktur jalan ini memberikan manfaat yang signifikan:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Memudahkan akses transportasi masyarakat</li>
            <li>Meningkatkan mobilitas ekonomi dan sosial</li>
            <li>Memperlancar distribusi hasil pertanian</li>
            <li>Meningkatkan nilai ekonomi lahan dan properti</li>
            <li>Mendukung perkembangan usaha mikro dan kecil</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Partisipasi Masyarakat</h3>
          <p class="mb-4">Keberhasilan pembangunan jalan tidak lepas dari partisipasi aktif masyarakat:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Gotong royong dalam persiapan lahan</li>
            <li>Pengawasan masyarakat terhadap kualitas pekerjaan</li>
            <li>Kontribusi tenaga dan pikiran</li>
            <li>Komitmen untuk menjaga dan merawat jalan</li>
            <li>Dukungan moral dan material</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Target dan Timeline</h3>
          <p class="mb-4">Pelaksanaan pembangunan jalan tahap kedua ditargetkan dapat diselesaikan dalam waktu 6 bulan dengan rincian:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Bulan 1-2: Persiapan dan mobilisasi</li>
            <li>Bulan 2-4: Pelaksanaan konstruksi utama</li>
            <li>Bulan 5-6: Penyelesaian dan finishing</li>
            <li>Evaluasi dan serah terima hasil pekerjaan</li>
          </ul>
          
          <p class="mt-6">Pembangunan infrastruktur jalan tahap kedua ini merupakan komitmen nyata pemerintah desa dalam meningkatkan kualitas hidup masyarakat. Dengan infrastruktur yang baik, diharapkan dapat mendorong pertumb uhan ekonomi desa dan meningkatkan kesejahteraan masyarakat Desa Fajar Baru secara keseluruhan.</p>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      date: '15 Januari 2024',
      author: 'Tim Pembangunan',
      views: 523,
      readTime: '7 min'
    },
    6: {
      id: 6,
      title: 'Kampung Pengawasan Partisipatif Pilkada 2024',
      category: 'Pemerintahan',
      excerpt: 'Desa Fajar Baru terpilih sebagai ikon Kampung Pengawasan Partisipatif dalam Pilkada 2024 oleh Bawaslu Lampung Selatan.',
      content: `
        <div class="prose max-w-none">
          <p class="text-lg font-medium mb-6">Desa Fajar Baru mendapat kehormatan untuk terpilih sebagai ikon "Kampung Pengawasan Partisipatif" dalam Pemilihan Kepala Daerah (Pilkada) 2024 oleh Badan Pengawas Pemilihan Umum (Bawaslu) Kabupaten Lampung Selatan. Penunjukan ini merupakan pengakuan atas komitmen masyarakat desa dalam menjaga demokrasi dan integritas pemilu.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Konsep Kampung Pengawasan Partisipatif</h3>
          <p class="mb-4">Kampung Pengawasan Partisipatif adalah program inovatif yang bertujuan untuk meningkatkan partisipasi masyarakat dalam pengawasan pemilu. Program ini memiliki beberapa karakteristik utama:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Pelibatan aktif masyarakat dalam pengawasan pemilu</li>
            <li>Pembentukan relawan pengawas partisipatif</li>
            <li>Edukasi pemilu dan demokrasi kepada masyarakat</li>
            <li>Pencegahan pelanggaran pemilu melalui pengawasan melekat</li>
            <li>Pelaporan dan dokumentasi proses pemilu</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Kriteria Pemilihan</h3>
          <p class="mb-4">Desa Fajar Baru terpilih berdasarkan beberapa kriteria yang telah ditetapkan Bawaslu:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Tingkat partisipasi masyarakat yang tinggi dalam pemilu sebelumnya</li>
            <li>Komitmen aparat desa dalam mendukung pengawasan pemilu</li>
            <li>Struktur masyarakat yang solid dan terorganisir</li>
            <li>Akses informasi dan komunikasi yang memadai</li>
            <li>Rekam jejak yang baik dalam menjaga ketertiban dan keamanan</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Program dan Kegiatan</h3>
          <p class="mb-4">Sebagai Kampung Pengawasan Partisipatif, Desa Fajar Baru melaksanakan berbagai program dan kegiatan:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Sosialisasi tahapan dan jadwal Pilkada 2024</li>
            <li>Pembentukan Tim Relawan Pengawas Partisipatif (RPP)</li>
            <li>Pelatihan pengawasan pemilu untuk masyarakat</li>
            <li>Kampanye anti money politics dan politik uang</li>
            <li>Pengawasan tahapan pemilu secara komprehensif</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Peran Masyarakat</h3>
          <p class="mb-4">Masyarakat Desa Fajar Baru berperan aktif dalam program pengawasan partisipatif:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Menjadi mata dan telinga pengawasan di tingkat akar rumput</li>
            <li>Melaporkan dugaan pelanggaran pemilu yang ditemukan</li>
            <li>Mengedukasi sesama warga tentang hak dan kewajiban dalam pemilu</li>
            <li>Menjaga netralitas aparatur sipil negara</li>
            <li>Menciptakan suasana pemilu yang damai dan tertib</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Dukungan Pemerintah Desa</h3>
          <p class="mb-4">Pemerintah Desa Fajar Baru memberikan dukungan penuh terhadap program ini:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Komitmen kepala desa untuk netralitas dalam pemilu</li>
            <li>Penyediaan fasilitas untuk kegiatan sosialisasi</li>
            <li>Koordinasi dengan aparat keamanan setempat</li>
            <li>Dukungan anggaran untuk kegiatan pengawasan</li>
            <li>Fasilitasi komunikasi antara masyarakat dan Bawaslu</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8 mb-4">Dampak dan Manfaat</h3>
          <p class="mb-4">Program Kampung Pengawasan Partisipatif memberikan dampak positif yang signifikan:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Meningkatkan kesadaran politik masyarakat</li>
            <li>Mencegah berbagai bentuk pelanggaran pemilu</li>
            <li>Memperkuat demokrasi di tingkat desa</li>
            <li>Meningkatkan legitimasi hasil pemilu</li>
            <li>Menjadi contoh bagi desa-desa lainnya</li>
          </ul>
          
          <p class="mt-6">Kepala Desa M. Agus Budiantoro menyatakan kebanggaannya atas penunjukan ini. "Ini adalah bentuk kepercayaan yang besar kepada masyarakat Desa Fajar Baru. Kami berkomitmen untuk menjaga amanah ini dengan sebaik-baiknya dan menjadi contoh dalam menjaga demokrasi Indonesia," ujarnya.</p>
        </div>
      `,
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
      date: '12 Januari 2024',
      author: 'Bawaslu Lamsel',
      views: 178,
      readTime: '6 min'
    }
  };

  // Get article or default to first one
  const article = newsItems[parseInt(id || '1')] || newsItems[1];

  // Related news (exclude current article)
  const relatedNews = Object.values(newsItems).filter(item => item.id !== article.id).slice(0, 3);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: 'Pengguna Anonim',
        content: newComment,
        date: 'Baru saja',
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `${article.title} - ${article.excerpt}`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link berhasil disalin!');
        break;
    }
    setShowShareMenu(false);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Pembangunan': 'bg-blue-100 text-blue-800',
      'UMKM': 'bg-green-100 text-green-800',
      'Pemerintahan': 'bg-purple-100 text-purple-800',
      'Kegiatan': 'bg-yellow-100 text-yellow-800',
      'Sosial': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 md:pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => navigate('/news')}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Kembali ke Berita
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <div className="relative">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2"
                >
                  <Share2 size={16} />
                  Bagikan
                </Button>
                {showShareMenu && (
                  <div className="absolute right-0 top-12 bg-white border rounded-lg shadow-lg p-2 z-10 min-w-48">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('facebook')}
                      className="w-full justify-start"
                    >
                      <Facebook size={16} className="mr-2" />
                      Facebook
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('twitter')}
                      className="w-full justify-start"
                    >
                      <Twitter size={16} className="mr-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('linkedin')}
                      className="w-full justify-start"
                    >
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('copy')}
                      className="w-full justify-start"
                    >
                      <LinkIcon size={16} className="mr-2" />
                      Salin Link
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye size={14} />
                <span>{article.views} views</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Image */}
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <Card className="p-6 md:p-8 mb-8">
            <div 
              className="prose max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </Card>

          {/* Comments Section */}
          <Card className="p-6 md:p-8 mb-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2">
              <MessageCircle size={20} />
              Komentar ({comments.length})
            </h3>

            {/* Add Comment */}
            <div className="mb-8">
              <Textarea
                placeholder="Tulis komentar Anda..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-4"
                rows={4}
              />
              <Button 
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="bg-gradient-village hover:opacity-90"
              >
                Kirim Komentar
              </Button>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <Card key={comment.id} className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-village-green text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                      {comment.author.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-medium text-gray-800">{comment.author}</span>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700 mb-3 break-words">{comment.content}</p>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-village-green">
                        <Heart size={14} className="mr-1" />
                        {comment.likes}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Related News */}
          <Card className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Berita Terkait</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((news) => (
                <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(news.category)}`}>
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <Calendar size={12} className="mr-1" />
                      <span>{news.date}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm">
                      {news.title}
                    </h4>
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                      {news.excerpt}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full text-xs"
                      onClick={() => navigate(`/news/${news.id}`)}
                    >
                      Baca Artikel
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetail;
