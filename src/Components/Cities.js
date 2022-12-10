import React from 'react'
import Sidebar from './Sidebar';
import './Cities.css';
import CitiesModal from './CitiesModal';
import SelectedCities from "./SelectedCities";

const  Cities = ({showModal ,setShowModal, cities, setCities}) => {
  const handleClick = () =>{
    setShowModal(true)
}
  return (
    <div className='city'>
    <Sidebar/>
    <div className='city-container'>
        <h3 className='city-head' >Cities</h3>
        <button className='city-add-btn' onClick={handleClick}>+</button>
        <hr/>
        {
          cities.selected.length ?
          cities.selected.map(city =><SelectedCities city={city} />)
          :
          <p className='city-msg'>You have not selected any city.</p>
        }
    </div>
    { showModal &&
              <CitiesModal 
                setShowModal={setShowModal}
                cities={cities}
                setCities={setCities}
              />
           }
    </div>
  )
}

export default Cities