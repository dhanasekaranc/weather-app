import Sidebar from "./Sidebar";
import Header from "./Header";
import  "./Home.css";
import CitiesModal from "./CitiesModal";

const Home = ({showModal , setShowModal, cities, setCities}) => {
   
    return (
        <div className="home">
           <Sidebar />
           <Header setShowModal={setShowModal}/>
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