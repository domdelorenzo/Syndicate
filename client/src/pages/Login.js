import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LogInUser } from '../Services/endpoints';
import { UserContext } from '../App';
import logo512 from '../assets/logo512.png';

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
    <div className="sign-in">
      <div className="signin-left-side">
        <img src={logo512}></img>
      </div>

      <div className="signin-right-side">
        <div className="welcome-text">
          Organize all your favorite news and blogs in one place
        </div>
        <div className="welcome-sub-text">
          Sign in to your account or click Get Started to sign up
        </div>
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
              <button
                className="normal-btn"
                onClick={props.authClick}
                className="signin-form-button"
              >
                Log In
              </button>
              <br />
              <Link to="/signup">
                <button className="signin-text highlight-btn">
                  Get started
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
