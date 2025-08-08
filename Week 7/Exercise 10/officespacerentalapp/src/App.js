import React from 'react';
import './App.css';

function App() {
  const offices = [
    {
      name: 'Downtown Tower',
      rent: 55000,
      address: 'MG Road, Bengaluru',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    },
    {
      name: 'Skyline View',
      rent: 62000,
      address: 'Baner, Pune',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914', // New working image
    },
    {
      name: 'Cyber Hub',
      rent: 75000,
      address: 'Cyber City, Gurugram',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    },
  ];

  return (
    <div className="app">
      <h1 className="heading">Office Space Rental App</h1>
      {offices.map((office, index) => (
        <div className="office-card" key={index}>
          <img
            src={office.image}
            alt={office.name}
            style={{
              width: '100%',
              maxWidth: '600px',
              height: '250px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '10px'
            }}
          />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>{' '}
            <span className={office.rent < 60000 ? 'rent-low' : 'rent-high'}>
              ₹{office.rent}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
