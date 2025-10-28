import React from "react";
import "./../App.css";

function ActivityForm() {
  return (
    <div className="card">
      <div className="title">Create Activity</div>
      <input className="input" type="text" placeholder="Activity Name" />
      <input className="input" type="date" placeholder="Date" />
      <input className="input" type="text" placeholder="Details/Description" />
      <button className="button">Add Activity</button>
    </div>
  );
}
export default ActivityForm;
