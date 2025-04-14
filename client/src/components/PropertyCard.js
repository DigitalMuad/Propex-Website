import React from 'react';
import '../styles/PropertiesPage.css';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <div className="property-image-container">
        {property.isPremium && <div className="luxury-badge">Luxury</div>}
        <img
          src={`${property.image_url}?auto=format&fit=crop&w=800&h=500`}
          alt={property.title}
          className="property-image"
        />
      </div>
      <div className="property-details">
        <h3>{property.title}</h3>
        <div className="property-price">${property.price.toLocaleString()}</div>
        <div className="property-location">
          <i className="fas fa-map-marker-alt"></i> {property.location}
        </div>
        <div className="property-features">
          <span><i className="fas fa-bed"></i> {property.bedrooms} BR</span>
          <span><i className="fas fa-bath"></i> {property.bathrooms} BA</span>
          <span><i className="fas fa-ruler-combined"></i> {property.sqft} sqft</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
