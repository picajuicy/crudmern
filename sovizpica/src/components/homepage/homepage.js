import React from "react";
import "./homepage.css";
//use Navigate insted of Hitory
import { useNavigate  } from "react-router-dom";

const Homepage = () => {
// creating instance
const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <div className="button" onClick={() => navigate("/login")}>Logout</div>
    </div>
  );
};

export default Homepage;
