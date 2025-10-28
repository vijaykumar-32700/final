import React from "react";
import EventForm from "../components/EventForm";
import ActivityForm from "../components/ActivityForm";
import ParticipationTracker from "../components/ParticipationTracker";
import Notification from "../components/Notification";
import "./../App.css";

function AdminDashboard() {
  return (
    <div>
      <div className="title">Admin Dashboard</div>
      <div className="center">
        <EventForm />
        <ActivityForm />
        <ParticipationTracker />
        <Notification />
      </div>
    </div>
  );
}

export default AdminDashboard;
