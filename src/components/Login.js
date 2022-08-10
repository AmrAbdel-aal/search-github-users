import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import loginimg from "../images/login-img.svg";
import "../styles/login.css";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="login-main">
      <div className="container">
        <div className="image">
          <img src={loginimg} alt="image cannot be loaded" />
        </div>
        <h1>Github User</h1>
        <button className="my-btn" onClick={loginWithRedirect}>
          login
        </button>
      </div>
    </div>
  );
};

export default Login;
