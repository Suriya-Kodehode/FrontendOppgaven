import styles from "../CSSModules/loginpage.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.loginPage}>
            <h1 className={styles.title}>{t("Login")}</h1>
            <form className={styles.form}>
                <div>
                    <label htmlFor="username">{t("Username")}:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        placeholder={t("Enter your username")}
                    />
                </div>
                <div>
                    <label htmlFor="password">{t("Password")}:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder={t("Enter your password")}
                    />
                </div>
                <button type="submit">{t("Login")}</button>
            </form>
            <div className={styles.registerLink}>
                {t("Don't have an account?")} <Link to="/register">{t("Register")}</Link>
            </div>
        </div>
    );
};

export default LoginPage;