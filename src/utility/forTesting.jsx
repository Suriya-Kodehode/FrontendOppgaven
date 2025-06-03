export const USE_DEMO_AUTH = true; // Set to false to disable demo logic

export function isAuthenticated() {
    return !!localStorage.getItem("isLoggedIn");
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

    localStorage.setItem("registeredUser", JSON.stringify({ username, email, password }));

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

    const stored = JSON.parse(localStorage.getItem("registeredUser") || "{}");
    if (username === stored.username && password === stored.password) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home");
    } else {
        alert("Invalid username or password");
    }
};

// Clears demo auth data from localStorage
export const clearDemoAuth = () => {
    localStorage.removeItem("registeredUser");
    localStorage.removeItem("isLoggedIn");
};