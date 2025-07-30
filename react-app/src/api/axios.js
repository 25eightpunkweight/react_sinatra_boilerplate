import axios from 'axios';

const backend_host = import.meta.env.VITE_BACKEND_HOST;
const backend_protocol = backend_host === 'localhost' ? 'http' : 'https';

const api = axios.create({
    baseURL: `${backend_protocol}://${backend_host}:3000`
});

export default api;