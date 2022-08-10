import React, { useRef } from "react";
import { useGlobalContext } from "./Context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const User = () => {
  const { user, setUserDiv } = useGlobalContext();
  const { avatar_url, name, twitter_username, bio, company, location, blog } =
    user;
  const userRef = useRef(null);
  setUserDiv(userRef);
  return (
    <div className="user" ref={userRef}>
      <div className="info-box">
        <div className="user-info">
          <img src={avatar_url} alt={name} />
          <div className="name">
            <h3>{name}</h3>
            <p>@{twitter_username}</p>
          </div>
        </div>
        <button>follow</button>
      </div>
      <p className="bio">{bio}</p>
      <div className="details">
        <div className="company details-box">
          <MdBusiness />
          <p>{company || "company"}</p>
        </div>
        <div className="location details-box">
          <MdLocationOn />
          <p>{location || "location"}</p>
        </div>
        <div className="blog details-box">
          <MdLink />
          <a href={blog}>
            <p>{blog || "blog"}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default User;
