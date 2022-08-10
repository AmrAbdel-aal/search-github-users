import React from "react";
import { useGlobalContext } from "./Context";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();
  console.log({ isAuthenticated, user, isLoading });
  const isUser = isAuthenticated && user;

  return (
    <div className="nav-bar">
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && <h4>welcome, {user.name}</h4>}
      {isUser ? (
        <button
          className="my-btn"
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
      )}
    </div>
  );
};

export default NavBar;
