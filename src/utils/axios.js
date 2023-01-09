import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'https://own-data-server.herokuapp.com/',
    baseURL: 'https://video-data-server-lws.vercel.app/'
});

export default axiosInstance;
