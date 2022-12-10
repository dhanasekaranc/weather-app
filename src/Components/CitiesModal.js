import React from 'react';
import './CitiesModal.css';
import { Cities } from "../data";
import CitySelection from "./CitySelection";

function CitiesModal({setShowModal, cities, setCities}) {
    const handleClick = () =>{
        setShowModal(false)
    }
    
  return (
      <div className='city-modal'>
        <div className='city-modal-header'>
            <h5>Add City Modal</h5>
            <button onClick={handleClick}>X</button>
        </div>
        <hr style={{margin: "0"}}/>
        <div className='cities-container'>
          {
            Cities.filter(city => !cities.selected.includes(city))
              .map(city =>
               <CitySelection key={city.id} city={city} cities={cities} setCities={setCities}
            />)
          }
        </div>
    </div>
  )
}

export default CitiesModal