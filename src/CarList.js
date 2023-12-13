import React, { useState, useEffect } from 'react';
import Car from './Car';

function CarList({ category, brandId, transmission, fuelType }) {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  const onSelectCar = (car) => {
    setSelectedCar(car);

   alert(car.id)
  };
  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then(response => response.json())
      .then(data => {
        let filteredCars = data;
        if (category) {
          filteredCars = filteredCars.filter(car => car.categoryId === parseInt(category));
        }
        if (brandId) {
          filteredCars = filteredCars.filter(car => car.brandId === parseInt(brandId));
        }
        if (transmission) {
       
          filteredCars = filteredCars.filter(car => car.transmission === transmission);
        }
        if (fuelType) {
        
          filteredCars = filteredCars.filter(car => car.fuelType === fuelType);
        }
        setCars(filteredCars);
      })
      .catch(error => console.error('Error:', error));
  }, [category, brandId, transmission, fuelType]); 

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
    {cars.map(car => <Car onSelectCar={onSelectCar} key={car.id} car={car} />)}
  </div>
  );
}

export default CarList;
