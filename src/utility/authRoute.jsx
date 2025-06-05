import { Navigate } from "react-router-dom";
import { USE_DEMO_AUTH } from "./forTesting.jsx";
import { getItem } from "./localStorage.jsx";

// Unified isAuthenticated function for both demo and real use
export function isAuthenticated() {
    // Demo: check "isLoggedIn", Real: check "jwtToken"
    return (USE_DEMO_AUTH && !!getItem("isLoggedIn")) || !!getItem("jwtToken");
}

// PrivateRoute component to protect routes
export const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
};