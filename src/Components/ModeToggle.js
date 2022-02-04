import React from 'react';
import '../Styles/ModeToggle.css';

const ModeToggle = ({ activatedD2R, modeToggle }) => {
  return (
    <div className="toggleContainer">
      <label className="switch">
        <input type="checkbox"
          checked={activatedD2R}
          onChange={modeToggle}
        />
        <span className="slider" />
      </label>
      {activatedD2R ?
        <span className="mode">D2R Mode</span>
        :
        <span className="mode">LoD Mode</span>
      }
    </div>
  );
}

export default ModeToggle;