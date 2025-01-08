const API_HOST = import.meta.env.VITE_API_HOST;

export const getApiUrl = (endpoint: string) => `${API_HOST}${endpoint}`;
