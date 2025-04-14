import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [userProperties, setUserProperties] = useState([]);

  useEffect(() => {
    // Fetch user data
    fetch('/users/1') // Replace with actual user ID
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Error fetching user:', err));

    // Fetch user's properties
    fetch('/users/1/properties') // Replace with actual user ID
      .then(res => res.json())
      .then(data => setUserProperties(data))
      .catch(err => console.error('Error fetching properties:', err));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      
      <h3>My Properties</h3>
      {userProperties.map(property => (
        <div key={property.id}>
          <h4>{property.title}</h4>
          <p>Price: ${property.price}</p>
          <p>Location: {property.location}</p>
        </div>
      ))}
    </div>
  );
}

export default UserProfile;
