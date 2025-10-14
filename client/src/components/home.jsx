import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // You can create a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Smart City</h1>
        <p>Your gateway to a smarter urban experience.</p>
        <div className="home-buttons">
          <Link to="/login" className="btn btn-login">Login</Link>
          <Link to="/register" className="btn btn-register">Register</Link>
        </div>
      </header>
    </div>
  );
};

export default Home;