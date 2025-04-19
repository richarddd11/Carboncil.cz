import React, { useState } from 'react';
import Login from './components/Login';
import ProtectedApp from './ProtectedApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <ProtectedApp />
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} />
  );
}

export default App;
