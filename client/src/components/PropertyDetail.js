import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/PropertyDetail.css'; // Assuming a CSS file for styling

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const response = await fetch(`/api/properties/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProperty(data);
      } else {
        console.error('Failed to fetch property details');
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-detail">
      <h1>{property.title}</h1>
      <img src={property.image_url} alt={property.title} />
      <p>{property.description}</p>
      <p>Price: ${property.price.toLocaleString()}</p>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Size: {property.sqft} sqft</p>
    </div>
  );
};

export default PropertyDetail;
