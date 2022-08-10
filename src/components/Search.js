import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useGlobalContext } from "./Context";
const Search = () => {
  const [user, setUser] = useState("");
  const { remaining, error, getData, isLoading } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    getData(user);
  };
  return (
    <>
      {error.show && (
        <div className="alert alert-danger" role="alert">
          {error.msg}
        </div>
      )}
      <form className="search-container" onSubmit={handleSubmit}>
        <div className="input-group mb-3 input-search">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a github user"
            aria-label="Search for a github user"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <div className="input-group-append">
            {remaining > 0 && !isLoading && (
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            )}
          </div>
        </div>
        <h3 className="requests">Requests {remaining}/60</h3>
      </form>
    </>
  );
};

export default Search;
