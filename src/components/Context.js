import { createContext, useContext, useEffect, useState } from "react";
import mockUser from "../data/mockUser";
import mockFollowers from "../data/mockFollowers";
import mockRepos from "../data/mockRepos";
import axios from "axios";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(mockUser);
  const [followers, setFollowers] = useState(mockFollowers);
  const [repos, setRepo] = useState(mockRepos);
  const [remaining, setRemaining] = useState(60);
  const [error, setError] = useState({ show: false, msg: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [userDiv, setUserDiv] = useState(null);
  const getData = async (user) => {
    setIsLoading(true);
    const response = await axios(`https://api.github.com/users/${user}`).catch(
      (err) => {
        console.log(err);
      }
    );
    // console.log(response);
    if (response) {
      setError({ show: false, msg: "" });
      setUser(response.data);

      await Promise.allSettled([
        axios(`https://api.github.com/users/${user}/repos`),
        axios(`https://api.github.com/users/${user}/followers`),
      ]).then((result) => {
        const [repos, followers] = result;
        if (repos.status === "fulfilled") {
          setRepo(repos.value.data);
        }
        if (followers.status === "fulfilled") {
          setFollowers(followers.value.data);
        }
      });
    } else {
      setError({ show: true, msg: "no such user" });
    }
    checkRemaining();
    setIsLoading(false);
  };

  const checkRemaining = () => {
    axios("https://api.github.com/rate_limit")
      .then((res) => {
        const { data } = res;
        const {
          rate: { remaining: rest },
        } = data;
        setRemaining(rest);
        if (remaining == 0) {
          setError({
            show: true,
            msg: "exceeded request limit, try again later",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(checkRemaining, []);
  return (
    <AppContext.Provider
      value={{
        user,
        followers,
        repos,
        remaining,
        error,
        getData,
        isLoading,
        userDiv,
        setUserDiv,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
