
// Création components TaskList

import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onToggleTaskCompletion, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <section
          key={index}
          className={`task-item ${task.completed ? 'completed' : ''}`} >
          <span>{task.text}</span>
          <button onClick={() => onToggleTaskCompletion(index)}>
            {task.completed ? 'Invalidate' : 'Validate'}
          </button>
          <button onClick={() => onDeleteTask(index)}>Delete</button>
        </section>
      ))}
    </div>
  );
}

export default TaskList;
