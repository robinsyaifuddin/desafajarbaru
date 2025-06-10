
// Type definitions for admin dashboard
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  status: 'Published' | 'Draft' | 'Archived';
  views: number;
  category: string;
  image?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Resident {
  id: string;
  nik: string;
  name: string;
  birthDate: string;
  birthPlace: string;
  gender: 'Laki-laki' | 'Perempuan';
  address: string;
  rt: string;
  rw: string;
  status: 'Tetap' | 'Pindah' | 'Pendatang';
  occupation: string;
  education: string;
  maritalStatus: 'Belum Menikah' | 'Menikah' | 'Cerai Hidup' | 'Cerai Mati';
  religion: 'Islam' | 'Kristen' | 'Katolik' | 'Hindu' | 'Buddha' | 'Konghucu';
  familyRelation: string;
  phone?: string;
  email?: string;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  category: string;
  tags?: string[];
  views: number;
  status: 'Published' | 'Draft';
  uploadedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  status: 'Upcoming' | 'Open' | 'Planning' | 'Completed' | 'Cancelled';
  participants: number;
  maxParticipants: number;
  organizer: string;
  image?: string;
  registrationDeadline?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  type: 'income' | 'expense';
  amount: number;
  status: 'Completed' | 'Pending' | 'Cancelled';
  reference?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface BudgetItem {
  category: string;
  budget: number;
  actual: number;
  percentage: number;
}

export interface Statistics {
  totalPopulation: number;
  maleCount: number;
  femaleCount: number;
  familyHeadCount: number;
  ageDistribution: Array<{
    ageGroup: string;
    count: number;
  }>;
  educationDistribution: Array<{
    level: string;
    count: number;
  }>;
  occupationDistribution: Array<{
    occupation: string;
    count: number;
  }>;
  religionDistribution: Array<{
    religion: string;
    count: number;
  }>;
}

export interface VillageSettings {
  general: {
    name: string;
    code: string;
    description: string;
    logo?: string;
    province: string;
    regency: string;
    district: string;
    postalCode: string;
  };
  contact: {
    address: string;
    phone: string;
    fax?: string;
    email: string;
    website: string;
    mapsEmbed?: string;
    latitude: number;
    longitude: number;
  };
  website: {
    title: string;
    tagline: string;
    metaDescription: string;
    metaKeywords: string;
    analyticsCode?: string;
    footerText: string;
    features: {
      enableComments: boolean;
      showStatistics: boolean;
      maintenanceMode: boolean;
    };
  };
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'super_admin' | 'admin' | 'editor';
  permissions: string[];
  lastLogin?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalResidents: number;
  activeNews: number;
  galleryItems: number;
  visitors: number;
  monthlyGrowth: number;
  budgetUtilization: number;
  activeEvents: number;
  pendingTasks: number;
}
