import axios from 'axios';

const backend_host = import.meta.env.VITE_BACKEND_HOST;

const api = axios.create({
    baseURL: `https://${backend_host}:3000`
});

export default api;
