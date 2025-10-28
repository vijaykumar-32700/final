import React from "react";
import "./../App.css";

const events = [
  { id: 1, name: "Sports Meet", date: "2025-11-18" },
  { id: 2, name: "Science Club Expo", date: "2025-11-22" },
  { id: 3, name: "Music Festival", date: "2025-11-25" }
];

function EventList() {
  return (
    <div className="card">
      <div className="title">Upcoming Events</div>
      <ul>
        {events.map(ev => (
          <li key={ev.id}>
            <span style={{ fontWeight: "bold", fontSize: "1.1em" }}>{ev.name}</span>
            {" "}({ev.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
