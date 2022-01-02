import React from 'react';

const FilterList = (props) => {
  const {onFilterChange} = props;
  return(
    <div className="filtersContainer">
      <div className="filterOption white">
        <input onChange={() => { onFilterChange("All Armor") }} type="checkbox" className="ma2" />
        Armor (All)
      </div>
      <div className="filterOption white">
        <input onChange={() => {onFilterChange("Body Armors")}} type="checkbox" className="ma2" />
        Body Armors
      </div>
      <div className="filterOption white">
        <input onChange={() => {onFilterChange("Helms") }} type="checkbox" className="ma2" />
        Helms
      </div>
      <div className="filterOption white">
        <input onChange={() => { onFilterChange("Shields") }} type="checkbox" className="ma2" />
        Shields
      </div>
    </div>
  );
}

export default FilterList;