"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Popup from '@/components/Popup'; // Importe o componente de pop-up

const ItemNew: React.FC = () => {
  const router = useRouter();

  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState<number | undefined>(undefined);
  const [itemCategory, setItemCategory] = useState('');
  const [itemPrice, setItemPrice] = useState<number | undefined>(undefined);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (itemQuantity && itemQuantity < 0) {
      alert("A quantidade não pode ser negativa.");
      return;
    }

    if (itemPrice && itemPrice < 0) {
      alert("O preço não pode ser negativo.");
      return;
    }

    console.log(`Cadastrando o item: ${itemName}, quantidade: ${itemQuantity}, categoria: ${itemCategory}, preço: ${itemPrice}`);

    try {
      const res = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: itemName,
          quantity: itemQuantity,
          category: itemCategory,
          price: itemPrice,
        }),
      });

      if (res.ok) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        router.push('/');
      } else {
        console.error('Error saving item:', res.statusText);
      }
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
          onChange={(e) => setItemQuantity(e.target.valueAsNumber)}
          className="border border-gray-400 rounded-md px-4 py-2 mb-4"
          min="0"
        />
        <div className="flex items-center mb-4">
          <span className="mr-2">$</span>
          <input
            type="number"
            placeholder="Preço do Item"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.valueAsNumber)}
            className="border border-gray-400 rounded-md px-4 py-2"
            min="0"
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
      {showPopup && <Popup message="Item cadastrado com sucesso" />}
    </div>
  );
};

export default ItemNew;
