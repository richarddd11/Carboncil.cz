import { useState } from 'react';
import Login from './components/Login'; // cesta podľa projektu
import ProtectedApp from './ProtectedApp'; // zvyšok tvojej stránky

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <ProtectedApp />
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} />
  );
}

export default App;