import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Flowers() {
  const [flowers, setFlowers] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  const fetchFlowers = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/flowers`);
      setFlowers(res.data);
    } catch (error) {
      console.error("Error fetching flowers:", error);
    }
  };

  const deleteFlower = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/flowers/${id}`);
      fetchFlowers();
    } catch (error) {
      console.error("Error deleting flower:", error);
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
            src={`${API_URL}/${flower.image.replace(/\\/g, '/')}`}
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
