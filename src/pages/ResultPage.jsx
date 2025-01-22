// ResultPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultPage.css';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { prediction } = location.state || {};

  return (
    <div className="result-container">
      <h1>Prediction Result</h1>
      <p>{prediction || 'No result available.'}</p>
      <button className="back-button" onClick={() => navigate('/form')}>
        Go Back
      </button>
    </div>
  );
};

export default ResultPage;
