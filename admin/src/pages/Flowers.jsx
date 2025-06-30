import React, { useEffect, useState } from 'react';

export default function Flowers() {
  const [flowers, setFlowers] = useState([]);
  const API_URL = 'https://flowerdeliverywebsite-backend.onrender.com';

  const fetchFlowers = async () => {
    try {
      const res = await fetch(`${API_URL}/api/flowers`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      console.log('Fetched flowers:', data); // ✅ Console log the fetched data
      setFlowers(data);
    } catch (err) {
      console.error('Error fetching flowers:', err);
    }
  };

  const deleteFlower = async (id) => {
    try {
      const res = await fetch(`${API_URL}/api/flowers/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error(`Failed to delete flower: ${res.status}`);
      fetchFlowers(); // Refresh the list
    } catch (err) {
      console.error('Error deleting flower:', err);
    }
  };

  useEffect(() => {
    fetchFlowers();
  }, []);

  return (
    <div className="flower-list">
      {flowers.map((flower) => (
        <div className="flower-card" key={flower._id}>
          <img
            src={`${API_URL}/${flower.image}`}
            alt={flower.name}
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <div className="flower-details">
            <p><strong>Name:</strong> {flower.name}</p>
            <p><strong>Category:</strong> {flower.category}</p>
            <p><strong>Price:</strong> ${flower.price}</p>
            <p><strong>Description:</strong> {flower.description}</p>
            <button onClick={() => deleteFlower(flower._id)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
}
