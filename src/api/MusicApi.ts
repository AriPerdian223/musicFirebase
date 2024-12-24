import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6720a53598bbb4d93ca54d7e.mockapi.io/api/v1/music',
});

export const getMusicList = () => api.get('/');
export const getMusicDetail = (id: string) => api.get(`/${id}`);
export const addMusic = (data: any) => api.post('/', data);
export const updateMusic = (id: string, data: any) => api.put(`/${id}`, data);
export const deleteMusic = (id: string) => api.delete(`/${id}`);

export default api;
