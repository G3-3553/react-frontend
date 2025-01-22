// App.jsx

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import FormPage from './pages/FormPage';
import ResultPage from './pages/ResultPage';
import './index.css';

function AppContent() {
  const navigate = useNavigate();

  const handleProceed = () => {
    // Navigate to the form page
    navigate('/form');
  };}

function App() {
  useEffect(() => {
    // Test backend connectivity
    const checkBackend = async () => {
      try {
        const response = await fetch('https://reactnew-frontend.onrender.com/');
        if (response.ok) {
          const data = await response.json();
          console.log('Backend response:', data);
        } else {
          console.error('Backend responded with an error:', response.status);
        }
      } catch (error) {
        console.error('Error connecting to backend:', error);
      }
    };

    checkBackend();
  }, []);
  
  return (
    <Router>
      <div className="app-container">
        {/* Common Header */}
        <header>
          <div className="header-container">
            <div className="logo">
              <i className="fa-solid fa-lungs"></i>
            </div>
            <h1>BreatheBetter</h1>
          </div>
        </header>

        {/* Main content */}
        <main>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </main>

        {/* Common Footer */}
        <footer>
          <div className="footer-container">
          
            <p class="footer-text">&copy; 2025 Air Quality Prediction | Developed by <strong>Team C</strong></p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
