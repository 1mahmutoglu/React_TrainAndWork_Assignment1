import React, { useState, useEffect } from 'react';
import RentalForm from './RentalForm';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';



function Car({ car, onSelectCar }) {
  const handleRental = (rentalDetails) => {
    alert(`Araç Kiralandı: ${car.brand} ${car.model}`, rentalDetails);
  };


  const [showModal, setShowModal] = useState(false); //yeni eklendi
  const handleShowModal = () => setShowModal(true);  //yeni eklendi
  const handleCloseModal = () => setShowModal(false);  //yeni eklendi

  return (
    <div className='car-card bordered text-center mb-3' style={{ border: '1px solid gray', padding: '10px', borderRadius: '5px', width: '245px', backgroundColor: "white" }}>
      <p className='text-center'><b>{car.car_type} Araç</b></p>
      <div className='image-container'>
        <img src={car.image} alt={`${car.brand} ${car.model}`} style={{ height: '200px', width: '100%' }} />
      </div>
      <h5 className='text-center'> <b>{car.brand}  -  {car.model}</b></h5>
      <p className='text-center'><b>{car.year}</b> </p>
      <p><b>Yakıt Türü:</b> {car.fuel_type}</p>
      <p><b>Şanzıman Türü: </b> {car.transmission}</p>
      <p><b> Günlük Fiyatı: ${car.pricePerDay}</b></p>
      <form>
      <div>
      
      <button type="button" className="btn btn-primary" onClick={handleShowModal}>
        Araç Kirala
      </button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{car.brand} {car.model}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RentalForm car={car} />
        </Modal.Body>
      </Modal>
    </div>
      </form>


    </div>


  );
}

export default Car;
