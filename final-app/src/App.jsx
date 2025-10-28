import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

// Import your page components
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      
      <div className="main-bg">
        
       <nav style={{
  display: "flex",
  justifyContent: "center",
  padding: "1rem 0",
  gap: "2rem",
  background: "rgba(52,0,123,0.18)",
  marginBottom: "1.5rem"
}}>
  <Link to="/login" style={{ color: "#ffd200", fontWeight: "bold" }}>Login</Link>
  <Link to="/register" style={{ color: "#ffd200", fontWeight: "bold" }}>Register</Link>
</nav>

        <Routes>
          {/* Default root route to redirect to Login */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Wildcard route for 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
