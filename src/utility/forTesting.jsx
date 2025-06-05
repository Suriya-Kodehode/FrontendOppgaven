import { setItem, getItem, removeItem } from "./localStorage.jsx";

export const USE_DEMO_AUTH = false; // Set to false to disable demo logic or true to enable it.

export function isAuthenticated() {
    return !!getItem("isLoggedIn");
}

export const handleRegister = (e, navigate) => {
    if (!USE_DEMO_AUTH) {
        alert("Demo mode is OFF. Implement real registration logic.");
        return;
    }
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    setItem("registeredUser", { username, email, password });
    navigate("/login");
};

export const handleLogin = (e, navigate) => {
    if (!USE_DEMO_AUTH) {
        alert("Demo mode is OFF. Implement real login logic.");
        return;
    }
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;

    const stored = getItem("registeredUser") || {};
    if (username === stored.username && password === stored.password) {
        setItem("isLoggedIn", true);
        navigate("/home");
    } else {
        alert("Invalid username or password");
    }
};

// Clears demo auth data from localStorage
export const clearDemoAuth = () => {
    removeItem("registeredUser");
    removeItem("isLoggedIn");
};