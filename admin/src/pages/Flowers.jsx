import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Flowers() {
  const [flowers, setFlowers] = useState([]);

  const fetchFlowers = async () => {
    const res = await axios.get('/api/flowers');
    setFlowers(res.data);
  };

  const deleteFlower = async (id) => {
    await axios.delete(`/api/flowers/${id}`);
    fetchFlowers();
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
