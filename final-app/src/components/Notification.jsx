import React from "react";
import "./../App.css";

// Dummy notifications
const notifications = [
  "Music Festival on Nov 25! Register soon.",
  "Science Club Expo updated: Nov 22.",
  "Your registration for Sports Meet confirmed."
];

function Notification() {
  return (
    <div className="card">
      <div className="title">Notifications</div>
      <ul>
        {notifications.map((note, i) => (
          <li key={i} style={{color: "#ffd200"}}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
export default Notification;
