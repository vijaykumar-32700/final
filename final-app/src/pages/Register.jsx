import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../App.css";

function Register() {
  const [role, setRole] = useState("student");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault(); // Prevent page reload
    // Save registration data
    const newUser = { fullName, email, username, password, role };
    localStorage.setItem("user", JSON.stringify(newUser)); // Save for profile/dashboard
    // Redirect directly to dashboard based on chosen role
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/student");
    }
  }

  return (
    <div className="card">
      <div className="title">Register</div>
      <form onSubmit={handleRegister}>
        <input className="input" type="text" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} required />
        <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input className="input" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <select className="input" value={role} onChange={e => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <button className="button" type="submit">Create Account</button>
      </form>
    </div>
  );
}
export default Register;
