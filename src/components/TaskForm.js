import React, { useState } from 'react';
import LabelManager from './LabelManager';

const TaskForm = ({ addTask, taskToEdit, labels }) => {
  const [task, setTask] = useState(taskToEdit ? taskToEdit.description : '');
  const [selectedLabels, setSelectedLabels] = useState(taskToEdit ? taskToEdit.labels : []);
  const [newLabel, setNewLabel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ description: task, labels: selectedLabels });
    setTask('');
    setSelectedLabels([]);
  };

  const handleLabelChange = (label) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter(l => l !== label));
    } else {
      setSelectedLabels([...selectedLabels, label]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        required
      />
      <div className="label-container">
        {labels.map((label) => (
          <label key={label} className="label-checkbox">
            <input
              type="checkbox"
              checked={selectedLabels.includes(label)}
              onChange={() => handleLabelChange(label)}
            />
            {label}
          </label>
        ))}
        <LabelManager addLabel={(label) => setNewLabel(label)} />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
