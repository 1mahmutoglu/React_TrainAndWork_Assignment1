import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar({ onLoginClicked }) {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    
    // const [reservationInfo, setReservationInfo] = useState({});
    // const updateReservation = (info) => {
    //     setReservationInfo(info);};


    // useEffect(() => {
    //     fetch('') 
    //         .then(response => response.json())
    //         .then(data => setCategories(data.categories))
    //         .catch(error => console.error('Error fetching categories:', error));

    // }, []);

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid bgg" style={{ boxShadow: '0px 2px 10px black', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                <a className="navbar-brand text-white ms-5" href="#">
                    <img className='ms-5' style={{ width: '95px' }} src="logo512.png" alt="Logo" />
                </a>
                <button onClick={onLoginClicked} className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse ms-5 " id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-5 " style={{ textShadow: '1px 1px 2px black', fontSize: '18px' }}>
                        <li className="nav-item ">
                            <a className="nav-link text-white active" href="#">Anasayfa</a>
                        </li>
                        <li className="nav-item me-3 ">
                            <a className="nav-link text-white" href="#">Hakkında</a>
                        </li>
                        <form className="d-flex me-5" role="search">
                            <input className="form-control  ms-5 me-2" style={{ width: '280px' }} type="search" placeholder="Ara" aria-label="Search" />
                            <button onClick={onLoginClicked} className="btn btn-light" style={{ width: '100px', height: '40px' }} type="submit">Ara</button>
                        </form>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropbtn" href="#">Kategoriler</a>
                            <div className="dropdown">

                                <div className="dropdown-content">
                                    {categories.map(category => (
                                        <a href="#" key={category.id} onClick={() => setSelectedCategory(category.id)}>
                                            {category.name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </li>
                        <li className="nav-item ms-3 ">
                            <a className="nav-link text-white" href="#">İletişim</a>
                        </li>
                        <li className="nav-item me-4 ">
                            <a className="nav-link text-white" href="#">Sepet</a>
                        </li>
                        <li className="nav-item me-4 ">

                            <a className="nav-link text-white" href="#"> <button onClick={onLoginClicked} className="btn btn-light" type="submit">Giriş Yap</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#"> <button  className="btn btn-light" type="submit">Kaydol</button></a>
                        </li>

                    </ul>

                </div>
            </div>

                                

        </nav>
    );
}

export default Navbar;