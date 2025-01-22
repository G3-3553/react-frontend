// FormPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FormPage.css';

const FormPage = () => {
  const [inputData, setInputData] = useState({
    Temperature: '',
    Humidity: '',
    PM25: '',
    PM10: '',
    SO2: '',
    NO2: '',
    CO: '',
    Proximity: '',
    Population: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new URLSearchParams(inputData);
      const response = await axios.post('http://127.0.0.1:8000/predict', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      const prediction = response.data.Prediction;
      navigate('/result', { state: { prediction } });
    } catch (err) {
      setError('Error fetching prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page">
      <h1>Air Quality Prediction</h1>
      <form onSubmit={handleSubmit}>
      <div className="input-container">
          {Object.keys(inputData).map((key) => (
            <div key={key} className="input-field">
              <label htmlFor={key}>{key}</label>
              <input
                type="number"
                step="0.01"
                name={key}
                value={inputData[key]}
                onChange={handleInputChange}
                required
              />
            </div>
        ))}
        </div>
        <button type="submit" className="submit-button">
          Predict
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default FormPage;
