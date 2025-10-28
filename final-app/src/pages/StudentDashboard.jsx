import React from "react";
import UserProfile from "../components/UserProfile";
import EventList from "../components/EventList";
import ActivityList from "../components/ActivityList";
import ParticipationTracker from "../components/ParticipationTracker";
import Notification from "../components/Notification";
import "./../App.css";

function StudentDashboard() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <UserProfile />
      <div className="center">
        <EventList />
        <ActivityList />
        <ParticipationTracker />
        <Notification />
      </div>
    </div>
  );
}

export default StudentDashboard;
