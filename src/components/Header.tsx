// src/components/Header.tsx

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-red-800 text-white py-4 px-8 flex justify-between items-center">
      <Link href="/" passHref>
      <button id="homeButton" className="text-2xl font-bold focus:outline-none cursor-pointer">
        Pizzaria Recanto do Céu
      </button>
      </Link>
      <div>
        <Link href="/itemNew" passHref>
          <span className="text-white text-lg font-bold mr-4 cursor-pointer">Entrada</span>
        </Link>
        <Link href="/itemOut" passHref>
          <span className="text-white text-lg font-bold cursor-pointer">Saída</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
