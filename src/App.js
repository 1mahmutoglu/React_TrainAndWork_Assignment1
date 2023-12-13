import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import Navbar from './NavBar';
import Sidebar  from './Sidebar'
import LoginPage from './LoginPage';
import CarList from './CarList';
import Footer from './Footer';
import RentalForm from './RentalForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const handleLoginClick = () => {
    setShowLoginPage(true);
    console.log("Açıldı");
    
  };


  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
          <Navbar onLoginClicked={handleLoginClick} />
          </div>
          <div className="col-2">
          <Sidebar/>
          </div>
          <div className="col-9 ms-5 mt-2" style={{ boxShadow:'-2px 0 10px 20px burlywood', borderRadius:'10px'}} >
          <HomePage />
          {showLoginPage ? <LoginPage /> : <CarList />}
          {/* <RentalForm updateReservation={updateReservationFunctionFromNavBar} /> */}
          
          </div>
          <div className="col-12 bg-light mt-3" style={{borderRadius:'20px'}}>
          <Footer />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
