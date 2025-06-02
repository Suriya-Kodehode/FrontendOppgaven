import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../CSSModules/componentCSS/header.module.css";
import { getFilePath } from "../assets/FileManager";

const enFlag = getFilePath("icons", "flag-uk.svg");
const noFlag = getFilePath("icons", "flag-norway.svg");

const Header = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || "en");
    const location = useLocation();

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

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to="/home">{t("MyWebsite")}</Link>
            </div>
            <div className={styles.navLinks}>
                {navLinks.map(link => (
                    <div key={link.to}>
                        <Link to={link.to} className={isActive(link.to) ? styles.active : ""}>
                            <p>{t(link.key)}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={styles.languageOptions}>
                <img
                    src={enFlag}
                    alt="English"
                    width={28}
                    height={28}
                    className={lang === "en" ? styles.activeLang : ""}
                    style={{ cursor: "pointer" }}
                    onClick={() => changeLanguage("en")}
                    tabIndex={0}
                    aria-label="Switch to English"
                />
                <img
                    src={noFlag}
                    alt="Norsk"
                    width={28}
                    height={28}
                    className={lang === "no" ? styles.activeLang : ""}
                    style={{ cursor: "pointer" }}
                    onClick={() => changeLanguage("no")}
                    tabIndex={0}
                    aria-label="Bytt til norsk"
                />
            </div>
        </div>
    );
};

export default Header;