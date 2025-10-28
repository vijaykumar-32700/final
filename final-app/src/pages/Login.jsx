import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../App.css";

function Login() {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const regUser = JSON.parse(localStorage.getItem("registeredUser")) || {};
    // Check credentials (demo, not secure)
    if (username === regUser.username && password === regUser.password && role === regUser.role) {
      localStorage.setItem("user", JSON.stringify(regUser));
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }
    } else {
      alert("Invalid credentials or role!");
    }
  }

  return (
    <div className="card">
      <div className="title">Login</div>
      <form onSubmit={handleLogin}>
        <input className="input" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <select className="input" value={role} onChange={e => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <button className="button" type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
