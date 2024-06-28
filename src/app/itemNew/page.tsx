// src/app/itemNew/page.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Popup from '@/components/Popup'; // Importe o componente de pop-up

const ItemNew: React.FC = () => {
  const router = useRouter();

  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState<number | undefined>(undefined);
  const [itemCategory, setItemCategory] = useState('');
  const [itemPrice, setItemPrice] = useState<number | undefined>(undefined);
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar a exibição do pop-up

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

    // Simulação de lógica para salvar o item no banco de dados
    console.log(`Cadastrando o item: ${itemName}, quantidade: ${itemQuantity}, categoria: ${itemCategory}, preço: ${itemPrice}`);

    try {
      // Lógica para salvar o item no banco de dados (substitua com sua implementação real)
      // Após salvar com sucesso, exibe o pop-up
      setShowPopup(true);

      // Simula um tempo de espera antes de redirecionar para a página inicial
      setTimeout(() => {
        router.push('/'); // Use `router.push` para navegação programática
      }, 3000); // Redireciona para a página inicial após 3 segundos
    } catch (error) {
      console.error('Erro ao salvar o item:', error);
      // Trate quaisquer erros durante o salvamento do item
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
      {showPopup && (
        <Popup message="Item cadastrado com sucesso" onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default ItemNew;
