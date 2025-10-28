import React from "react";
import "./../App.css";

function UserProfile() {

  let user = {};
  try {
    user = JSON.parse(localStorage.getItem("user")) || {};
  } catch {
    user = {};
  }

  return (
    <div className="card side-profile">
      <div className="title">Student Profile</div>
      <p>Name: {user.fullName || user.username || "Unknown"}</p>
      <p>Email: {user.email || "Not available"}</p>
      <p>Role: {user.role || "Student"}</p>
    </div>
  );
}
export default UserProfile;
