// src/pages/itemNew.tsx
"use client";

import Header from '@/components/Header';
import { useRouter } from 'next-router-mock';
import { useState } from 'react';

const ItemNew: React.FC = () => {
  const router = useRouter();

  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemCategory, setItemCategory] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Logic to save the item to the database (replace with your implementation)
    console.log(`Cadastrando o item: ${itemName}, quantidade: ${itemQuantity}, categoria: ${itemCategory}, preço: ${itemPrice}`);

    try {
      // Assuming successful item saving, navigate to the home page
      await router.push('/'); // Use `router.push` for programmatic navigation
    } catch (error) {
      console.error('Error saving item:', error);
      // Handle any errors during item saving and display a message to the user
    }
  };

  return (
    <div>
      <Header />
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-4xl font-bold mb-8">Cadastro de Novo Item</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Nome do Item"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="border border-gray-400 rounded-md px-4 py-2 mb-4"
        />
        <input
          type="number"
          placeholder="Quantidade Inicial"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(Number(e.target.value))}
          className="border border-gray-400 rounded-md px-4 py-2 mb-4"
        />
        <div className="flex items-center mb-4">
          <span className="mr-2">$</span>
          <input
            type="text"
            placeholder="Preço do Item"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2"
          />
        </div>
        <select
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
          className="border border-gray-400 rounded-md px-4 py-2 mb-4"
        >
          <option value="">Selecione a Categoria</option>
          <option value="ingredientes">Ingredientes</option>
          <option value="bebidas">Bebidas</option>
          <option value="embalagens">Embalagens</option>
          <option value="outros">Outros</option>
        </select>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Cadastrar Item
        </button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default ItemNew;
