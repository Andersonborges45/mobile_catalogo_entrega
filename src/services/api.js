import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

export async function getProductsByCategories(categories) {
  const responses = await Promise.all(
    categories.map(category => api.get(`/products/category/${category}`))
  );
  return responses.flatMap(response => response.data.products || []);
}

export async function getProductById(id) {
  const response = await api.get(`/products/${id}`);
  return response.data;
}