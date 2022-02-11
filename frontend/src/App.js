import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/static" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashoard />} /> */}
      </Routes>
    </div>
  );
}

export default App;
