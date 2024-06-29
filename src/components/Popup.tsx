// src/components/Popup.tsx
"use client";

import React from 'react';

interface PopupProps {
  message: string;
}

const Popup: React.FC<PopupProps> = ({ message }) => {
  return (
    <div className="fixed bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
      {message}
    </div>
  );
};

export default Popup;
