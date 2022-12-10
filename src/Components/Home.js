import Sidebar from "./Sidebar";
import Header from "./Header";
import  "./Home.css";
import CitiesModal from "./CitiesModal";
import WeatherDetailSection from "./WeatherDetailSection";

const Home = ({showModal , setShowModal, cities, setCities}) => {
   
    return (
        <div className="home">
           <Sidebar />
           <div className='home-container'>
             <Header setShowModal={setShowModal}/>
             {
               cities.favourites.length > 0 ?
                cities.favourites.map(city => {
                  return (
                    <div key={city.id} className='city-card'>
                      <div>Header</div>
                      <WeatherDetailSection detailCity={city} />
                  </div>
                  )
                })
               :
               <p>You have not selected any city as a favorite yet.</p>
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

export default Home;