import React from "react";
import { Link } from "react-router-dom";
import "../styles/error.css";
import styled from "styled-components";
const Error = () => {
  return (
    <Wrapper>
      <div className="Error-main">
        <h1> 404 </h1>
        <p>sorry, the page you tries cannot be found</p>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .Error-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: aqua;
  }
  .btn {
    text-decoration: none;
    background-color: rgb(65, 209, 209);
    padding: 3px 10px;
    border-radius: 4px;
  }
  .Error-main p {
    margin: 15px;
  }
`;
export default Error;
