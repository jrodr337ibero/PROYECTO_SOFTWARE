import React from 'react';
import KanbanColumn from './KanbanColumn';

const KanbanBoard = ({ tasks }) => {
  return (
    <div className="kanban-board">
      <KanbanColumn 
        title="Por hacer" 
        tasks={tasks.todo} 
        count={tasks.todo.length} 
      />
      <KanbanColumn 
        title="En progreso" 
        tasks={tasks.inProgress} 
        count={tasks.inProgress.length} 
      />
      <KanbanColumn 
        title="En revisión" 
        tasks={tasks.inReview} 
        count={tasks.inReview.length} 
      />
      <KanbanColumn 
        title="Completado" 
        tasks={tasks.completed} 
        count={tasks.completed.length} 
        isCompleted={true}
      />
    </div>
  );
};

export default KanbanBoard;