import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
 
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 " style={{width: "280px",boxShadow:'0px 3px 8px black',borderTopRightRadius:'10px',borderBottomRightRadius:'10px',backgroundColor:'rgb(94,48,13,0.8)'}}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light  text-decoration-none">
        <span className="fs-4">Kategori Menüsü</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto c" style={{textDecorationColor:"white", textDecoration:'none'}}>
        <li className="nav-item">
          <a href="#" className="nav-link link-light " aria-current="page">
            Anasayfa
          </a>
        </li>
        <li>
        <a href="#" className="nav-link link-light " >Kategoriler</a>
        </li>
        <li>
        <a href="#" className="nav-link link-light " >Rezarvasyon İşlemlerim</a>

        </li>
        <li>
        <a href="#" className="nav-link link-light ">Sepet</a>

        </li>
        <li>
        

        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center link-light  text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <strong>Diğer</strong>
        </a>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#">Ayarlar</a></li>
          <li><a className="dropdown-item" href="#">Profil</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Çıkış</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;