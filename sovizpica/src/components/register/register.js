import React, { useState } from "react";
import "./register.css";
import axios from "axios";
//use Navigate insted of Hitory
import { useNavigate  } from "react-router-dom";

const Register = () => {
  // creating instance
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("http://localhost:5000/register", user)
        .then((res) => console.log(res));
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <div className="register">
      {console.log("User", user)}
      <h1>Register</h1>

      {/* name */}
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>

      {/* email */}
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>

      {/* password */}
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>

      {/* re-enter password */}
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Your Password"
        onChange={handleChange}
      ></input>

      <div className="button" onClick={register}>
        Register
      </div>
      <div> or </div>
      <div className="button" onClick={() => navigate("/login")}>Login</div>
    </div>
  );
};

export default Register;
