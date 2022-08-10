import React from "react";
import Followers from "./followers";
import User from "./user";

const Card = () => {
  return (
    <div className="con">
      <div className="user-followers">
        <User />
        <Followers />
      </div>
    </div>
  );
};

export default Card;
