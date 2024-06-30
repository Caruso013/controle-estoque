import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { cadastrarNovoItem } from '@/utils/api';

interface ItemNewProps {
  onCadastro: () => void; // Função para atualizar a lista após cadastro
}

const ItemNew: React.FC<ItemNewProps> = ({ onCadastro }) => {
  const router = useRouter();

  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemCategory, setItemCategory] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Lógica para validar os campos
    if (!itemName.trim() || itemQuantity <= 0 || !itemCategory.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Objeto com os dados do novo item
    const novoItem = {
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
    };

    try {
      // Chama a função para cadastrar o novo item
      await cadastrarNovoItem(novoItem);
      // Após cadastrar com sucesso, chama a função de callback para atualizar a lista de itens
      onCadastro();
      // Limpa os campos após o cadastro
      setItemName('');
      setItemQuantity(0);
      setItemCategory('');
    } catch (error) {
      console.error('Erro ao cadastrar item:', error);
      alert('Erro ao cadastrar item. Por favor, tente novamente.');
    }
  };

  return (
    <div>
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
          placeholder="Quantidade"
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
          <option value="Ingredientes">Ingredientes</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Embalagens">Embalagens</option>
          <option value="Outros">Outros</option>
        </select>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Cadastrar Novo Item
        </button>
      </form>
    </div>
  );
};

export default ItemNew;
