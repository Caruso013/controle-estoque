// Header.tsx

import React from 'react';
import Link from 'next/link'; // Importa o Link do Next.js

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-red-800 text-white p-4">
      <h1 className="text-2xl font-bold">Pizzaria Recanto do Céu</h1>
      <div>
        <Link href="/itemNew" passHref>
          <span className="text-white text-lg font-bold mr-4 cursor-pointer">Entrada</span>
        </Link>
        <Link href="/intemOut" passHref>
          <span className="text-white text-lg font-bold cursor-pointer">Saída</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
