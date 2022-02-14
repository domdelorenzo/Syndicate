import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './pages/Profile';

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {user.name} <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
        <div className="App">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} /> */}
            <Route path="/" element={<Profile />} />
          </Routes>
        </div>
      </div>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;

    // return (
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //     </Routes>
    //   </div>
    // );
  }
}

export default App;
