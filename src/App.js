import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://api.hopewd.com/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage('Error: Unable to fetch API'));
  }, []);

  return (
    <div class='container'>
      <h1>This is a test.</h1>
      <p>API response: {message}</p>
    </div>
  );
}

export default App;