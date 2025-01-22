import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroPage.css';

const IntroPage = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/form');
  };

  return (
    <div className="intro-page" onClick={handleProceed}>
      <div className="intro-text">
        <h1>Breathe Better</h1>
        <p>Welcome to your personalized air quality prediction app!</p>
      </div>
      <p className="click-to-continue">Click anywhere to begin</p>
    </div>
  );
};

export default IntroPage;