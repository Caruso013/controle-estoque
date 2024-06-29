import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const fetchItems = async (): Promise<Item[]> => {
  const response = await api.get('/items');
  return response.data;
};

export const deleteItem = async (id: string) => {
  await api.delete(`/items/${id}`);
};

interface Item {
  _id: string;
  name: string;
  quantity: number;
  category: string;
  price: number;
}
