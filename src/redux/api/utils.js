import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL ?? 'http://localhost:3300/';
const ADMIN_URL = `${BASE_URL}/admin`;

const authInterceptor = (req) => {
    const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken;
    if(accessToken){
        req.headers.Authorization = `Bearer ${accessToken}`;
    }
    req.headers.devName="Amal Das S K";
    return req;
}

export const API = axios.create({
    baseURL: BASE_URL,
});

export const ADMIN_API = axios.create({
    baseURL: ADMIN_URL,
});

API.interceptors.request.use(authInterceptor);

export const handleApiError = () => {
    try{
        const errMessage = err.response?.data?.message || "An unexpected error occurred.";
        const data = null;
        return { error:errMessage, data };
    } catch(err){
        throw new Error("An unexpected error occurred.");
    }
}