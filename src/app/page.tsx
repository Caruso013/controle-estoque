// page.tsx
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

const Page: React.FC = () => {
  const [activeForm, setActiveForm] = useState<"entrada" | "saida" | null>(null); // Explicit typing

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

export default Page;
