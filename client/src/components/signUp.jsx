import axios from 'axios';
import React, { useState } from 'react';

const SignUp = () => {
    const [user, setUser] = useState({});
    const handleSubmit = async () => {
      const url = "http://localhost:4000/api/users";
      const result = await axios.post(url, user)
      console.log(result);
    };
    return (
        <div className="main">
        <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              name
            </label>
            <input
            onChange={(e)=>setUser({...user, name: e.target.value })}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
  
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              phone number
            </label>
            <input
            onChange={(e)=>setUser({...user, phoneNumber: e.target.value })}
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
              onChange={(e)=>setUser({...user, password: e.target.value })}
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
}

export default SignUp;
