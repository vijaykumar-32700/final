// Demo authentication helper
export const isAuthenticated = () => !!localStorage.getItem("user");
export const getUser = () => JSON.parse(localStorage.getItem("user"));
export const logoutUser = () => localStorage.removeItem("user");
