import React, { useEffect, useState } from "react";
import "./../App.css";

function ParticipationTracker() {
  const [participation, setParticipation] = useState([]);

  // This effect updates whenever the localStorage key changes
  useEffect(() => {
    function loadParticipation() {
      setParticipation(JSON.parse(localStorage.getItem("participation_activities") || "[]"));
    }
    loadParticipation();
    // Listen for changes
    window.addEventListener("storage", loadParticipation);
    return () => window.removeEventListener("storage", loadParticipation);
  }, []);

  // Also update when component re-renders for local activity registration changes too
  useEffect(() => {
    setParticipation(JSON.parse(localStorage.getItem("participation_activities") || "[]"));
  });

  return (
    <div className="card">
      <div className="title">Your Activities</div>
      {participation.length === 0 ? (
        <p>No activities yet.</p>
      ) : (
        <ul>
          {participation.map((p, i) => (
            <li key={i}>
              <strong>{p.name}</strong> ({p.date})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ParticipationTracker;
