import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const fetchItems = async () => {
  const response = await api.get('/items');
  return response.data;
};

export const deleteItem = async (id: string) => {
  await api.delete(`/items/${id}`);
};
