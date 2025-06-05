import styles from "../CSSModules/homepage.module.css";
import { useTranslation } from "react-i18next";
import { LogoutButton } from "../components/subComponents.jsx";

const HomePage = () => {
    const { t } = useTranslation();

    return ( 
        <>
            <div className={styles.homePage}>
                <h1 className={styles.title}>{t("Welcome to Our Website")}</h1>
                <p className={styles.description}>{t("This is the home page where you can find the latest updates and news.")}</p>
                <LogoutButton>
                    {t("Logout")}
                </LogoutButton>
            </div>
        </>
    )
}
export default HomePage;