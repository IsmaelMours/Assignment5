import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar.js';
import ResponseCounts from '../components/ResponseCounts.js';

const Dashboard = () => {
  const [responseCounts, setResponseCounts] = useState({
    agree: 0,
    neutral: 0,
    disagree: 0,
    totalQuestions: 0
  });

  useEffect(() => {
    // Fetch response counts from the server
    fetch('http://localhost:3001/responseCounts')
      .then(response => response.json())
      .then(data => {
        setResponseCounts(data);
      })
      .catch(error => {
        console.error('Error fetching response counts:', error);
      });
  }, []);

  return (
    <div>
      <SideBar text="Dashboard" >

        <ResponseCounts/>
      </SideBar>
      
    </div>
  );
}

export default Dashboard;
