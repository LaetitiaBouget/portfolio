import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://laetitia-bouget.fr/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
