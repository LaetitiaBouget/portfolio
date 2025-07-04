import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://portfolio-api-5j0h.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
