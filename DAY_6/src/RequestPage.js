import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequestId, setSelectedRequestId] = useState('');

  useEffect(() => {
    // Fetch requests from the database
    const fetchRequests = async () => {
      try {
        // Replace this code with your actual API call to fetch requests from the database
        const response = await axios.get('https://api.example.com/requests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleAssignRequest = async () => {
    try {
      // Replace this code with your actual API call to assign the selected request
      await axios.post(
        `https://api.example.com/requests/${selectedRequestId}/assign`
      );

      // Perform any necessary updates after assignment
      console.log('Request assigned successfully');
    } catch (error) {
      console.error('Error assigning request:', error);
    }
  };

  return (
    <div>
      <h2>Request Page</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>{request.title}</li>
        ))}
      </ul>
      <div>
        <select
          value={selectedRequestId}
          onChange={(e) => setSelectedRequestId(e.target.value)}
        >
          <option value="">Select a request</option>
          {requests.map((request) => (
            <option key={request.id} value={request.id}>
              {request.title}
            </option>
          ))}
        </select>
        <button onClick={handleAssignRequest} disabled={!selectedRequestId}>
          Assign Request
        </button>
      </div>
    </div>
  );
};

export default RequestPage;
