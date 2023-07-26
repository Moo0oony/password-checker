import React from 'react';
import PasswordStrengthMeter from './components/PasswordStrengthMeter';
import "./PasswordStrength.css";


function App() {
  const [password, setPassword] = React.useState('');

  return (
    <div className='container'>
      <h1>Gimme Ur Pass :)</h1>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <PasswordStrengthMeter password={password} />
    </div>
  );
};

export default App;