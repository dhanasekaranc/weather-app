import './App.css';
import Home from './Components/Home';
import Cities from './Components/Cities';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [showModal , setShowModal] =useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home showModal={showModal} setShowModal={setShowModal}/>}></Route>
          <Route path="/Cities" element={<Cities showModal={showModal} setShowModal={setShowModal}/>}></Route>
        </Routes>
      </BrowserRouter>  
    </div> 
  );
}

export default App;
