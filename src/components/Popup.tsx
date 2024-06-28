// src/components/Popup.tsx

import React, { useState, useEffect } from 'react';
import './Popup.css'; // Arquivo CSS para estilização do pop-up

interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000); // Pop-up desaparece após 3 segundos

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`popup ${visible ? 'show' : 'hide'}`}>
      <div className="popup-content">
        <div className="popup-message">{message}</div>
        <div className="popup-icon">&#10003;</div> {/* Verificado em verde */}
      </div>
    </div>
  );
};

export default Popup;
