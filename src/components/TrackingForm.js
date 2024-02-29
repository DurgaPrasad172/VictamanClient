// TrackingForm.js



import React, { useState } from 'react';
import './TrackingForm.css';

const TrackingForm = ({ onTrack }) => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrack= () => {
    console.log("handleTrack");
    onTrack(trackingNumber);
  };

  return (
    <div className="tracking-form-container">
      <form>
        <input
          type="text"
          id="trackingNumber"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button type="button" onClick={handleTrack}>Track</button>
      </form>
    </div>
  );
};

export default TrackingForm;

