// Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the adminToken from localStorage
    localStorage.removeItem('adminToken');

    // Redirect the user to the login page or homepage
    navigate('/login'); // or you can navigate('/admin') if you want to redirect to the homepage
  }, [navigate]);

  return <p>Logging out...</p>; // Optional loading state message
}
