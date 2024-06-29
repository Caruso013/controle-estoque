// Header.tsx
import React from 'react';

interface HeaderProps {
  onEntradaClick: () => void;
  onSaidaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onEntradaClick, onSaidaClick }) => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-red-800 text-white">
      <button onClick={onEntradaClick} className="text-white text-lg font-bold mr-4 cursor-pointer">
        Entrada
      </button>
      <button onClick={onSaidaClick} className="text-white text-lg font-bold cursor-pointer">
        Saída
      </button>
      <h1 className="text-2xl font-bold cursor-pointer">Pizzaria Recanto do Céu</h1>
    </div>
  );
};

export default Header;
