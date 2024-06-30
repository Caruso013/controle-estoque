"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ItemNew from '@/app/itemNew/page';
import { buscarItens } from '@/utils/api';

const Page: React.FC = () => {
  const [itens, setItens] = useState<any[]>([]);
  const [mostrarFormularioEntrada, setMostrarFormularioEntrada] = useState(false);

  // Função para carregar os itens do banco de dados MongoDB
  const carregarItens = async () => {
    try {
      const itensCarregados = await buscarItens();
      setItens(itensCarregados);
    } catch (error) {
      console.error('Erro ao carregar itens:', error);
    }
  };

  // Carregar os itens ao carregar a página
  useEffect(() => {
    carregarItens();
  }, []);

  // Abrir formulário de entrada quando o botão de entrada for clicado
  const handleEntradaClick = () => {
    setMostrarFormularioEntrada(true);
  };

  // Fechar formulário de entrada
  const fecharFormulario = () => {
    setMostrarFormularioEntrada(false);
  };

  // Atualizar a lista de itens após o cadastro
  const atualizarItens = () => {
    carregarItens();
    setMostrarFormularioEntrada(false);
  };

  return (
    <div>
      <Header
        onEntradaClick={handleEntradaClick}
        onSaidaClick={() => setMostrarFormularioEntrada(true)} // Exemplo de como abrir o formulário de saída
      />
      <Hero itens={itens} />
      {mostrarFormularioEntrada && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="relative max-w-lg mx-auto p-8 bg-white rounded-lg shadow-xl">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
              onClick={fecharFormulario}
            >
              X
            </button>
            <ItemNew onCadastro={atualizarItens} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
