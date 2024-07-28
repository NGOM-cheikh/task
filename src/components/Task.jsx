
// Création Task

import React from 'react';

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <section style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span>{task.text}</span>
      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? 'Invalider' : 'Valider'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </section>
  );
}

export default Task;
