import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LogInUser } from '../Services/endpoints';
import { UserContext } from '../App';

export default function Login(props) {
  const [logIn, setLogIn] = useState({ username: '', password: '' });
  const { setUser, setAuth } = useContext(UserContext);
  const handleChange = (e) => {
    setLogIn({ ...logIn, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await LogInUser(logIn);
    setUser(res);
    setLogIn({});
    setAuth(true);
  };

  return (
    <div className="SignIn">
      <div className="signin-left-side"></div>

      <div className="signin-right-side">
        <div className="signin-form-container-div">
          <form onSubmit={handleSubmit}>
            <div className="signin-form-div">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                className="signin-form"
                required
              />
              <br />
            </div>

            <div className="signin-form-div">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="signin-form"
                // required
              />
            </div>

            <div className="signin-form-buttons-div">
              <button onClick={props.authClick} className="signin-form-button">
                Log In
              </button>
              <br />
              <span className="signin-text">
                Don't have an account? Register <Link to="/signup">here!</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
