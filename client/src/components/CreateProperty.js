import React, { useState } from 'react';

function CreateProperty() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [sqft, setSqft] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = {
      title,
      description,
      price,
      location,
      bedrooms,
      bathrooms,
      sqft,
      image_url: imageUrl,
    };

    fetch('http://localhost:5555/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Property added:', data);
        // Reset form fields
        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
        setBedrooms('');
        setBathrooms('');
        setSqft('');
        setImageUrl('');
      })
      .catch((err) => console.error('Error adding property:', err));
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
