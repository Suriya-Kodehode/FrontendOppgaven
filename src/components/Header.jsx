import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../CSSModules/componentCSS/header.module.css";
import { getFilePaths } from "../assets/FileManager.jsx";
import { useCloseOnOutsideClick } from "./functions/hooks.jsx";
import { isAuthenticated } from "../utility/authRoute.jsx";
import { Logo, LanguageOptions, LogoutButton } from "./subComponents.jsx";
import { ProfileIcon } from "../assets/svgFiles.jsx";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || "en");
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [profileMenuHover, setProfileMenuHover] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);
    const profileRef = useRef(null);

    const navLinks = [
        { to: "/register", key: "Register" },
        // { to: "/login", key: "Login" },
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

    // Only close profile menu if not hovering over icon or dropdown
    useCloseOnOutsideClick(profileRef, () => {
        if (!profileMenuHover) setProfileMenuOpen(false);
    }, profileMenuOpen);

    // Only show dropdown if it was opened by click, and keep open while hovering
    const isDropdownOpen = profileMenuOpen || profileMenuHover;

    return (
        <div className={styles.header}>
            <div className={styles.leftSection}>
                <div className={styles.logo}>
                    <Logo src={logoSample} alt="Logo Example" isAuthenticated={isAuthenticated()} />
                </div>
                <div className={styles.languageSelector}>
                    <LanguageOptions lang={lang} changeLanguage={changeLanguage} languages={languages}/>
                </div>
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
            <div className={styles.rightSection}>
                <div
                    className={styles.profileIcon}
                    ref={profileRef}
                    onClick={() => setProfileMenuOpen(true)}
                    onMouseEnter={() => {
                        if (profileMenuOpen) setProfileMenuHover(true);
                    }}
                    onMouseLeave={() => setProfileMenuHover(false)}
                >
                    <ProfileIcon
                        style={{ cursor: "pointer" }}
                        tabIndex={0}
                        aria-label="Profile menu"
                    />
                    {isDropdownOpen && (
                        <div
                            className={styles.profileDropdown}
                            onMouseEnter={() => setProfileMenuHover(true)}
                            onMouseLeave={() => {
                                setProfileMenuHover(false);
                                setProfileMenuOpen(false);
                            }}
                        >
                            {!isAuthenticated() ? (
                                <Link to="/login" className={styles.profileDropdownBtn} onClick={() => setProfileMenuOpen(false)}>
                                    {t("Login")}
                                </Link>
                            ) : (
                                <LogoutButton className={styles.profileDropdownBtn}>
                                    {t("Logout")}
                                </LogoutButton>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;