import axios from "axios";
import { getItem } from "./localStorage";

// API base URL
const API_BASE = import.meta.env.VITE_API_URL;

// Helper to get token from localStorage
const getAuthHeader = () => {
    const token = getItem("jwtToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
};

// User Signup
export const signupUser = async ({ userName, email, password }) => {
    const res = await axios.post(`${API_BASE}/signup`, { userName, email, password });
    return res.data;
};

// User Login
export const loginUser = async ({ identifier, password }) => {
    const res = await axios.post(`${API_BASE}/login`, { identifier, password });
    return res.data;
};

// Get User Profile
export const fetchUserProfile = async () => {
    const res = await axios.get(`${API_BASE}/profile`, { headers: getAuthHeader() });
    return res.data;
};

// Edit User
export const editUser = async ({ newUsername, newPassword, newEmail }) => {
    const res = await axios.put(
        `${API_BASE}/edit`,
        { newUsername, newPassword, newEmail },
        { headers: getAuthHeader() }
    );
    return res.data;
};

// Delete User
export const deleteUser = async () => {
    const res = await axios.delete(`${API_BASE}/delete`, { headers: getAuthHeader() });
    return res.data;
};