import React, { useState, useEffect } from 'react';
import CarList from './CarList';
import RentalForm from './RentalForm';
import { Carousel } from 'react-bootstrap';
import LoginPage from './LoginPage';
import Navbar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage({ currentPage, setCurrentPage }) {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [fuelType, setFuelType] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('');
  const [transmission, setTransmission] = useState('');

  // const [reservationDetails, setReservationDetails] = useState(null);
  // const updateReservationDetails = (details) => {
  //   setReservationDetails(details);
  // };

  useEffect(() => {
    fetch(`http://localhost:3000/cars?fuelType=${selectedFuelType}`)
      .then(response => response.json())
      .then(data => setFuelType(data))
      .catch(error => console.error('Araçlar çekerken hata:', error));
  }, [selectedFuelType]);



  useEffect(() => {
    // Kategorileri Çekme
    fetch('http://localhost:3000/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Kategoriler çekerken hata:', error));


    // Markaları Çekme
    fetch('http://localhost:3000/brands')
      .then(response => response.json())
      .then(data => setBrands(data))
      .catch(error => console.error('Markalar çekerken hata:', error));

    fetch('http://localhost:3000/fuelType')
      .then(response => response.json())
      .then(data => setFuelType(data))
      .catch(error => console.error('Yakıt türü çekerken hata:', error));
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleTransmissionChange = (event) => {
    setTransmission(event.target.value);
  };

  const handleFuelTypeChange = (event) => {
    setSelectedFuelType(event.target.value);
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mt-4 text-center" >

          <Carousel
            interval={5500}
            indicators={true}
            controls={true}
          >
            <Carousel.Item>
              <img
                className="  img-fluid "
                src="https://www.webtekno.com/images/editor/default/0002/56/7d786475611bc54a2ba5e5326d1ae90060ae0267.jpeg"
                alt="Ford F150"
                style={{ borderRadius: '10px', overflow: 'hidden', width: '90%', height: '600px' }}
              />
              <Carousel.Caption>
                <h3>Ford F150 Suv aracı şimdi kiralık!!</h3>
                <p>Detaylı bilgi için aşağıdaki listeye göz atın.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=""
                src="https://cdn.motor1.com/images/mgl/6ZKZNe/s3/2024-chevrolet-silverado-hd.jpg"
                alt="Chavrolet Silverado"

                style={{ borderRadius: '10px', overflow: 'hidden', width: '90%', height: '600px' }}
              />
              <Carousel.Caption>
                <h3>Chavrolet Silverado aracı şimdi kiralık!!! </h3>
                <p>Detaylı bilgi için aşağıdaki listeye göz atın.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.motor1.com/images/mgl/P3n4zA/s3/2024-jeep-wrangler-4xe-front-view.jpg"
                alt="Jeep - Wrangler"
                style={{ borderRadius: '10px', overflow: 'hidden', width: '90%', height: '600px' }}
              />
              <Carousel.Caption>
                <h3>Jeep - Wrangler şimdi kiralık !!</h3>
                <p>Detaylı bilgi için aşağıdaki listeye göz atın.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="  img-fluid "
                src="https://cdn.motor1.com/images/mgl/433pY/s3/2021-ram-1500-trx.jpg"
                alt="Ford F150"
                style={{ borderRadius: '10px', overflow: 'hidden', width: '90%', height: '600px' }}
              />
              <Carousel.Caption>
                <h3>Ram - 1500 aracı şimdi kiralık!!</h3>
                <p>Detaylı bilgi için aşağıdaki listeye göz atın.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="img-fluid "
                src="https://wallpapersmug.com/download/1280x720/77a3c0/dodge-challenger-srt-hellcat.jpg"
                alt="Ford F150"
                style={{ borderRadius: '10px', overflow: 'hidden', width: '90%', height: '600px' }}
              />
              <Carousel.Caption>
                <h3>Dodge - Challenger aracı şimdi kiralık!!</h3>
                <p>Detaylı bilgi için aşağıdaki listeye göz atın.</p>
              </Carousel.Caption>
            </Carousel.Item>


          </Carousel>



        </div>

        <div className="col-2"></div>
        <div className="col-8 text-center bg-warning-subtle mt-3" style={{ borderRadius: "10px" }}><div className='mt-3' style={{ width: '100%', justifyContent: 'evenly' }}>
          <span className='mx-5' ><b>Araç Türleri</b></span>
          <span className='mx-5' ><b>Markalar</b></span>
          <span className='mx-5' ><b>Şanzıman Tipi</b></span>

        </div>



          <div style={{ width: '100%', justifyContent: 'center' }} className='text-center mx-3 '>
            <select className='btn btn-white text-center mx-3 mb-4 mt-3' style={{ backgroundColor: "wheat", boxShadow: '1px 1px 1px black' }} onChange={handleCategoryChange}>
              <option value="">Seçim Yapınız</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>

            <select className='btn btn-white text-center mx-3 mb-4 mt-3' style={{ backgroundColor: "wheat", boxShadow: '1px 1px 1px black' }} onChange={handleBrandChange}>
              <option className=' ' value="">Seçim Yapınız</option>
              {brands.map(brand => (
                <option className='text-center' key={brand.id} value={brand.id}>{brand.name}</option>
              ))}
            </select>

            {/* Şanzıman Türü Seçimi */}
            <select className='btn btn-white text-center mx-3 mb-4 mt-3' style={{ backgroundColor: "wheat", boxShadow: '1px 1px 1px black' }} onChange={handleTransmissionChange}>
              <option value="">Seçim Yapınız</option>
              <option value="Manuel">Manuel</option>
              <option value="Otomatik">Otomatik</option>

            </select>

            {/* Yakıt Türü Seçimi
            <select className='btn btn-white text-center mx-3 mb-4 mt-3' style={{ backgroundColor: "wheat", boxShadow: '1px 1px 1px black' }} onChange={handleFuelTypeChange}>
              <option className=' ' value="">Seçim Yapınız</option>
              {fuelType.map(fueltype => (
                <option className='text-center' key={fueltype.id} value={fueltype.id}>{fueltype.name}</option>
              ))}
            </select> */}

          </div>

          <div>
            
          </div>

        </div>
        <div className="col-12  mt-3">

          <CarList
            category={selectedCategory}
            brandId={selectedBrand}
            transmission={transmission}
            fuelType={selectedFuelType}

          />


        </div>
      </div>
    </div>


  );
}

export default HomePage;
