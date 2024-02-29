// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change 'Route' to 'Routes'
import TrackingForm from './components/TrackingForm';
import TrackingInfo from './components/TrackingInfo';
import AdminPanel from './components/AdminPanel';
import './App.css'; // Include a main CSS file for global styles

const App = () => {
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleTrack = async (trackingNumber) => {
    console.log("outer");
    try {
      console.log("inner");
      const response = await fetch(`http://localhost:5011/api/tracking/${trackingNumber}`);
      const data = await response.json();
      console.log(data.status);
      if (response.ok) {
        setTrackingInfo(data);
      } else {
        console.error('Error fetching tracking information:', data.error);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
    console.log('Handling track for', trackingNumber);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes> 
          <Route path="/" element={<React.Fragment> 
            <TrackingForm onTrack={handleTrack} />
            {trackingInfo && <TrackingInfo trackingInfo={trackingInfo} />}
          </React.Fragment>} />
          <Route path="/admin" element={<AdminPanel />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
