// src/components/Hero.tsx

import React from 'react';
import ItemNew from './ItemNew';
import ItemOut from './ItemOut';

interface HeroProps {
  activeForm: 'entrada' | 'saida' | null;
}

const Hero: React.FC<HeroProps> = ({ activeForm }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {activeForm === 'entrada' && <ItemNew />}
      {activeForm === 'saida' && <ItemOut />}
      {activeForm === null && <div>Bem-vindo à Pizzaria Recanto do Céu! Selecione uma ação acima.</div>}
    </div>
  );
};

export default Hero;
