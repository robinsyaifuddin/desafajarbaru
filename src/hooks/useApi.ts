
import { useState, useEffect } from 'react';
import { apiClient } from '@/services/api';

interface UseApiOptions {
  immediate?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export function useApi<T = any>(
  apiCall: () => Promise<T>,
  options: UseApiOptions = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { immediate = true, onSuccess, onError } = options;

  const execute = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      setData(result);
      onSuccess?.(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      onError?.(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, []);

  return {
    data,
    loading,
    error,
    execute,
    refetch: execute,
  };
}

// Specific hooks for different data types
export function useNews(params?: any) {
  return useApi(() => apiClient.getNews(params));
}

export function useResidents(params?: any) {
  return useApi(() => apiClient.getResidents(params));
}

export function useGallery(params?: any) {
  return useApi(() => apiClient.getGalleryItems(params));
}

export function useStatistics(type?: string) {
  return useApi(() => apiClient.getStatistics(type));
}

export function useFinance(year?: string) {
  return useApi(() => apiClient.getFinanceData(year));
}

export function useEvents(params?: any) {
  return useApi(() => apiClient.getEvents(params));
}

export function useSettings() {
  return useApi(() => apiClient.getSettings());
}
