import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Admin Panel</h1>
      <div className="links">
        <NavLink to="/admin/flowers" className={({ isActive }) => (isActive ? 'active' : '')}>Flowers</NavLink>
        <NavLink to="/admin/add-flower" className={({ isActive }) => (isActive ? 'active' : '')}>Add Flowers</NavLink>
      </div>
    </nav>
  );
}