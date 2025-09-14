import React from 'react';

const ChatToggle = ({ toggleChat }) => {
  return (
    <div className="chat-toggle" onClick={toggleChat}>
      💬
    </div>
  );
};

export default ChatToggle;