import React, { useEffect } from 'react'
import './CitySelection.css';
import { Cities } from "../data";


const  CitySelection = ({city, cities, setCities}) => {
  const handleClick = (event) => {
    setCities({
      selected: [...cities.selected, city],
      favourites: cities.favourites
    });
  }
  
  return (
    <div className='city-selection'>
      <h5 style={{margin: "0"}} id={city.name}>{city.name}</h5>
      <button className="add-city-button" name={city.name} onClick={handleClick}>+</button>
    </div>
  )
}

export default CitySelection;