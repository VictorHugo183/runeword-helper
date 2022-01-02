import React from 'react';
import '../Styles/FilterList.css'

const FilterList = (props) => {
  const {onFilterChange} = props;
  return(
    <div className="filtersContainer">
      <div className="armorFilters">
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

      <div className="weaponFilters">
        <div className="filterOption white">
          <input onChange={() => { onFilterChange("All Weapons") }} type="checkbox" className="ma2" />
          Weapons (All)
        </div>
        <div className="filterOption white">
          <input onChange={() => { onFilterChange("Melee Weapons") }} type="checkbox" className="ma2" />
          Melee Weapons
        </div>
        <div className="filterOption white">
          <input onChange={() => { onFilterChange("Missile Weapons") }} type="checkbox" className="ma2" />
          Missile Weapons
        </div>
        <div className="filterOption white">
          <input onChange={() => { onFilterChange("Axes") }} type="checkbox" className="ma2" />
          Axes
        </div>
        <div className="filterOption white">
          <input onChange={() => { onFilterChange("Claws") }} type="checkbox" className="ma2" />
          Claws
        </div>
        <div className="filterOption white">
          <input onChange={() => { onFilterChange("Clubs") }} type="checkbox" className="ma2" />
          Clubs
        </div>
        <div className="filterOption white">
          <input onChange={() => { onFilterChange("Hammers") }} type="checkbox" className="ma2" />
          Hammers
        </div>
        <div className="filterOption white">
          <input onChange={() => { onFilterChange("Maces") }} type="checkbox" className="ma2" />
          Maces
        </div>
        <div className="filterOption white">
          <input onChange={() => { onFilterChange("Polearms") }} type="checkbox" className="ma2" />
          Polearms
        </div>
        <div className="filterOption white">
          <input onChange={() => { onFilterChange("Scepters") }} type="checkbox" className="ma2" />
          Scepters
        </div>
      </div>
    </div>
  );
}

export default FilterList;