import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    timeout: 8000,
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
    }
});

axiosInstance.defaults.withCredentials = false;
axiosInstance.defaults.xsrfCookieName = 'csrftoken'
axiosInstance.defaults.xsrfHeaderName = 'X-CSRFToken'

export default axiosInstance;