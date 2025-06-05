// Set an item in localStorage
export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

// Get an item from localStorage
export const getItem = (key) => {
    const value = localStorage.getItem(key);
    try {
        return value ? JSON.parse(value) : null;
    } catch {
        return value;
    }
};

// Remove an item from localStorage
export const removeItem = (key) => {
    localStorage.removeItem(key);
};

// Clear all localStorage
export const clearAll = () => {
    localStorage.clear();
};

export const isAuthenticated = () => !!getItem("jwtToken");