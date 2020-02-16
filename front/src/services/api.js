import axios from 'axios';

const api = axios.create({
    baseURL: 'https://https://api.github.com',
});

export default api;