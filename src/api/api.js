import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const getPOIs = () => api.get('/pois');
export const addPOI = (poi) => api.post('/pois', poi);
export const updatePOI = (id, poi) => api.put(`/pois/${id}`, poi);
export const deletePOI = (id) => api.delete(`/pois/${id}`);
