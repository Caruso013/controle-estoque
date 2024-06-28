// src/components/ItemList.tsx
import React, { useEffect, useState } from 'react';
import { fetchItems, deleteItem } from '@/api'; // Substitua 'fetchItems' e 'deleteItem' com seus métodos de API reais
import { Trash2 } from 'lucide-react';

interface Item {
  id: string;
  name: string;
  quantity: number;
}

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const itemsData = await fetchItems(); // Método para buscar itens do banco de dados
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItemsData();
  }, []);

  const handleDeleteItem = async (itemId: string) => {
    try {
      await deleteItem(itemId); // Método para deletar o item pelo ID
      setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Itens Cadastrados</h2>
      {items.map(item => (
        <div key={item.id} className="flex items-center justify-between w-3/4 border border-gray-300 rounded-lg p-4 mb-4">
          <div>
            <p className="text-lg font-semibold">{item.name}</p>
            <p>Quantidade: {item.quantity}</p>
          </div>
          <button onClick={() => handleDeleteItem(item.id)} className="ml-4">
            <Trash2 size={24} color="#FF0000" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
