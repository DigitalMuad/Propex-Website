import React from 'react';
import CreateProperty from '../components/CreateProperty';
import '../styles/AddPropertyPage.css';

function AddPropertyPage() {
  return (
    <div className="add-property-page">
      <h2>Add New Property</h2>
      <CreateProperty />
    </div>
  );
}

export default AddPropertyPage;
