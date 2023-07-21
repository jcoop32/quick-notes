import { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LoginForm from '../../Components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [loginPage, setLoginPage] = useState(null);
  return (
    <main>
      <h1>AuthPage</h1>
      {!loginPage && <SignUpForm setUser={setUser} />}
      {loginPage && <LoginForm setUser={setUser} />}
      <button onClick={() => setLoginPage(!loginPage)}>
        {loginPage ? 'Signup' : 'Login'}
      </button>
    </main>
  );
}
