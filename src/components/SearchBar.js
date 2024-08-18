import React, { useState } from 'react';

const SearchBar = ({ labels, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, selectedLabel });
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks"
      />
      <select
        value={selectedLabel}
        onChange={(e) => setSelectedLabel(e.target.value)}
      >
        <option value="">All Labels</option>
        {labels.map((label) => (
          <option key={label} value={label}>
            {label}
          </option>
        ))}
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
