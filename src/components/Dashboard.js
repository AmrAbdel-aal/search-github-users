import React from "react";
import "../App.css";
import Card from "./card";
import { useGlobalContext } from "./Context";
import Info from "./Info";
import NavBar from "./NavBar";
import Repo from "./Repo";
import Search from "./Search";
import preLoader from "../images/preloader.gif";
const Dashboard = () => {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <div className="dash-main">
        {/* <NavBar /> */}
        <div className="dash-main-container">
          <NavBar />
          <Search />
          <img src={preLoader} alt="Loading..." className="preloader" />
        </div>
      </div>
    );
  }
  return (
    <div className="dash-main">
      {/* <NavBar /> */}
      <div className="dash-main-container">
        <NavBar />
        <Search />
        <Info />
        <Card />
        <Repo />
      </div>
    </div>
  );
};

export default Dashboard;
