  import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/', {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => setProperties(data))
    .catch(err => {
      console.error('Error fetching properties:', err);
      // You might want to set some error state here to show to the user
    });
  }, []);

  return (
    <div>
      <h2>Available Properties</h2>
      {properties.map(property => (
        <div key={property.id}>
          <Link to={`/properties/${property.id}`}>
            <img 
              src={property.image_url} 
              alt={property.title}
              style={{width: '300px', height: '200px', objectFit: 'cover'}}
            />
            <h3>{property.title}</h3>
          </Link>
          <p>Price: ${property.price.toLocaleString()}</p>
          <p>Location: {property.location}</p>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
