import React, { useState } from 'react';

const TaskForm = ({ addTask, labels }) => {
  const [description, setDescription] = useState('');
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description) {
      addTask({ description, labels: selectedLabels });
      setDescription('');
      setSelectedLabels([]);
    }
  };

  const handleLabelChange = (e) => {
    const { value, checked } = e.target;
    setSelectedLabels(prevLabels => 
      checked ? [...prevLabels, value] : prevLabels.filter(label => label !== value)
    );
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add new task"
      />
      <div className="label-container">
        {labels.map((label) => (
          <label key={label} className="label-checkbox">
            <input
              type="checkbox"
              value={label}
              checked={selectedLabels.includes(label)}
              onChange={handleLabelChange}
            />
            {label}
          </label>
        ))}
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
