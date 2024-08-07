// src/components/ItemOut.tsx

"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ItemOut: React.FC = () => {
  const router = useRouter();
  const [itemId, setItemId] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Lógica para remover quantidade do item no banco de dados
      console.log(`Removendo quantidade do item ${itemId}: ${amount}`);
      // Redireciona ou realiza outras operações após a remoção
      router.push('/'); // Exemplo de redirecionamento para a página inicial
    } catch (error) {
      console.error('Erro ao remover quantidade do item:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Saída de Item</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="ID do Item"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
          className="border border-gray-400 rounded-md px-4 py-2 mb-4"
        />
        <input
          type="number"
          placeholder="Quantidade a remover"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border border-gray-400 rounded-md px-4 py-2 mb-4"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Atualizar Quantidade de Saída
        </button>
      </form>
    </div>
  );
};

export default ItemOut;
