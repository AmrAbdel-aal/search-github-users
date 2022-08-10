import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import preloaderImage from "../images/preloader.gif";
const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <div className="prelader-image-container">
        <img src={preloaderImage} alt="" />
      </div>
    );
  }
  if (error) {
    return error;
  }
  return children;
};

export default AuthWrapper;
