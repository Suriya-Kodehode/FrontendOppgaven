import { Navigate } from "react-router-dom";
import { USE_DEMO_AUTH } from "./forTesting.jsx";
import { getItem } from "./localStorage.jsx";

// Unified isAuthenticated function for both demo and real use
export const isAuthenticated = () =>
    (USE_DEMO_AUTH && !!getItem("isLoggedIn")) || !!getItem("jwtToken");

// RedirectAuth component for login/register pages
export const RedirectAuth = ({ children }) => {
    return isAuthenticated() ? <Navigate to="/home" replace /> : children;
};

// PrivateRoute component to protect routes
export const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
};