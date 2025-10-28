// Dummy API helpers
export const loginUser = async (username, password) => {
  // Replace with real API
  return username === "admin" ? { username: "admin", role: "admin" } : { username, role: "student" };
};
export const fetchActivities = async () => {
  // Simulate an API call
  return [
    { id: 1, name: "Robotics Club", date: "2025-11-12" },
    { id: 2, name: "Literature Meet", date: "2025-12-03" }
  ];
};
