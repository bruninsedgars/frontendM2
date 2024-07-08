import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000', 
});

export const getEvents = () => api.get('/events');
export const addEvent = (event) => api.post('/events', event);
export const deleteEvent = (id) => api.delete(`/events/${id}`);
