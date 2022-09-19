import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 30000,
});

export const getProducts = (params) => {
    return api.get('/products', { params });
};

export const getDetail = (id) => {
    return api.get(`/products/${id}`);
};
