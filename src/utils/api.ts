require('dotenv').config();

import mongoose from 'mongoose';
import Item from '@/models/Item'; // Importe seu modelo de Item aqui

import dotenv from 'dotenv';
dotenv.config();

const mongodbUri = process.env.MONGODB_URI;

if (!mongodbUri) {
  throw new Error('Variável de ambiente MONGODB_URI não definida');
}

mongoose.connect(mongodbUri);

export const buscarItens = async () => {
  try {
    const itens = await Item.find();
    return itens;
  } catch (error) {
    console.error('Erro ao buscar itens:', error);
    return []; // Retorna um array vazio em caso de erro
  }
};

export const cadastrarNovoItem = async (novoItem: { name: string; quantity: number; category: string; }) => {
  try {
    const item = new Item(novoItem);
    await item.save();
    return item;
  } catch (error) {
    console.error('Erro ao cadastrar item:', error);
    throw error;
  }
};
