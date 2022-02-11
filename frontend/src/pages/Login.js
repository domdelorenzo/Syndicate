import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Login(props) {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      Please Log In
      <div className="auth0-test">
        <button onClick={() => loginWithRedirect()}>Log In</button>;
      </div>
      <div className="login-page clearfix">
        <div className="login-box auth0-box before">
          <img src="https://i.cloudup.com/StzWWrY34s.png" />
          <h3>Auth0 Example</h3>
          <p>Zero friction identity infrastructure, built for developers</p>
          <a
            id="qsLoginBtn"
            class="btn btn-primary btn-lg btn-login btn-block"
            href="/login/auth0"
          >
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}
