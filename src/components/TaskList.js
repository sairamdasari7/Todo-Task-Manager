import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      <li key={task.id} className="task-item">
        <span>{task.description}</span>
        <span>{task.labels.join(', ')}</span>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TaskList;
