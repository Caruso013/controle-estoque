import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  itemId: string;
  amount: number;
};

const ItemOut: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>(); // Especificando o tipo de FormValues
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await axios.put(`/api/items/${data.itemId}/updateQuantity`, { amount: -data.amount });
      router.reload();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Ocorreu um erro desconhecido.');
      }
    }
  };

  return (
    <div>
      <h1>Saída de Item</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('itemId', { required: true })} placeholder="ID do item" />
        <input type="number" {...register('amount', { required: true, min: 1 })} placeholder="Quantidade a remover" />
        <button type="submit">Atualizar Quantidade de Saída</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default ItemOut;
