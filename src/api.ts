import { Item } from "./types";

// src/api.ts
const API_URL = 'http://localhost:3000'; // URL base da sua API

// Função para buscar todos os itens cadastrados
export const fetchItems = async (): Promise<Item[]> => {
  const response = await fetch(`${API_URL}/items`);
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return await response.json();
};

// Função para deletar um item pelo ID
export const deleteItem = async (itemId: string): Promise<void> => {
  const response = await fetch(`${API_URL}/items/${itemId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete item');
  }
};
