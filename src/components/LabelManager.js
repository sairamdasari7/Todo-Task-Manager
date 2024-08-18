import React, { useState } from 'react';

const LabelManager = ({ addLabel }) => {
  const [label, setLabel] = useState('');

  const handleAddLabel = () => {
    if (label) {
      addLabel(label);
      setLabel('');
    }
  };

  return (
    <div className="label-manager">
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Enter new label"
      />
      <button onClick={handleAddLabel}>Add Label</button>
    </div>
  );
};

export default LabelManager;
