
// Base API configuration and utilities
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-supabase-url.supabase.co' 
  : 'http://localhost:3000';

export class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
    this.token = localStorage.getItem('admin_token');
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('admin_token', token);
  }

  removeToken() {
    this.token = null;
    localStorage.removeItem('admin_token');
  }

  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth endpoints
  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async logout() {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }

  // News endpoints
  async getNews(params?: { page?: number; limit?: number; status?: string }) {
    const queryParams = new URLSearchParams(params as any);
    return this.request(`/api/news?${queryParams}`);
  }

  async createNews(newsData: any) {
    return this.request('/api/news', {
      method: 'POST',
      body: JSON.stringify(newsData),
    });
  }

  async updateNews(id: string, newsData: any) {
    return this.request(`/api/news/${id}`, {
      method: 'PUT',
      body: JSON.stringify(newsData),
    });
  }

  async deleteNews(id: string) {
    return this.request(`/api/news/${id}`, {
      method: 'DELETE',
    });
  }

  // Residents endpoints
  async getResidents(params?: { page?: number; limit?: number; search?: string }) {
    const queryParams = new URLSearchParams(params as any);
    return this.request(`/api/residents?${queryParams}`);
  }

  async createResident(residentData: any) {
    return this.request('/api/residents', {
      method: 'POST',
      body: JSON.stringify(residentData),
    });
  }

  async updateResident(id: string, residentData: any) {
    return this.request(`/api/residents/${id}`, {
      method: 'PUT',
      body: JSON.stringify(residentData),
    });
  }

  async deleteResident(id: string) {
    return this.request(`/api/residents/${id}`, {
      method: 'DELETE',
    });
  }

  // Gallery endpoints
  async getGalleryItems(params?: { page?: number; limit?: number; category?: string }) {
    const queryParams = new URLSearchParams(params as any);
    return this.request(`/api/gallery?${queryParams}`);
  }

  async uploadMedia(file: File, metadata?: any) {
    const formData = new FormData();
    formData.append('file', file);
    if (metadata) {
      formData.append('metadata', JSON.stringify(metadata));
    }

    return this.request('/api/gallery/upload', {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set Content-Type for FormData
    });
  }

  // Statistics endpoints
  async getStatistics(type?: string) {
    return this.request(`/api/statistics${type ? `?type=${type}` : ''}`);
  }

  // Finance endpoints
  async getFinanceData(year?: string) {
    return this.request(`/api/finance${year ? `?year=${year}` : ''}`);
  }

  async createTransaction(transactionData: any) {
    return this.request('/api/finance/transactions', {
      method: 'POST',
      body: JSON.stringify(transactionData),
    });
  }

  // Events endpoints
  async getEvents(params?: { page?: number; limit?: number; status?: string }) {
    const queryParams = new URLSearchParams(params as any);
    return this.request(`/api/events?${queryParams}`);
  }

  async createEvent(eventData: any) {
    return this.request('/api/events', {
      method: 'POST',
      body: JSON.stringify(eventData),
    });
  }

  async updateEvent(id: string, eventData: any) {
    return this.request(`/api/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(eventData),
    });
  }

  // Settings endpoints
  async getSettings() {
    return this.request('/api/settings');
  }

  async updateSettings(settingsData: any) {
    return this.request('/api/settings', {
      method: 'PUT',
      body: JSON.stringify(settingsData),
    });
  }
}

export const apiClient = new ApiClient();
