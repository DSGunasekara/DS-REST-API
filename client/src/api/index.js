import axios from "axios";

//const API = axios.create({ baseURL : 'http://localhost:5000/api' });

// API.interceptors.request.use((req) => {
//     if(localStorage.getItem('profile')){
//        return  req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//
//     }
//})

export const fetchProducts = () => axios.get('/products');


export const login = (formData) => axios.post('http://localhost:5000/api/login', formData);
export const signUp = (formData) => axios.post('/signup', formData);