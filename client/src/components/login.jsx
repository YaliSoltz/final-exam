import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate()
  const handleSubmit = async () => {
    const url = "http://localhost:4000/login";
    const { data } = await axios.post(url, user);
    if(data){
    localStorage.setItem("x-auth-token", data);
    navigate('/')}
    else alert('invalid phone number or password')
  };

  return (
    <div className="main">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            phone number
          </label>
          <input
            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
