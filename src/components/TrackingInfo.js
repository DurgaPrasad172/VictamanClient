// TrackingInfo.js



import React from 'react';
import './TrackingInfo.css';

const TrackingInfo = ({ trackingInfo }) => {
  return (
    <div className="tracking-info-container">
      <h2>Tracking Information</h2>
      <p>Status: {trackingInfo.status}</p>
      <p>Location: {trackingInfo.location}</p>
    </div>
  );
};

export default TrackingInfo;
