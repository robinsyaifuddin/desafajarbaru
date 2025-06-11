
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CitizenUser {
  id: string;
  name: string;
  email: string;
  nik: string;
  birthPlace: string;
  birthDate: string;
  gender: 'Laki-laki' | 'Perempuan';
  religion: string;
  maritalStatus: string;
  education: string;
  occupation: string;
  address: string;
  phone: string;
  profileImage?: string;
  isAuthenticated: boolean;
}

interface CitizenContextType {
  citizen: CitizenUser | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateProfile: (data: Partial<CitizenUser>) => void;
  isLoading: boolean;
}

const CitizenContext = createContext<CitizenContextType | undefined>(undefined);

export const useCitizen = () => {
  const context = useContext(CitizenContext);
  if (context === undefined) {
    throw new Error('useCitizen must be used within a CitizenProvider');
  }
  return context;
};

interface CitizenProviderProps {
  children: ReactNode;
}

export const CitizenProvider: React.FC<CitizenProviderProps> = ({ children }) => {
  const [citizen, setCitizen] = useState<CitizenUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if citizen is already logged in
    const savedCitizen = localStorage.getItem('citizen');
    if (savedCitizen) {
      setCitizen(JSON.parse(savedCitizen));
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    // Demo citizen authentication
    if (email === 'm.fajarbaru@gmail.com' && password === 'mfajarbaru') {
      const citizenData: CitizenUser = {
        id: 'citizen001',
        name: 'Muhammad Fajar Baru',
        email: 'm.fajarbaru@gmail.com',
        nik: '3271040101900001',
        birthPlace: 'Jakarta',
        birthDate: '1990-01-01',
        gender: 'Laki-laki',
        religion: 'Islam',
        maritalStatus: 'Menikah',
        education: 'S1',
        occupation: 'Pegawai Swasta',
        address: 'RT 01/RW 05, Desa Fajar Baru, Kec. Sumber Jaya',
        phone: '081234567890',
        isAuthenticated: true,
      };
      setCitizen(citizenData);
      localStorage.setItem('citizen', JSON.stringify(citizenData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCitizen(null);
    localStorage.removeItem('citizen');
  };

  const updateProfile = (data: Partial<CitizenUser>) => {
    if (citizen) {
      const updatedCitizen = { ...citizen, ...data };
      setCitizen(updatedCitizen);
      localStorage.setItem('citizen', JSON.stringify(updatedCitizen));
    }
  };

  return (
    <CitizenContext.Provider value={{ citizen, login, logout, updateProfile, isLoading }}>
      {children}
    </CitizenContext.Provider>
  );
};
