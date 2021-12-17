import React from 'react';
import '../Styles/SelectButtons.css';

const SelectButtons = ({selectAll, deselectAll}) => {
  return(
  <div className="mb3">
      <button onClick={selectAll} className="ma2 select">
      Select All
    </button>
    <button onClick={deselectAll} className="ma2 deselect">
      Clear All
    </button>
  </div>
  );
}

export default SelectButtons;