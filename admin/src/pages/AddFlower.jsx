import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddFlower() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: null,
  });

  const API_URL = 'https://flowerdeliverywebsite-backend.onrender.com'; // 

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await fetch(`${API_URL}/api/flowers`, {
        method: 'POST',
        body: data,
      });

      if (!res.ok) {
        throw new Error('Failed to add flower');
      }

      toast.success('Flower added successfully!');
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        image: null,
      });
    } catch (error) {
      console.error('Error adding flower:', error);
      toast.error('Failed to add flower.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
        <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" type="number" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required></textarea>
        <input type="file" name="image" onChange={handleChange} accept="image/*" required />
        <button type="submit">Add Flower</button>
      </form>
      <ToastContainer />
    </div>
  );
}
