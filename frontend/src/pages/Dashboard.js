import React from 'react';

export default function Dashoard(props) {
  return (
    <div className="login-page clearfix">
      <div className="logged-in-box auth0-box logged-in">
        <h1 id="logo">
          <img src="//cdn.auth0.com/samples/auth0_logo_final_blue_RGB.png" />
        </h1>
        <img className="avatar" src="{{ auth0User.extra_data.picture }}" />
        {/* <h2>Welcome {{ username }}</h2>
        <pre>{{ userdata }}</pre> */}
        <a
          id="qsLogoutBtn"
          className="btn btn-primary btn-lg btn-logout btn-block"
          href="/logout"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
