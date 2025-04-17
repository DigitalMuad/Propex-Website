import React from 'react';
import { Link } from 'react-router-dom';
import luxuryProperties from '../data/luxuryProperties';
import '../styles/PropertiesPage.css';

const PropertiesPage = () => {
  return (
    <div className="properties-page">
      <h1 className="page-title">Luxury Properties</h1>
      <div className="properties-container">
        {luxuryProperties.map(property => (
          <Link to={`/properties/${property.id}`} key={property.id} className="property-card">
            <img 
              src={property.image_url} 
              alt={property.title}
              className="property-image"
            />
            <div className="property-details">
              <h2 className="property-title">{property.title}</h2>
              <p className="property-price">${property.price.toLocaleString()}</p>
              <p className="property-location">
                <i className="fas fa-map-marker-alt"></i>
                {property.location}
              </p>
              <p className="property-description">{property.description}</p>
              <div className="property-features">
                <span className="feature">
                  <i className="fas fa-bed"></i> {property.bedrooms} BR
                </span>
                <span className="feature">
                  <i className="fas fa-bath"></i> {property.bathrooms} BA
                </span>
                <span className="feature">
                  <i className="fas fa-ruler-combined"></i> {property.sqft} sqft
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
