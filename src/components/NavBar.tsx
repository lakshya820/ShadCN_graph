// NavBar.tsx
import React from 'react';
import '../css/NavBar.css';
import { Link, Outlet } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      
      <Link className="link_to_dashboard" to="/dashboard">Dashboard</Link>
      <Link className="link_to_tests"to="/tests1">Tests</Link>
      <Link className="link_to_settings"to="/settings1">Settings</Link>
      </div>
  );
};

export default NavBar;
