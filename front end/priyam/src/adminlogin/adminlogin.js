import React, { useState } from 'react';
import axios from 'axios';
import './adminlogin.css';
import AdminHeader from '../header/adminheader';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4000/admin/adminlogin', {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.data);
		
        window.location = '/addrooms';
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
	<>
  <AdminHeader/>

    <div className="login-container">
      <h1>Admin Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="login-button-container">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
	</>
  );
};

export default AdminLogin;
