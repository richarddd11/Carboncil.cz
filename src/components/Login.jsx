import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // jednoduché heslo - tu si ho môžeš zmeniť
    if (username === 'admin' && password === 'Carboncil381') {
      onLogin();
    } else {
      setError('Nesprávne meno alebo heslo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Prihlásenie</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Používateľské meno"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="password"
          placeholder="Heslo"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
        >
          Prihlásiť sa
        </button>
      </form>
    </div>
  );
};

export default Login;