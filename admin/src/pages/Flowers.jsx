import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Flowers() {
  const [flowers, setFlowers] = useState([]);

  const fetchFlowers = async () => {
    try {
      const res = await axios.get('/api/flowers');
      console.log('Fetched flowers:', res.data); // ✅ Console log to inspect data
      setFlowers(res.data);
    } catch (err) {
      console.error('Error fetching flowers:', err);
    }
  };

  const deleteFlower = async (id) => {
    try {
      await axios.delete(`/api/flowers/${id}`);
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
          <img src={`/${flower.image}`} alt={flower.name} />
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
