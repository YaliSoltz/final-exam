import React, { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [jobs, setJobs] = useState([]);

  let config;

  const getUser = async () => {
    let token = localStorage.getItem("x-auth-token");
    if (token) {
      token = jwtDecode(token);
      config = {
        headers: {
          "x-auth-token": token,
        },
      };
    }
  };

  const getJobs = async () => {
    const url = "http://localhost:4000/api/jobs";
    const { data } = axios.get(url, config);
    setJobs(data);
    console.log(data);
  };

  useEffect(() => {
    getUser();
    getJobs();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, jobs, setJobs }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
