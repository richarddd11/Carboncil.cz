import React, { useState , useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import ProtectedApp from './ProtectedApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    const endsWithSlash = pathname.endsWith('/');

    if (!endsWithSlash && !pathname.includes('.')) {
      navigate(`${pathname}/${search}${hash}`, { replace: true });
    }
  }, [location, navigate]);


  return isLoggedIn ? (
    <ProtectedApp />
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} />
  );
}

export default App;
