import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import ChatPanel from './components/ChatPanel';
import ChatToggle from './components/ChatToggle';
import './App.css';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [tasks, setTasks] = useState({
    todo: [
      {
        id: 1,
        title: 'Diseñar interfaz de usuario',
        dueDate: '25 Oct',
        assignee: { initials: 'MA', name: 'María' }
      },
      {
        id: 2,
        title: 'Configurar base de datos',
        dueDate: '26 Oct',
        assignee: { initials: 'JC', name: 'Juan' }
      }
    ],
    inProgress: [
      {
        id: 3,
        title: 'Implementar autenticación',
        dueDate: '28 Oct',
        assignee: { initials: 'CP', name: 'Carlos' }
      }
    ],
    inReview: [
      {
        id: 4,
        title: 'Documentar API',
        dueDate: '22 Oct',
        assignee: { initials: 'LA', name: 'Laura' }
      }
    ],
    completed: [
      {
        id: 5,
        title: 'Reunión de planificación',
        completedDate: '15 Oct',
        assignee: { initials: 'JS', name: 'Jorge' }
      }
    ]
  });
  console.log(setTasks)
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <KanbanBoard tasks={tasks} />
      </div>
      <ChatPanel isOpen={isChatOpen} toggleChat={toggleChat} />
      <ChatToggle toggleChat={toggleChat} />
    </div>
  );
}

export default App;

