// AdminPanel.js

import React, { useState } from 'react';

const AdminPanel = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');

  const handleAddTracking = async () => {
    try {
      const response = await fetch('http://localhost:5011/api/admin/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({ trackingNumber, status, location }),
      });

      if (response.ok) {
        console.log('Tracking information added successfully');
        // Optionally, you can clear the input fields or update state
      } else {
        const data = await response.json();
        console.error('Error adding tracking information:', data.error);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const handleUpdateTracking = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/update/${trackingNumber}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status, location }),
      });

      if (response.ok) {
        console.log('Tracking information updated successfully');
        // Optionally, you can clear the input fields or update state
      } else {
        const data = await response.json();
        console.error('Error updating tracking information:', data.error);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const handleDeleteTracking = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/delete/${trackingNumber}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Tracking information deleted successfully');
        // Optionally, you can clear the input fields or update state
      } else {
        const data = await response.json();
        console.error('Error deleting tracking information:', data.error);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <label>Tracking Number:</label>
        <input type="text" value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} />
      </div>
      <div>
        <label>Status:</label>
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <button onClick={handleAddTracking}>Add Tracking</button>
      <button onClick={handleUpdateTracking}>Update Tracking</button>
      <button onClick={handleDeleteTracking}>Delete Tracking</button>
    </div>
  );
};

export default AdminPanel;
