import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { CheckSession } from './Services/endpoints';
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  const checkToken = async () => {
    const res = await CheckSession();
    // setUser(res);
    console.log(res);
    setAuth(true);
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
    }
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser, auth, setAuth }}>
      <div className="App">
        {auth ? (
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Login setUser={setUser} setAuth={setAuth} />}
            />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
