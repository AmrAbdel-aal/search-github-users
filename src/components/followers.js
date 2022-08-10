import React from "react";
import { useGlobalContext } from "./Context";
const Followers = () => {
  const { followers, userDiv } = useGlobalContext();

  console.log(followers);
  // if (userDiv.current) {
  //   console.log(userDiv.current.getBoundingClientRect().height);
  // }

  if (userDiv.current) {
    return (
      <div
        className="followers-container"
        style={{
          height: userDiv.current.getBoundingClientRect().height,
        }}
      >
        <div className="followers">
          {followers.map((follower) => {
            return (
              <div className="follower" key={follower.id}>
                <img src={follower.avatar_url} alt="" />
                <div className="follower-info">
                  <h3>{follower.login}</h3>
                  <a href={follower.url}>{follower.url}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="followers-container">
        <div className="followers">
          {followers.map((follower) => {
            return (
              <div className="follower" key={follower.id}>
                <img src={follower.avatar_url} alt="" />
                <div className="follower-info">
                  <h3>{follower.login}</h3>
                  <a href={follower.url}>{follower.url}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Followers;
