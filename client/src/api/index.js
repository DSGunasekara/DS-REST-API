import axios from "axios";

const API = axios.create({ baseURL : 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).data.token}`;

    }
    return req;
})

export const fetchProducts = () => API.get('/product');

//export const getId = () => API.get(`/login`);

export const login = (formData) => API.post('/login', formData);
export const signUp = (formData) => API.post('/signup', formData);