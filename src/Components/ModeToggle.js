import React from 'react';
import '../Styles/ModeToggle.css';

const ModeToggle = ({activatedD2R, modeToggle}) =>{
  if(activatedD2R){
    return (
      <div className="toggleContainer">
        <label className="switch">
          <input type="checkbox"
            checked={activatedD2R}
            onChange={modeToggle}
          />
          <span className="slider" />
        </label>
        <span className="mode">D2R Mode</span>
      </div>
    );
  }
  else{
    return (
      <div className="toggleContainer">
        <label className="switch">
          <input type="checkbox"
            checked={activatedD2R}
            onChange={modeToggle}
          />
          <span className="slider" />
        </label>
        <span className="mode">LoD Mode</span>
      </div>
    );
  }
}

export default ModeToggle;