
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const RentalForm = ({ car }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');

    const locations = ["İstanbul", "Ankara", "İzmir"];

    const handleSubmit = (event) => {
        event.preventDefault();
        const start = new Date(startDate);
        const end = new Date(endDate);
        const rentalDays = (end - start) / (1000 * 3600 * 24);
        const rentalFee = rentalDays * car.pricePerDay;
        alert(`Rezervasyonunuz yapıldı: ${startDate} - ${endDate} tarihleri için Toplam Tutar: $ ${rentalFee} `);
        // updateReservation({ date: startDate, carName: car.name, totalPrice: calculatedPrice });
    };

    return (

        <>

            <Card style={{ width: '100%', height: '350px'}}>
                <div className="row">
                    <div className="col-md-6" style={{border: '2px 2px solid black', width:'50%', height:'50px', alignItems:'center'}} >
                        <img src={car.image} alt={`${car.brand} ${car.model}`} style={{ height: '200px', width: '100%' }} />
                    </div>
                    <div className="col-md-6">
                        <Card.Body>
                            <Card.Title>{car.brand} - {car.model}</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Başlangıç Tarihi</Form.Label>
                                    <Form.Control type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Bitiş Tarihi</Form.Label>
                                    <Form.Control type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Kiralama Yeri</Form.Label>
                                    <Form.Control as="select" value={location} onChange={e => setLocation(e.target.value)}>
                                        {locations.map((location, index) => (
                                            <option key={index} value={location}>{location}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="submit" className='mt-3' >Rezervasyon Yap</Button>
                            </Form>
                        </Card.Body>
                    </div>
                </div>
            </Card>

        </>

    );
};

export default RentalForm;
