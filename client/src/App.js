import './style/App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/themes';
import { GlobalStyles } from './style/GlobalStyles';
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
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    console.log(user);
    setAuth(true);
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
      console.log('token check triggered');
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, auth, setAuth }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
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
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
