import { Link, useNavigate } from "react-router-dom";
import styles from "../CSSModules/componentCSS/subComponents.module.css";
import { clearDemoAuth } from "../utility/forTesting.jsx";
import { removeItem } from "../utility/localStorage.jsx";

// Logo component
export const Logo = ({ src, alt, isAuthenticated }) => (
    isAuthenticated ? (
        <Link to="/home">
            <img src={src} alt={alt} />
        </Link>
    ) : (
        <Link to="/register">
            <img src={src} alt={alt} />
        </Link>
    )
);

// LanguageOptions component
export const LanguageOptions = ({ lang, changeLanguage, languages }) => (
    <div className={styles.languageOptions}>
        {languages.map(({ code, flag, alt, ariaLabel }) => (
            <img
                key={code}
                src={flag}
                alt={alt}
                width={28}
                height={28}
                className={lang === code ? styles.activeLang : ""}
                style={{ cursor: "pointer" }}
                onClick={() => changeLanguage(code)}
                tabIndex={0}
                aria-label={ariaLabel}
            />
        ))}
    </div>
);

// LogoutButton component
export const LogoutButton = ({ children, className, ...props }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        removeItem("jwtToken");
        removeItem("userID");
        clearDemoAuth();
        navigate("/login");
    };

    return (
        <button
            className={className ? className : styles.logoutButton}
            onClick={handleLogout}
            {...props}
        >
            {children}
        </button>
    );
};