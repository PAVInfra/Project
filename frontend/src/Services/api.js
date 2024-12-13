 import axios from 'axios';

const api = axios.create({
    // baseUrl: `${import.meta.env.VITE_API_URL}/api/`,
    baseURL: "http://127.0.0.1:8000/api/"
});
export default api;
