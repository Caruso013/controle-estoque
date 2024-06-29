import React, { useEffect, useState } from 'react';
import { fetchItems, deleteItem } from '@/api';
import { Trash2 } from 'lucide-react';

interface Item {
  _id: string;
  name: string;
  quantity: number;
  category: string;
  price: number;
}

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const items = await fetchItems();
      setItems(items);
    };

    getItems();
  }, []);

  const handleDelete = async (itemId: string) => {
    await deleteItem(itemId);
    setItems(items.filter(item => item._id !== itemId));
  };

  return (
    <div className="flex flex-col items-start space-y-4">
      {items.map((item) => (
        <div key={item._id} className="flex items-center justify-between w-full p-4 border border-gray-400 rounded-md">
          <div>
            <p><strong>Nome:</strong> {item.name}</p>
            <p><strong>Quantidade:</strong> {item.quantity}</p>
            <p><strong>Categoria:</strong> {item.category}</p>
            <p><strong>Preço:</strong> {item.price}</p>
          </div>
          <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-red-600">
            <Trash2 />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
