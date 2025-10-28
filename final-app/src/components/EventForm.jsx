import React from "react";
import "./../App.css";

function EventForm() {
  return (
    <div className="card">
      <div className="title">Create Event</div>
      <input className="input" type="text" placeholder="Event Name" />
      <input className="input" type="date" placeholder="Date" />
      <input className="input" type="text" placeholder="Details/Description" />
      <button className="button">Add Event</button>
    </div>
  );
}
export default EventForm;
