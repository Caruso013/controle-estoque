// src/components/ItemNew.tsx

import React, { useState } from 'react';
import { useRouter } from 'next-router-mock';

const ItemNew: React.FC = () => {
  const router = useRouter();

  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemCategory, setItemCategory] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para cadastrar o item no banco de dados
    console.log(`Cadastrando o item: ${itemName}, quantidade: ${itemQuantity}, categoria: ${itemCategory}`);
    // Exemplo de redirecionamento após o cadastro
    router.push('/'); // Redireciona para a página inicial após o cadastro
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
          onChange={(e) => setItemQuantity(Number(e.target.value))}
          className="border border-gray-400 rounded-md px-4 py-2 mb-4"
        />
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
  );
};

export default ItemNew;
