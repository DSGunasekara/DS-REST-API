import axios from "axios";

const API = axios.create({ baseURL : 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).data.token}`;

    }
    return req;
})

export const fetchProducts = () => API.get('/product');

export const createProduct = (newProduct) => API.post('/product', newProduct);

export const fetchProduct = (id) => API.get(`/product/${id}`);

export const deleteProduct = (id) => API.delete(`/product/${id}`);

export const updateProductItem = (item) => API.patch(`/product/${item._id}`, item);

export const addToCart = (item) => API.post('/cart', item);

export const fetchCartItems = (id) =>  API.get(`/cart/user/${id}`);

export const deleteCartItem = (id) => API.delete(`/cart/${id}`);

export const login = (formData) => API.post('/login', formData);
export const signUp = (formData) => API.post('/signup', formData);


export const getOrders = () => API.post('/order');