import React, { useState } from "react";
import "./login.css"; // Import CSS file for styling
import { useNavigate, Navigate } from "react-router-dom";
import Home from "../Home/Home";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake username and password for demonstration
    const fakeUsername = "poomon";
    const fakePassword = "poomon123";

    // Check if username and password match the fake credentials
    if (username === fakeUsername && password === fakePassword) {
      setLoginStatus("Login successful");
      navigate("./home", { replace: true });
      // Perform further actions, such as redirecting to a different page
    } else {
      setLoginStatus("Login failed");
      setLoginError(true);
    }

    // Reset the form
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-page">
      <h2>Clubsify Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {loginError && <p className="error">Invalid username or password</p>}
        {loginStatus && <p className="status">{loginStatus}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
