import React, { useState } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      {isLoggedIn ? (
        <>
          <h1>Welcome back</h1>
          <LogoutButton onClick={() => setIsLoggedIn(false)} />
        </>
      ) : (
        <>
          <h1>Please sign up.</h1>
          <LoginButton onClick={() => setIsLoggedIn(true)} />
        </>
      )}
    </div>
  );
}

export default App;
