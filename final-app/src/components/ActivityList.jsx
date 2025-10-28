import React, { useState, useEffect } from "react";
import "./../App.css";

const activities = [
  { id: 101, name: "Web Dev Bootcamp", date: "2025-12-01" },
  { id: 102, name: "Robotics Club", date: "2025-12-05" },
  { id: 103, name: "Art Competition", date: "2025-12-10" }
];

function ActivityList({ onUpdate }) {
  const [registered, setRegistered] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("participation_activities") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("participation_activities", JSON.stringify(registered));
    // Notify parent on change
    if (onUpdate) onUpdate();
  }, [registered, onUpdate]);

  const handleToggleRegister = (activity) => {
    const isRegistered = registered.some(a => a.id === activity.id);
    if (!isRegistered) {
      setRegistered(prev => [...prev, { ...activity, status: "Registered" }]);
    } else {
      setRegistered(prev => prev.filter(a => a.id !== activity.id));
    }
  };

  return (
    <div className="card">
      <div className="title">Available Activities</div>
      <ul>
        {activities.map(act => {
          const isRegistered = registered.some(a => a.id === act.id);
          return (
            <li key={act.id}>
              <span style={{ fontWeight: "bold", fontSize: "1.1em" }}>{act.name}</span> ({act.date})<br />
              <button
                className={`button ${isRegistered ? "button-registered" : ""}`}
                onClick={() => handleToggleRegister(act)}
              >
                {isRegistered ? "Unregister" : "Register"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ActivityList;
