import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUserFromToken } from '../../utilities/users-service';
import './App.css';
import NotesPage from '../NotesPage/NotesPage';
import AuthPage from '../AuthPage/AuthPage';

import NavBar from '../../Components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUserFromToken());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/notes/" element={<NotesPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
