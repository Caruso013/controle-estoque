// src/app/page.tsx

'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  const [activeForm, setActiveForm] = useState<'entrada' | 'saida' | null>(null);

  const handleEntradaClick = () => {
    setActiveForm('entrada');
  };

  const handleSaidaClick = () => {
    setActiveForm('saida');
  };

  return (
    <div>
      <Header onEntradaClick={handleEntradaClick} onSaidaClick={handleSaidaClick} />
      <Hero activeForm={activeForm} />
    </div>
  );
};

export default Home;
