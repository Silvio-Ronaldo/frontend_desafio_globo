import axios from 'axios';

const api = axios.create({
    baseURL: 'https://globoapi.herokuapp.com',
});

export default api;