import React from "react";
import { useContext } from "react";
import { JobContext } from "../context/Job";
import { UserContext } from "../context/user";

const Main = () => {
  const { user, jobs } = useContext(UserContext);
  return (
    <div className="main">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>work</th>
            <th>about</th>
            <th>sign in</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>
              <td>{job.content}</td>
              <td>
                <button>submit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
