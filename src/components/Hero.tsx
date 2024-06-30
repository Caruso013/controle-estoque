// src/components/Hero.tsx

import React from 'react';

interface HeroProps {
  itens: any[]; // Ajuste o tipo conforme seus itens
}

const Hero: React.FC<HeroProps> = ({ itens }) => {
  return (
    <div className="hero-section bg-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Itens</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((item) => (
                <tr key={item._id} className="border-b border-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap">{item.nome}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.quantidade}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.categoria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hero;
