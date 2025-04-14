import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetail() {
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5555/api/${id}`)
      .then(res => res.json())
      .then(data => setProperty(data))
      .catch(err => console.error('Error fetching property:', err));
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div>
      <img 
        src={property.image_url} 
        alt={property.title}
        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
      />
      <h2>{property.title}</h2>
      <p>Price: ${property.price}</p>
      <p>Location: {property.location}</p>
      <p>Description: {property.description}</p>
      <h3>Reviews</h3>
      {property.reviews && property.reviews.map(review => (
        <div key={review.id}>
          <p>Rating: {review.rating}/5</p>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PropertyDetail;
