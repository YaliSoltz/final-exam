import React from 'react';

import { Route, Routes } from "react-router-dom";
import Login from "./login";
import SignUp from "./signUp";
const BeforeLog = () => {
    return (
        <div>
            <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
        </div>
    );
}

export default BeforeLog;
