import axios from 'axios';

const backend_host = import.meta.env.BACKEND_HOST || 'localhost';

const api = axios.create({
    baseURL: `http://${backend_host}:3000`
});

export default api;