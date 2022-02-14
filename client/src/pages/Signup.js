import { useState } from 'react';
import { RegisterUser } from '../Services/endpoints';
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
  const [values, setValues] = useState({});
  let navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await RegisterUser(values);
    setValues({});
    navigate('/');
  };
  return (
    <div className="SignUp">
      <div className="signup-left-side">
        <div className="signup-form-container-div">
          <form onSubmit={handleSubmit}>
            <div className="signup-form-div">
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="signup-form"
              />
              <br />
            </div>

            <div className="signup-form-div">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                className="signup-form"
              />
              <br />
            </div>

            <div className="signup-form-div">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="signup-form"
              />
              <br />
              <button className="signup-form-button">Sign up</button>
              <button
                className="signup-form-cancel-button"
                onClick={() => {
                  props.history.push('/');
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
