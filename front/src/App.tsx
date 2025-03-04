// front/src/App.tsx
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const handleClick = () => {
    fetch(process.env.REACT_APP_GO_SERVER_ADDRESS + '/api/test')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  };

  return (
    <div className="App">
      <h1>Welcome to auto-fab</h1>
      <button onClick={handleClick}>Test API</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
