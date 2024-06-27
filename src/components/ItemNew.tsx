// ItemNew.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ItemNew: React.FC = () => {
  const router = useRouter();
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para cadastrar o item no banco de dados
    console.log(`Cadastrando o item: ${itemName}`);
    // Redireciona ou realiza outras operações após o cadastro
    router.push('/'); // Exemplo de redirecionamento para a página inicial
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
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Cadastrar Item
        </button>
      </form>
    </div>
  );
};

export default ItemNew;
