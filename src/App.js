import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';
import { saveToLocalStorage, getFromLocalStorage } from './utils/localStorage';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState(getFromLocalStorage('tasks'));
  const [labels, setLabels] = useState(getFromLocalStorage('labels'));
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    saveToLocalStorage('tasks', tasks);
    saveToLocalStorage('labels', labels);
  }, [tasks, labels]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const handleEditTask = (task) => {
    const updatedTask = prompt('Edit task description:', task.description);
    if (updatedTask) {
      setTasks(tasks.map(t => t.id === task.id ? { ...t, description: updatedTask } : t));
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleSearch = ({ searchTerm, selectedLabel }) => {
    const filtered = tasks.filter(task => {
      const matchesSearchTerm = task.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLabel = selectedLabel ? task.labels.includes(selectedLabel) : true;
      return matchesSearchTerm && matchesLabel;
    });
    setFilteredTasks(filtered);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} labels={labels} />
      <SearchBar labels={labels} onSearch={handleSearch} />
      <TaskList tasks={filteredTasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
