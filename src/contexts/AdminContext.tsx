
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Admin {
  email: string;
  isAuthenticated: boolean;
}

interface AdminContextType {
  admin: Admin | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isLoading: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if admin is already logged in
    const savedAdmin = localStorage.getItem('admin');
    if (savedAdmin) {
      setAdmin(JSON.parse(savedAdmin));
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    // Simple hardcoded authentication
    if (email === 'adminfajarbaru@gmail.com' && password === 'fajarbaru123') {
      const adminData = { email, isAuthenticated: true };
      setAdmin(adminData);
      localStorage.setItem('admin', JSON.stringify(adminData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem('admin');
  };

  return (
    <AdminContext.Provider value={{ admin, login, logout, isLoading }}>
      {children}
    </AdminContext.Provider>
  );
};
