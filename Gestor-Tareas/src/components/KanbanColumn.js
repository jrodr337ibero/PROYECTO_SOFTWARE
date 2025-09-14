import React from 'react';
import TaskCard from './TaskCard';

const KanbanColumn = ({ title, tasks, count, isCompleted = false }) => {
  return (
    <div className="kanban-column">
      <div className="column-header">
        <div className="column-title">{title}</div>
        <div className="task-count">{count}</div>
      </div>
      <div className="task-list">
        {tasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            isCompleted={isCompleted}
          />
        ))}
      </div>
      <button className="add-task-btn">+ Añadir tarea</button>
    </div>
  );
};

export default KanbanColumn;