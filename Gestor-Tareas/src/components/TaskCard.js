import React from 'react';

const TaskCard = ({ task, isCompleted }) => {
  return (
    <div className="task-card" draggable="true">
      <div className="task-title">{task.title}</div>
      <div className="task-meta">
        <div className="task-date">
          {isCompleted ? `Completado: ${task.completedDate}` : `Vence: ${task.dueDate}`}
        </div>
        <div className="task-assignee">
          <div className="assignee-avatar">{task.assignee.initials}</div>
          {task.assignee.name}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;