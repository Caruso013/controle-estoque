// src/components/Header.tsx
"use client";

import React from 'react';

interface HeaderProps {
  onEntradaClick: () => void;
  onSaidaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onEntradaClick, onSaidaClick }) => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-red-800 text-white fixed w-full top-0 z-10">
      <button onClick={() => window.location.href = '/'} className="text-2xl font-bold">
        Pizzaria Recanto do Céu
      </button>
      <div>
        <button onClick={onEntradaClick} className="text-white text-lg font-bold mr-4">
          Entrada
        </button>
        <button onClick={onSaidaClick} className="text-white text-lg font-bold">
          Saída
        </button>
      </div>
    </div>
  );
};

export default Header;
