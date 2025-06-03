import styles from "../CSSModules/homepage.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { clearDemoAuth } from "../utility/forTesting";

const HomePage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleLogout = () => {
        clearDemoAuth();
        navigate("/login");
    };

    return ( 
        <>
            <div className={styles.homePage}>
                <h1 className={styles.title}>{t("Welcome to Our Website")}</h1>
                <p className={styles.description}>{t("This is the home page where you can find the latest updates and news.")}</p>
                <button className={styles.logoutButton} onClick={handleLogout}>
                    {t("Logout")}
                </button>
            </div>
        </>
    )
}
export default HomePage;