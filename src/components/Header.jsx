import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../CSSModules/componentCSS/header.module.css";
import { getFilePaths } from "../assets/FileManager.jsx";
import { useCloseOnOutsideClick } from "./functions/hooks.jsx";
import { isAuthenticated } from "../utility/forTesting.jsx";

// Logo component
const Logo = ({ src, alt, isAuthenticated }) => (
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
const LanguageOptions = ({ lang, changeLanguage, languages }) => (
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

const Header = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || "en");
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);

    const navLinks = [
        { to: "/register", key: "Register" },
        { to: "/login", key: "Login" },
        { to: "/home", key: "Home" }
    ];
    const isActive = (path) => location.pathname.endsWith(path);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLang(lng);
    };

    // Get file paths for icons and logo
    const [enFlag, noFlag] = getFilePaths("icons", ["flag-uk.svg", "flag-norway.svg"]);
    const [logoSample] = getFilePaths("logo", ["logoExample.svg"]);

    // Languages array for LanguageOptions
    const languages = [
        { code: "en", flag: enFlag, alt: "English", ariaLabel: "Switch to English" },
        { code: "no", flag: noFlag, alt: "Norsk", ariaLabel: "Bytt til norsk" }
    ];

    useCloseOnOutsideClick(menuRef, () => setMenuOpen(false), menuOpen);

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Logo src={logoSample} alt="Logo Example" isAuthenticated={isAuthenticated()} />
            </div>
            <div ref={menuRef}>
                <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
                    <span className={styles.menuIcon}>&#9776;</span>
                </button>
                <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                    {navLinks.map(link => (
                        <div key={link.to} className={styles.navLink}>
                            <Link to={link.to} className={isActive(link.to) ? styles.active : ""} onClick={() => setMenuOpen(false)}>
                                <h3>{t(link.key)}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <LanguageOptions
                lang={lang}
                changeLanguage={changeLanguage}
                languages={languages}
            />
        </div>
    );
};

export default Header;