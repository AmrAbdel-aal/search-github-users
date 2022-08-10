import React from "react";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { useGlobalContext } from "../components/Context";

// import Items from "../data/items.js";
const Info = () => {
  const { user } = useGlobalContext();

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: user.public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: user.followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: user.following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "gists",
      value: user.public_gists,
      color: "yellow",
    },
  ];
  return (
    <div className="con">
      <div className="info-container">
        {items.map((item) => {
          return (
            <div className="info" key={item.id}>
              <div className={`${item.color} icon-container`}>{item.icon}</div>
              <div className="text">
                <h1>{item.value}</h1>
                <p>{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
