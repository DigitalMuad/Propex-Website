import React from 'react';
import { PropertyData } from '../data/PropertyData';
import PropertyCard from './PropertyCard';
import '../styles/FeaturedProperties.css';

function FeaturedProperties() {
  return (
    <section className="featured-properties">
      <div className="section-header">
        <p className="section-subtitle">Popular Choices</p>
        <h2 className="section-title">Featured Properties</h2>
      </div>
      <div className="properties-scroll-container">
        <div className="properties-scroll">
          {PropertyData.concat(PropertyData).map((property, index) => (
            <PropertyCard key={`${property.id}-${index}`} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
