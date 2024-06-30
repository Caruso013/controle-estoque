// Header.tsx
import React from 'react';

interface HeaderProps {
  onEntradaClick: () => void;
  onSaidaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onEntradaClick, onSaidaClick }) => {
  return (
    <header className="bg-red-800 text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer">Pizzaria Recanto do Céu</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={onEntradaClick}
                className="text-lg font-bold hover:text-gray-300 focus:outline-none cursor-pointer"
              >
                Entrada
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
