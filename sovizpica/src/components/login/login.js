import React, { useState } from "react";
import "./login.css";
import axios from "axios";
//use Navigate insted of Hitory
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  // creating instance
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //input change event handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //login function
  const login = () => {
    axios.post("http://localhost:5000/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate.navigate("/");
    });
  };

  return (
    <div className="login">
      {console.log(user)}
      <h1>Login</h1>

      {/* email */}
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>

      {/* password */}
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your password"
      ></input>

      <div className="button" onClick={login}>
        Login
      </div>
      <div> or </div>
      <div className="button" onClick={() => navigate("/register")}>
        Register
      </div>
    </div>
  );
};

export default Login;
