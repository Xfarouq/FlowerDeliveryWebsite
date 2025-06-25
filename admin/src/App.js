import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Flowers from './pages/Flowers';
import AddFlower from './pages/AddFlower';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Navigate to="/admin/flowers" />} />
        <Route path="/admin/flowers" element={<Flowers />} />
        <Route path="/admin/add-flower" element={<AddFlower />} />
      </Routes>
    </div>
  );
}