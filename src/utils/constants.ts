
// Constants for admin dashboard
export const ADMIN_ROUTES = {
  LOGIN: '/admin/login',
  DASHBOARD: '/admin/dashboard',
  NEWS: '/admin/news',
  RESIDENTS: '/admin/residents',
  GALLERY: '/admin/gallery',
  STATISTICS: '/admin/statistics',
  MAP: '/admin/map',
  FINANCE: '/admin/finance',
  EVENTS: '/admin/events',
  SETTINGS: '/admin/settings',
} as const;

export const NEWS_STATUS = {
  PUBLISHED: 'Published',
  DRAFT: 'Draft',
  ARCHIVED: 'Archived',
} as const;

export const RESIDENT_STATUS = {
  PERMANENT: 'Tetap',
  MOVED: 'Pindah',
  NEWCOMER: 'Pendatang',
} as const;

export const GENDER = {
  MALE: 'Laki-laki',
  FEMALE: 'Perempuan',
} as const;

export const MARITAL_STATUS = {
  SINGLE: 'Belum Menikah',
  MARRIED: 'Menikah',
  DIVORCED: 'Cerai Hidup',
  WIDOWED: 'Cerai Mati',
} as const;

export const RELIGION = {
  ISLAM: 'Islam',
  CHRISTIAN: 'Kristen',
  CATHOLIC: 'Katolik',
  HINDU: 'Hindu',
  BUDDHIST: 'Buddha',
  CONFUCIAN: 'Konghucu',
} as const;

export const EVENT_STATUS = {
  UPCOMING: 'Upcoming',
  OPEN: 'Open',
  PLANNING: 'Planning',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
} as const;

export const TRANSACTION_TYPE = {
  INCOME: 'income',
  EXPENSE: 'expense',
} as const;

export const TRANSACTION_STATUS = {
  COMPLETED: 'Completed',
  PENDING: 'Pending',
  CANCELLED: 'Cancelled',
} as const;

export const EDUCATION_LEVELS = [
  'Tidak Sekolah',
  'PAUD',
  'TK',
  'SD',
  'SMP',
  'SMA',
  'Diploma',
  'S1',
  'S2',
  'S3',
] as const;

export const BUDGET_CATEGORIES = [
  'Belanja Pegawai',
  'Belanja Barang/Jasa',
  'Belanja Modal',
  'Belanja Bantuan Sosial',
  'Belanja Tidak Terduga',
] as const;

export const GALLERY_CATEGORIES = [
  'Kegiatan',
  'Pelatihan',
  'Festival',
  'Infrastruktur',
  'Sosial',
  'Olahraga',
] as const;

export const EVENT_CATEGORIES = [
  'Lingkungan',
  'Pelatihan',
  'Budaya',
  'Kesehatan',
  'Olahraga',
  'Sosial',
  'Ekonomi',
] as const;

export const PERMISSIONS = {
  MANAGE_NEWS: 'manage_news',
  MANAGE_RESIDENTS: 'manage_residents',
  MANAGE_GALLERY: 'manage_gallery',
  MANAGE_EVENTS: 'manage_events',
  MANAGE_FINANCE: 'manage_finance',
  MANAGE_SETTINGS: 'manage_settings',
  MANAGE_USERS: 'manage_users',
  VIEW_STATISTICS: 'view_statistics',
} as const;

export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  EDITOR: 'editor',
} as const;

export const DEFAULT_PAGE_SIZE = 10;
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const SUPPORTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
export const SUPPORTED_VIDEO_TYPES = ['video/mp4', 'video/webm', 'video/ogg'];
