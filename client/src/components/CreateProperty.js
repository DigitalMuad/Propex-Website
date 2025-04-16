import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateProperty() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [sqft, setSqft] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    if (!token) {
      alert('Please login to add a property');
      navigate('/auth');
      return;
    }

    const newProperty = {
      title,
      description,
      price: Number(price),
      location,
      bedrooms: Number(bedrooms),
      bathrooms: Number(bathrooms),
      sqft: Number(sqft),
      image_url: imageUrl,
    };

    fetch('http://localhost:5000/api/properties', {
      method: 'POST',
      credentials: 'include', // Add this line
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify(newProperty),
    })
    .then(async (res) => {
      const text = await res.text();
      if (!res.ok) {
        throw new Error(text || 'Failed to create property');
      }
      return text ? JSON.parse(text) : {};
    })
    .then((data) => {
      alert('Property added successfully!');
      navigate('/properties');
    })
    .catch((err) => {
      console.error('Error adding property:', err);
      alert(`Failed to add property: ${err.message}`);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Property</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <input type="number" placeholder="Bedrooms" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} required />
      <input type="number" placeholder="Bathrooms" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} required />
      <input type="number" placeholder="Square Footage" value={sqft} onChange={(e) => setSqft(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
      <button type="submit">Add Property</button>
    </form>
  );
}

export default CreateProperty;
