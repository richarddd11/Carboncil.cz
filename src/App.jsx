import React, { useState , useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import ProtectedApp from './ProtectedApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    const search = location.search;
    const hash = location.hash;

    // Ak chýba lomítko na konci a nie sme na base route ako /login
    if (
      path !== '/' &&
      !path.endsWith('/') &&
      !path.includes('.') && // ignoruj napr. /súbor.css
      !path.includes('/login') // nepridávať lomítko na špeciálne routy, ak treba
    ) {
      navigate(`${path}/${search}${hash}`, { replace: true });
    }
  }, [location, navigate]);
  return isLoggedIn ? (
    <ProtectedApp />
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} />
  );
}

export default App;
