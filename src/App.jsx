import React, { useState , useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import ProtectedApp from './ProtectedApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fullPath = location.pathname + location.search + location.hash;
  
    if (
      !location.pathname.endsWith('/') &&
      !location.pathname.includes('.') &&
      !location.pathname.includes('/login')
    ) {
      navigate(fullPath + '/', { replace: true });
    }    
  }, [location, navigate]);
  return isLoggedIn ? (
    <ProtectedApp />
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} />
  );
}

export default App;
