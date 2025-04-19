import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import ProtectedApp from './ProtectedApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <BrowserRouter>
      <ProtectedApp />
    </BrowserRouter>
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} />
  );
}

export default App;
