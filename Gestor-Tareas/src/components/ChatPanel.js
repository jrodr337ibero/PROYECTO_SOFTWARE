import React from 'react';

const ChatPanel = ({ isOpen, toggleChat }) => {
  return (
    <div className={`chat-panel ${isOpen ? 'open' : ''}`}>
      <div className="chat-header">
        <h3>Chat del equipo</h3>
        <span onClick={toggleChat}>X</span>
      </div>
      <div className="chat-messages">
        <div className="message">
          <div className="message-sender">María</div>
          <div className="message-content">¿Alguien ha revisado el diseño que envié?</div>
        </div>
        <div className="message">
          <div className="message-sender">Juan</div>
          <div className="message-content">Sí, ya lo vi. Necesitamos ajustar los colores.</div>
        </div>
        <div className="message">
          <div className="message-sender">Carlos</div>
          <div className="message-content">He terminado el módulo de autenticación. ¿Pueden revisarlo?</div>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Escribe un mensaje..." />
      </div>
    </div>
  );
};

export default ChatPanel;