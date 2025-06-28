import React, { useState } from 'react';
import axios from 'axios';
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

  const API_URL = process.env.REACT_APP_API_URL;

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
      await axios.post(`${API_URL}/api/flowers`, data);
      toast.success('Flower added successfully!');
      setFormData({ name: '', description: '', price: '', category: '', image: null });
    } catch (error) {
      toast.error('Failed to add flower.');
      console.error(error);
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
