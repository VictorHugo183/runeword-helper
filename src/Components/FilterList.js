import React from 'react';
import '../Styles/FilterList.css'

const FilterList = (props) => {
  const { onFilterChange, socketValue, onSocketChange } = props;
  return (
    <>
      <div className="light-gray filterLabel">Sockets</div>
      <div className="socketFilters white">
        <label className="socketButton"><input value="Any" onChange={onSocketChange} checked={socketValue === "Any"} type="radio" /> Any</label>
        <label className="socketButton"><input value="2" onChange={onSocketChange} checked={socketValue === "2"} type="radio" /> 2</label>
        <label className="socketButton"><input value="3" onChange={onSocketChange} checked={socketValue === "3"} type="radio" /> 3</label>
        <label className="socketButton"><input value="4" onChange={onSocketChange} checked={socketValue === "4"} type="radio" /> 4</label>
        <label className="socketButton"><input value="5" onChange={onSocketChange} checked={socketValue === "5"} type="radio" /> 5</label>
        <label className="socketButton"><input value="6" onChange={onSocketChange} checked={socketValue === "6"} type="radio" /> 6</label>
      </div>
      
      <div className="light-gray filterLabel">Equipment</div>
      <div className="filtersContainer">
        <div className="armorFilters">
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("All Armor") }} type="checkbox" className="ma2" />
              Armor (All)
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Body Armors") }} type="checkbox" className="ma2" />
              Body Armors
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Helms") }} type="checkbox" className="ma2" />
              Helms
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Shields") }} type="checkbox" className="ma2" />
              Shields
            </label>
          </div>
        </div>

        <div className="weaponFilters">
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("All Weapons") }} type="checkbox" className="ma2" />
              Weapons (All)
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Melee Weapons") }} type="checkbox" className="ma2" />
              Melee Weapons
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Missile Weapons") }} type="checkbox" className="ma2" />
              Missile Weapons
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Axes") }} type="checkbox" className="ma2" />
              Axes
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Claws") }} type="checkbox" className="ma2" />
              Claws
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Daggers") }} type="checkbox" className="ma2" />
              Daggers
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Clubs") }} type="checkbox" className="ma2" />
              Clubs
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Hammers") }} type="checkbox" className="ma2" />
              Hammers
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Maces") }} type="checkbox" className="ma2" />
              Maces
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Polearms") }} type="checkbox" className="ma2" />
              Polearms
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Scepters") }} type="checkbox" className="ma2" />
              Scepters
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Spears") }} type="checkbox" className="ma2" />
              Spears
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Staves") }} type="checkbox" className="ma2" />
              Staves
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Swords") }} type="checkbox" className="ma2" />
              Swords
            </label>
          </div>
          <div className="filterOption white">
            <label className="filterButton">
              <input onChange={() => { onFilterChange("Wands") }} type="checkbox" className="ma2" />
              Wands
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterList;