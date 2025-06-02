import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BackgroundContext = createContext();
export const useBackground = () => useContext(BackgroundContext);

// Use array and endsWith for robust matching
const backgroundMapping = [
    { path: "/register", className: "register" },
    { path: "/login",    className: "login" },
    { path: "/home",     className: "home" }
];
const defaultBackground = { className: "", color: "var(--text-color)", background: "var(--background-color)" };

const BackgroundProvider = ({ children }) => {
    const location = useLocation();
    const [backgroundClass, setBackgroundClass] = useState("register");

    useEffect(() => {
        const config =
            backgroundMapping.find(cfg => location.pathname.endsWith(cfg.path)) ||
            defaultBackground;
        setBackgroundClass(config.className);
    }, [location.pathname]);

    return (
        <BackgroundContext.Provider value={{ backgroundClass }}>
            <div className={backgroundClass}>{children}</div>
        </BackgroundContext.Provider>
    );
};

export default BackgroundProvider;