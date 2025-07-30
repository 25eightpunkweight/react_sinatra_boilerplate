import axios from 'axios';

const backend_host = import.meta.env.VITE_BACKEND_HOST;
const backend_protocol = backend_host === 'localhost' ? 'http' : 'https';
const port = backend_host === 'localhost' ? ':3000' : '';

const api = axios.create({
    baseURL: `${backend_protocol}://${backend_host}${port}`
});

export default api;
