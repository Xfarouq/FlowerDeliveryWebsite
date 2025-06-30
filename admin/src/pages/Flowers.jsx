import React, { useEffect, useState } from 'react';

export default function Flowers() {
  const [flowers, setFlowers] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  const fetchFlowers = async () => {
    try {
      const response = await fetch(`${API_URL}/api/flowers`);
      console.log("Raw response:", response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Parsed flower data:", data);

      setFlowers(data);
    } catch (err) {
      console.error('Error fetching flowers:', err);
    }
  };

  const deleteFlower = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/flowers/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Delete failed! status: ${response.status}`);
      }

      console.log(`Flower with ID ${id} deleted`);
      fetchFlowers(); // Refresh list
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
