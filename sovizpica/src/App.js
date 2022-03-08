import "./App.css";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      {/* //react router */}
      <BrowserRouter>
        <Routes>
          {/* route homepage */}
          <Route
            exact
            path="/*"
            {...(user && user._id ? (
              <Homepage />
            ) : (
              <Login setLoginUser={setLoginUser} />
            ))}
          />

          {/* route login */}
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />

          {/* route register */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
